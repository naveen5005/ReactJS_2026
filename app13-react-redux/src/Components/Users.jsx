import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { handleAddUser, handleDeleteUser, handleUpdateUser } from "../store/action";

const Users = () => {
  const [user, setUser] = useState({
    id: "",
    uname: "",
    pwd: "",
  });
  const [index, setIndex] = useState(null);
  const users = useSelector((state) => {
    return state.userDetails.users;
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAdd = () => {
    if(!user.uname || !user.pwd){
        return;
    }
    const nextId = users.length!==0 ? users[users.length - 1].id + 1 : 1;
    const newUser = {...user, id: nextId };
    dispatch(handleAddUser(newUser));
    setUser({id: "", uname: "", pwd: ""});
  };
  const handleUpdate = () => {
    if(!user.uname || !user.pwd){
        return;
    }
    dispatch(handleUpdateUser(user));
    setIndex(null);
    setUser({id: "", uname: "", pwd: ""});
  }
  return (
    <div>
      <h2>Users List</h2>

      <form>
        <label>Username:</label>
        <input
          type="text"
          name="uname"
          value={user.uname}
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="pwd"
          value={user.pwd}
          onChange={handleChange}
        />
        <br />
        {index !== null ? (
            <button type="button" onClick={handleUpdate}>Update User</button>
        ) : (
            <button type="button" onClick={handleAdd}>Add User</button>
        )}
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.uname}</td>
              <td>{user.pwd}</td>
              <td>
                <button type="button" onClick={()=>{
                    setUser(user);
                    setIndex(user.id)
                }}>Edit</button>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(handleDeleteUser(user))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
