import React, { useState, useEffect } from "react";
import data from "./data";
import axios from "axios";

import { useEffectOnce, useGeolocation } from "react-use";

function UserLIst() {
  const [user, setUser] = useState([]);

  useEffectOnce(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => setUser(res.data.data))
      .catch((err) => console.log(err));

    //   axios.post('https://reqres.in/api/users', {
    //     userName: 'Fred',
    //     password: '123456'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
  });

  const state = useGeolocation();

  console.log(JSON.stringify(state, null, 2));

  return (
    <div>
      {user.map((item, index) => (
        <div key={index} style={{ backgroundColor: "white", padding: 20 }}>
          <div>{item.first_name}</div>
          <div>{item.last_name}</div>
          <div>{item.email}</div>
        </div>
      ))}
    </div>
  );
}

export default UserLIst;
