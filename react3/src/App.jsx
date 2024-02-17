import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import { useEffect } from 'react';

function App () {
  // const [users, setUsers] = useState([]);
  const [menu, setMenu] = useState([]);

  // const getUserData = () => {
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //     setUsers(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  const getListMenuData = () => {
    axios
    .get("https://api.mudoapi.tech/menus")
    .then((response) => {
      console.log(response)
      setMenu(response.data.data.Data);
    })
    .catch((error) => {
      console.log(error);
    })
  }


// useEffect(() => {
//   getUserData();
// }, [])

useEffect(() => {
  getListMenuData();
}, [])
console.log('Data', menu);
  return(
    <div>
      <h1>Hello World</h1>
      {
     

      menu.map((item)=> (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img style={{width: 200}, {height: 200}} src={item.imageUrl}/>
        </div>
      ))
}
    </div>
  )
}

export default App;