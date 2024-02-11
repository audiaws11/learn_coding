import { useState } from 'react'
import Button from './components/Button';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import './index.css'


function App() {
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
  const changeAddAge = () => {
    setAge(age + 1);
  };

  const changeMinusAge = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <h1>React learning</h1>
      <Button handleSidebar={handleSidebar}/>
      {isOpen && (<Sidebar/> )}
      <article>
        <h1>Hai Selamat Pagi</h1>
        <p>Umur saya adalah {age}</p>
        <button onClick={changeAddAge}>tambah umur</button>
        <button onClick={changeMinusAge}>kurangi umur</button>
        {data.map((item,index) => (
          <Card item={item} key={index}/>
        ))}
      </article>
    </div>
  
  )
}

export default App
