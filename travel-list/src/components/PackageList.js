import { useState } from "react";
import ListItems from "./ListItems";

export default function PackageList({ initialItems,setInitialItems }) {
  const handleToggleItem = (id) =>{
    setInitialItems((prev)=>prev.map((item)=>item.id === id ?{...item,packed: !item.packed} : item))
  }
  const [sortBy,setSortBy] = useState('description');
  let sortedItems;
  if(sortBy === 'input') sortedItems = initialItems;
  if(sortBy === 'description') sortedItems = initialItems.slice().sort((a,b)=>a.description.localeCompare(b.description));
  if(sortBy === 'packed') sortedItems =initialItems.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))
  return (
    <div className="list">
      <ul>
        {
          sortedItems.map((num)=>(
            <li key={num.id}>
              <div style={{display:"flex"}}>
                <input type="checkbox" onChange={()=>handleToggleItem(num.id)}/>
                <ListItems num={num} setInitialItems={setInitialItems}/>
              </div>
            </li>
          ))
        } 
      </ul> 
      <div className="actions" style={{marginTop:'280px'}}>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value={'input'}>sort by input status</option>  
          <option value={'description'}>sort by description status</option>
          <option value={'packed'}>sort by packed status</option>
        </select>  
        <button onClick={()=>setInitialItems([])}>Clear all</button>
      </div> 
    </div>
  );
}