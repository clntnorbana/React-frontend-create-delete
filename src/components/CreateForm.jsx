import { useState } from "react";

const CreateForm = ({ onAdd, closeForm }) => {
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !firstname || !lastname || !password || !confirmPassword) {
      setError(true);
      setAlert("Fill in all fields");
    } else if (
      username &&
      firstname &&
      lastname &&
      password &&
      confirmPassword &&
      password != confirmPassword
    ) {
      setError(true);
      setAlert("Password not match");
    } else {
      onAdd({ username, firstname, lastname, password });
      setUsername("");
      setFirstname("");
      setLastname("");
      setPassword("");
      setConfirmPassword("");
      closeForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <span className="error">{alert}</span>}
      <h3>create</h3>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        name="firstname"
        value={firstname}
        placeholder="First Name"
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type="text"
        name="lastname"
        value={lastname}
        placeholder="Last Name"
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Create Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      <span onClick={closeForm} className="btn-close">
        x
      </span>
    </form>
  );
};

export default CreateForm;
