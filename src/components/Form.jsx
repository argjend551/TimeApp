import useStates from "../js/useStates";
import Button from "react-bootstrap/Button";
import store from "../js/localStore";
import PresistantData from "../components/PresistantData";
import Form from "react-bootstrap/Form";
function MyForm(props) {
  let { addCity, add } = props;

  let [formValues, changeFormValues] = useStates({
    utc: "",
    city: "",
  });

  function updateFormValue(event) {
    let { name, value } = event.target;
    changeFormValues({ [name]: value });
  }

  function submitForm(event) {
    // prevent the default behavior of
    // the browser (don't reload on submit)
    event.preventDefault();


    // Detta är det jag menar med lite oproffsigt // Tim 
    // Kanske är bara jag som fjantar mej.
    if (store.list != null) {
      const data = JSON.stringify(store.list);
      var items = JSON.parse(data);

      // dunno why id becomes 79.
      items.push({ "id": data.length, "city": formValues.city, "timezone": formValues.utc, "image": "none.", "imageBgr": "None" });

      console.log(items);

      store.list = items;
      store.save();

      console.log("Saved localstoragee MULTIPLE");
    }
    else {
      const nItem = [{ "id": "1", "city": formValues.city, "timezone": formValues.utc, "image": "none.", "imageBgr": "None" }];

      store.list = nItem;
      store.save();

      console.log("Saved localstoragee SINGLE");
    }


    addCity([...add, formValues]);
  }

  let { city, utc } = formValues;
  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="city"
            value={city}
            onChange={updateFormValue}
            placeholder="Enter a City"
            required
            minLength={2}
            maxLength={15}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            name="utc"
            placeholder="Enter UTC"
            max="24"
            min="-24"
            value={utc}
            onChange={updateFormValue}
            required
            maxLength={2}
          />
        </Form.Group>
        <Button type="submit" value="Add" className="add-city-button">
          Add{" "}
        </Button>
      </form>
    </div>
  );
}

export default MyForm;
