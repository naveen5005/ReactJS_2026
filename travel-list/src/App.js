import { useState } from "react";
import Logo from "./components/Logo";
import FormDetails from "./components/FormDetails";
import PackageList from "./components/PackageList";
import Stats from "./components/Stata";

export default function App() {
  const [initialItems, setInitialItems] = useState([]);
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