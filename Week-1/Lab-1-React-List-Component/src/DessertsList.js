function DessertsList(props) {
  const desserts = props.data;
  const lessCalories = desserts
    .filter(dessert => {
      return dessert.calories < 500;
    })
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => {
      return (
        <li>{dessert.name} - {dessert.calories} cal</li>
      )
    });
  return <ul>{lessCalories}</ul>

}

export default DessertsList;
