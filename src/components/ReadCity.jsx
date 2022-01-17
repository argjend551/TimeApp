function ReadCity(props) {

  let { town } = props;
  let { id, city, timezone, image } = town;

  return <div className="city">
    <img src={image} />
    <h3>{city}</h3>
    <p>Timezone: UTC {timezone}</p>
  </div>
}

export default ReadCity;