import React, { useEffect, useState } from "react";

const Axios = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const axios = require("axios");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        setUsers(response.data);
      });
  }, [users]);

  return (
    <div>
      <h1>Data Load with Axios</h1>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default Axios;
