import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleItems}) {

  const [form, setForm] = useState({name: "", category : "Produce"})

  function onItemFormSubmit (event) {
    event.preventDefault()
    setForm(event.target.value)
  }

  function handleFormUpdate(event) {
    setForm({...form, [event.target.id]: event.target.value})

  }
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleFormUpdate} id="name" type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleFormUpdate} id="category" name="category">
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
