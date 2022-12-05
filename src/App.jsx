import { useState } from "react";
import "./App.css";
import CreateForm from "./components/CreateForm";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import user from "./users.json";

function App() {
  const [users, setUsers] = useState(user);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // add user
  const addUser = (user) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = { id, ...user };
    setUsers([...users, newUser]);
  };

  // delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <Navbar openForm={() => setIsFormOpen(true)} />
      {isFormOpen && (
        <CreateForm onAdd={addUser} closeForm={() => setIsFormOpen(false)} />
      )}
      <div className="users">
        <Users users={users} onDelete={deleteUser} />
      </div>
    </div>
  );
}

export default App;
