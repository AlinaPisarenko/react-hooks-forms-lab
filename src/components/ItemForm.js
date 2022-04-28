import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({
  name,
  category,
  onItemFormSubmit,
  onNewInputChange,
  onNewCategoryChange,
}) {
  return (
    <form
      className="NewItem"
      onSubmit={(e) => {
        e.preventDefault();
        onItemFormSubmit({
          id: uuid(),
          name: name,
          category: category,
        });
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={onNewInputChange}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={onNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
