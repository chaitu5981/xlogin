import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState("");
  const [show, setShow] = useState(true);
  const check = (e) => {
    e.preventDefault();
    if (name === "user" && password === "password") {
      setMess("Welcome, user!");
      setShow(false);
    } else setMess("Invalid username or password");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <p>{mess}</p>
      {show && (
        <form action="" onSubmit={check}>
          <div>
            <label for="name">Username: </label>
            <input
              type="text"
              required
              name=""
              id="name"
              placeholder="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label for="password">Password: </label>
            <input
              required
              type="text"
              name=""
              id="password"
              placeholder="username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default App;
