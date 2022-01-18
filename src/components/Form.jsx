import useStates from "./useStates";
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
    addCity([...add, formValues]);
  }

  let { city, utc } = formValues;
  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="city"
          value={city}
          onChange={updateFormValue}
          placeholder="Enter a City"
          required
          maxLength={15}
        />
        <input
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
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default MyForm;
