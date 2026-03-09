export default function Stats({initialItems}){
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
