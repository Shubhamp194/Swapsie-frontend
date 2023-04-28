import axios from "axios";
import React, { useEffect, useState } from "react";

function AllUsers() {
  const [users, setUsers] = useState([]);

  async function getData() {
    const res = await axios.get("http://localhost:8081/user/getUsers");
    setUsers(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List of users</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.fname}</li>;
        })}
        <li>Static Shubham</li>
      </ul>
    </div>
  );
}

export default AllUsers;
