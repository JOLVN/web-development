import React, { useState } from 'react'

export default function AdminView(props) {

  const [newItemName, setNewItemName] = useState("");
  const [newItemAuthor, setNewItemAuthor] = useState("");
  const [newItemType, setNewItemType] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemImage, setNewItemImage] = useState("");

  const addNewItem = () => {
    props.addNewItem(newItemName, newItemAuthor, newItemType, newItemPrice, newItemImage);
  }

  const onDeleteItemClick = (itemId) => {
    console.log("clicked delete for item id " + itemId);
    props.deleteItem(itemId);
  }

  return (
    <div>
      <div>
          <h1>Add new item</h1>
          <div>
            Name <input type="text" onChange={ (event) => setNewItemName(event.target.value) } />
          </div>
          <div>
            Author <input type="text" onChange={ (event) => setNewItemAuthor(event.target.value) } />
          </div>
          <div>
            Type <input type="text" onChange={ (event) => setNewItemType(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) } />
          </div>
          <div>
            Image <input type="text" onChange={ (event) => setNewItemImage(event.target.value) } />
          </div>
          <button onClick={ addNewItem }>Add Item</button>

        </div>
        <button onClick={ props.disableAdminMode }>Disable Admin Mode</button>

        <h1>List of items</h1>
        { props.items.map((item, index) =>
          <div key={index}>
            <button onClick={() => onDeleteItemClick(item.id)}>X</button> {item.name}, {item.author}, {item.type}, {item.price}
          </div>)}
    </div>
  )
}
