import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchByName, setSearchByName] = useState("");
  const [newName, setNewName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");
  const [array, setArray] = useState(items);

  //filtering by category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  //searching by name
  function handleSearchItem(event) {
    setSearchByName(event.target.value);
  }
  // filtered list of items
  const itemsToDisplay = array
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((item) => item.name.includes(searchByName));

  //handling submit and adding new item

  function handleSubmit(itemObject) {
    console.log(itemObject);
    setArray(() => [...array, itemObject]);
  }

  // adding new name
  function handleNewNameInput(event) {
    setNewName(event.target.value);
  }
  //adding ne category
  function handleNewCategoryChange(event) {
    setNewItemCategory(event.target.value);
  }

  const finalList = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={handleSubmit}
        name={newName}
        category={newItemCategory}
        onNewInputChange={handleNewNameInput}
        onNewCategoryChange={handleNewCategoryChange}
      />
      <Filter
        search={searchByName}
        onSearchChange={handleSearchItem}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">{finalList}</ul>
    </div>
  );
}

export default ShoppingList;
