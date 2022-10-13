import { useState } from "react";

function RandomList() {
  const [numbers, setNewNumber] = useState([]);
  const randomHandler = () => {
    const newArr = [...numbers];

    newArr.push(Math.random());

    setNewNumber(newArr);
    // setNewNumber([...numbers, Math.random()]);
    console.log("Numbers Array", numbers);
  };
  return (
    <div>
      <button onClick={randomHandler}>Generate Random List</button>
      {numbers.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default RandomList;
