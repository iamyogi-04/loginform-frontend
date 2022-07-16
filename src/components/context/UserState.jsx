import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from "./UserContext"

const UserState = (props) => {
    let navigate = useNavigate();
    const host = "https://peaceful-anchorage-81604.herokuapp.com"
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const loginUser = async (userData) => {
        try {
            const res = await fetch(
                `${host}/api/v1/login`,
                {
                    method: "POST",
                    body: JSON.stringify({ ...userData }),
                }
            );
            const result = await res.json();
            if (!result.error) {
                console.log(result);
                localStorage.setItem("authtoken", result.authtoken);
                setUser(result.userData);
                navigate("/lastpage");
            } else {
                setError(result.message);
                setTimeout(() => {
                    setError(null);
                }, 3000);

            }
        } catch (err) {
            console.log(err);

        }
    };

      //signup req
  const registerUser = async (userData) => {
    try {
      const res = await fetch(
        `${host}/api/v1/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...userData }),
        }
      );

      const result = await res.json();
      if (!result.error) {
        console.log(result);
        navigate("/", { replace: true });
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <UserContext.Provider value={{ host, loginUser, registerUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState