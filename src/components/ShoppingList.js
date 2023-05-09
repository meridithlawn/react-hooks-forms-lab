import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
 


 


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange (event) {
    setSearch(event.target.value)
  }

  
//filter this list of items even further based on state in filter
// add ItemForm state to tell which itemsToDisplay
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;

  }).filter((item) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) return true;
    return false;
  });

  return (
    <div className="ShoppingList">
      <ItemForm handleItems={handleItems}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
