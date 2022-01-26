import useStates from "../../js/useStates";
import Button from "react-bootstrap/Button";
import store from "../../js/localStore";
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

  function clearForms() {
    changeFormValues({
      utc: "",
      city: "",
    });
  }

  function submitForm(event) {
    // prevent the default behavior of
    // the browser (don't reload on submit)
    event.preventDefault();

    // Save into already created list.
    if (store.list != null) {
      const data = JSON.stringify(store.list);
      var items = JSON.parse(data);

      items.push({
        id: data.length,
        city: formValues.city,
        timezone: formValues.utc,
        image: "none.",
        imageBgr: "None",
      });

      store.list = items;
      store.save();
    }
    // New list init.
    else {
      const nItem = [
        {
          id: "1",
          city: formValues.city,
          timezone: formValues.utc,
          image: "none.",
          imageBgr: "None",
        },
      ];

      store.list = nItem;
      store.save();
    }

    addCity([...add, formValues]);
    clearForms();
  }

  let { city, utc } = formValues;
  const clearForm = city.length > 0;
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
          <Form.Label htmlFor="disabledSelect">Select UTC</Form.Label>
          <Form.Select name="utc" onChange={updateFormValue} required>
            <option value="" disabled selected hidden>
              UTC
            </option>
            <option value={-12}>UTC-12</option>
            <option value={-11}>UTC-11</option>
            <option value={-10}>UTC-10</option>
            <option value={-9.5}>UTC-9.30</option>
            <option value={-9}>UTC-9</option>
            <option value={-8}>UTC-8</option>
            <option value={-7}>UTC-7</option>
            <option value={-6}>UTC-6</option>
            <option value={-5}>UTC-5</option>
            <option value={-4}>UTC-4</option>
            <option value={-3.5}>UTC-3.30</option>
            <option value={-3}>UTC-3</option>
            <option value={-2}>UTC-2</option>
            <option value={-1}>UTC-1</option>
            <option value={0}>UTC 00</option>
            <option value={1}>UTC+1</option>
            <option value={2}>UTC+2</option>
            <option value={3}>UTC+3</option>
            <option value={4}>UTC+4</option>
            <option value={4.5}>UTC+4.30</option>
            <option value={5}>UTC+5</option>
            <option value={5.5}>UTC+5.30</option>
            <option value={5.75}>UTC+5.45</option>
            <option value={6}>UTC+6</option>
            <option value={6.5}>UTC+6.30</option>
            <option value={7}>UTC+7</option>
            <option value={8}>UTC+8</option>
            <option value={8.75}>UTC+8.45</option>
            <option value={9}>UTC+9</option>
            <option value={9.5}>UTC+9.30</option>
            <option value={10}>UTC+10</option>
            <option value={10.5}>UTC+10.30</option>
            <option value={11}>UTC+11</option>
            <option value={12}>UTC+12</option>
            <option value={12.75}>UTC+12.45</option>
            <option value={13}>UTC+13</option>
            <option value={14}>UTC+14</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" value="Add" className="add-city-button">
          Add{" "}
        </Button>
        {clearForm && (
          <Button value="Add" className="add-city-button" onClick={clearForms}>
            Clear{" "}
          </Button>
        )}
      </form>
    </div>
  );
}

export default MyForm;
