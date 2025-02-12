export default function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const fruitList = fruits.map((fruit) => {
    return <li>{fruit}</li>;
  });

  return <ul>{fruitList}</ul>;
}
