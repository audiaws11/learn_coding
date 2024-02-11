
import { useState } from 'react';
import Sidebar from './components/Sidebar'
import PersonalInfo from './components/PersonalInfo'
import Button from './components/Button'
import Card from './components/Card'

// const App = PersonalInfo;) => {
//   //syntax (cara penulisan) state di dalam react
//   const [age, setAge] = useState(29);

//   const changeAge = () => {
//     setAge(age - 1);
//     console.log("test");
//   };

//   const changeAddAge = () => {
//     setAge(age + 1);
//   };


//   return (
//     <div>
//       {/* <h1>Hai Selamat Pagi</h1>
//       <p>Umur saya adalah {age}</p>
//       <button onClick={changeAge}>kurangi umur</button>
//       <button onClick={changeAddAge}>tambah umur</button> */
//       }

      
//     </div>
//   )
// };


//side bar


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [age, setAge] = useState(29);
  const [data, setData] = useState([
    {
      title: "title one",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title two",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title three",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
  ]);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <h1>Coba Sidebar</h1>
        <Button handleSidebar={handleSidebar}/>
        {isOpen && (<Sidebar/> )}
        <PersonalInfo age={age} isOpen={isOpen}/>
        {data.map((item, index) => (
          <Card item={item} key={index}/>
        ))}
    </div>
  );
};




 export default App;

 //import useState
 //mendefinisikan fungsi
 //mendefinisikan state
 //mengubah state age menjadi age - 1
 //mendefinisikan event click