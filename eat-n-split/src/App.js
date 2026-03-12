import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends,setFriends] = useState(initialFriends);
  const [selectedFriend,setSelectedFriend] = useState(null);
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <FriendsList friends={friends} selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend} />
        {isOpen && (
          <>
            <AddForm setFriends ={setFriends}/>
            <CloseButton isOpen={isOpen} setIsOpen = {setIsOpen}/>
          </>
        )}
        {!isOpen && (
          <Button style={{ marginLeft: "78%", marginBottom: "15px" }} isOpen={isOpen} setIsOpen = {setIsOpen} handleToggle={handleToggle}>
            Add Friend
          </Button>
        )}
      </div>
      <div>
        {
          selectedFriend && <SplitBillDetails selectedFriend={selectedFriend} setFriends={setFriends} friends ={friends}/>
        }
      </div>
    </div>
  );
}

function FriendsList({friends,selectedFriend,setSelectedFriend}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} setSelectedFriend={setSelectedFriend}/>
      ))}
    </ul>
  );
}
function handleToggle(isOpen,setIsOpen){
  setIsOpen(!isOpen)
}
function Button({ children,handleToggle, isOpen,setIsOpen}) {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "orange",
        padding: "10px",
        border: "none",
        borderRadius: "10px",
      }}
      onClick={()=>handleToggle(isOpen,setIsOpen)}
    >
      {children}
    </button>
  );
}
function Friend({ friend,selectedFriend,setSelectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  const handleSelectFriend = () => {
    setSelectedFriend(friend);
  };
  const handleCloseFriend = () =>{
    setSelectedFriend(null)
  }
  return (
    <li
      style={{
        listStyle: "none",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "18px",
        border: "2px solid lightgrey",
        borderRadius: "10px",
        justifyContent: "space-around",
      }}
    >
      <div>
        <img
          src={friend.image}
          alt={friend.name}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p style={{ color: "red" }}>
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p style={{ color: "green" }}>
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      </div>
      <div>
        {isSelected ? (
          <button type="button" onClick={handleCloseFriend}>Close</button>
        ) : (
          <button type="button" onClick={handleSelectFriend}>Select</button>
        )}
      </div>

    </li>
  );
}
function AddForm({setFriends}) {
  const [name,setName] = useState("");
  const [image,setImage] = useState("https://i.pravatar.cc/48?u=499476")
  const handleAddFriend = () => {
    if(!name || !image) return;
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    }
    setFriends((prev)=>[...prev,newFriend]);
    setName("")
  }
  return (
    <div
      style={{
        border: "2px solid lightgrey",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "end",
        width: "fit-content",
        marginLeft: "110px",
      }}
    >
      <form>
        <label>Friend Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br></br>
      <label>Image URL</label>
      <input type="url" value={image} onChange={(e)=>setImage(e.target.value)}/> <br></br>
      <button type="button" onClick={handleAddFriend}>Add</button>
      </form>
    </div>
  );
}
function CloseButton({isOpen,setIsOpen}) {
  return (
    <div>
      <Button isOpen={isOpen} setIsOpen = {setIsOpen} handleToggle={handleToggle}>close</Button>
    </div>
  );
}
function SplitBillDetails({selectedFriend,setFriends,friends}) {
  const [bill,setBill] = useState("");
  const [paidByUser,setPaidByUser] = useState("");
  const [whoIsPaying,setWhoIsPaying] = useState("user");
  const paidByFriend =bill-paidByUser;
  const handleSplitBill = () => {
    setFriends((prev)=>prev.map((frnd)=>(
      frnd.id === selectedFriend.id ?{...frnd,balance: frnd.balance+paidByFriend}:frnd
    )))
  }
  return <div>
    <h3>Split a bill with {selectedFriend.name}</h3>
    <form>
      <label>Bill Value</label>
      <input type="number" value={bill} onChange={(e)=>setBill(Number(e.target.value))}/> <br></br>
      <label>Your expense</label>
      <input type="number" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/><br></br>
      <label>{selectedFriend.name} expense</label>
      <input type="number" disabled value={paidByFriend}/> <br></br>
      <label>who is paying the bill?</label>
      <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
        <option value={"user"}>you</option>
        <option value={"friend"}>{selectedFriend.name}</option>
      </select> <br></br>
      <button type="button" onClick={handleSplitBill}>Split Bill</button>
    </form>
  </div>;
}
