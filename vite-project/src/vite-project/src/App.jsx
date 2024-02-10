// function App(){
//   return <h1>Hello World</h1>
// }

// export default App;

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
const App = () => {
  const name = 'Audia';
  const isSingle = false;

  const renderStatus = (status) => {
    if (status){
      return <p> Saya belum menikah</p>
    } else{
      return <p> Saya sudah menikah</p>
    }
  }
  return (<divi>
    <Navbar />
    <Banner />
   
    <h1>Hello my name is {name}</h1>
    {isSingle ? <p>Im single</p> : <p>Im not single</p>}

    {renderStatus(isSingle)}
    <Footer/>
  </divi>
  );
};
export default App;