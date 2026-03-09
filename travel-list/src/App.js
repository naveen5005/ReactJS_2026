import { useState } from "react";

export default function App() {
  const [initialItems, setInitialItems] = useState([
    // { id: 1, description: "Passports", quantity: 2, packed: false },
    // { id: 2, description: "Socks", quantity: 12, packed: true },
    // { id: 3, description: "Snacks", quantity: 32, packed: false },
  ]);
  const [newItem, setNewItem] = useState({
    id: "",
    description: "",
    quantity: "",
    packed: false,
  });
  return (
    <>
      <Logo />
      <FormDetails newItem={newItem} setNewItem={setNewItem} initialItems={initialItems} setInitialItems={setInitialItems}/>
      <PackageList initialItems={initialItems} setInitialItems={setInitialItems} />
      <Stats initialItems={initialItems}/>
    </>
  );
}
function Logo() {
  return <h1 className="logo">💼Far Away🎄</h1>;
}
function FormDetails({newItem,setNewItem, initialItems, setInitialItems}) {
  const handleChange = (e) => {
    const {name,value} = e.target;
    setNewItem((prev)=>({
      ...prev,
      [name]: name===newItem.quantity ? Number(value):value
    }))
  }
  const handleAddItems = () => {
    if(!newItem.description) return;
    const id = initialItems.length+1;
    let itemToBeAdded = {
      id,
      description: newItem.description,
      quantity: newItem.quantity,
      packed: false
    }
    setInitialItems((prev)=>[...prev,itemToBeAdded]);
    setNewItem({
    id: "",
    description: "",
    quantity: "",
    packed: false,
  })
  }
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <form className="form">
        <select name="quantity" value={newItem.quantity} onChange={handleChange}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="add items...."
          style={{ border: "none" }}
          name="description"
          value={newItem.description}
          onChange={handleChange}
        />
        <button type="button" className="add-button" onClick={handleAddItems}>
          Add
        </button>
      </form>
    </div>
  );
}

function PackageList({ initialItems,setInitialItems }) {
  const handleToggleItem = (id) =>{
    setInitialItems((prev)=>prev.map((item)=>item.id === id ?{...item,packed: !item.packed} : item))
  }
  return (
    <div className="list">
      <ul>
        {
          initialItems.map((num)=>(
            <li key={num.id}>
              <div style={{display:"flex"}}>
                <input type="checkbox" onChange={()=>handleToggleItem(num.id)}/>
                <ListItems num={num} setInitialItems={setInitialItems}/>
              </div>
            </li>
          ))
        } 
      </ul>  
    </div>
  );
}

function ListItems({num,setInitialItems}){
  const handleDelete=(num)=>{
    setInitialItems((prev)=>(prev.filter((item)=>item.id!==num.id)))
  }
  return (
    <div>
      <span style={num.packed ? {textDecoration:"line-through" }: {}}>{num.description} <button type="button" onClick={()=>handleDelete(num)}>❌</button></span>
    </div>
  )
}

function Stats({initialItems}){
  if(!initialItems.length) return <p className="stats">Start adding some items to your list 🚀</p>
  const numItems = initialItems.length;
  const numPacked = initialItems.filter((item)=>item.packed).length;
  const percentage = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  return <>
    {
      percentage === 100 ? <p className="stats">You got everything! Ready to go ✈️</p> : <p className="stats">You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%)</p>
    }
  </>
}
