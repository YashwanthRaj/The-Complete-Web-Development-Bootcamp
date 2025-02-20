import React from "react";

function List(props) {
  const list = props.listEntered;

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
