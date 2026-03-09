export default function FormDetails({newItem,setNewItem, initialItems, setInitialItems}) {
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
