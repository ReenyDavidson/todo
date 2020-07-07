import React from "react";

const ListDisplay = ({ Lists, deleteItem }) => {
  const DisplayList = Lists.map((List) => {
    return (
      <div key={List.id}>
        <div> {List.name}</div>
        <button
          onClick={() => {
            deleteItem(List.id);
          }}
        >
          delete
        </button>
      </div>
    );
  });
  return <div>{DisplayList}</div>;
};

export default ListDisplay;
