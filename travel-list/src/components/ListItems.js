export default function ListItems({num,setInitialItems}){
  const handleDelete=(num)=>{
    setInitialItems((prev)=>(prev.filter((item)=>item.id!==num.id)))
  }
  return (
    <div>
      <span style={num.packed ? {textDecoration:"line-through" }: {}}>{num.description} <button type="button" onClick={()=>handleDelete(num)}>❌</button></span>
    </div>
  )
}