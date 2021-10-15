import './App.css';
import Header from './components/Header';
import Shops from './components/Shops'


function App() {
  return (
    <>
     <div className="header">
        <Header/>
     </div>
     <div className="product-body">
        <Shops/>
     </div>
    </>
  );
}

export default App;
