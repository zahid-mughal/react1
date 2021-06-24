import react from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';

var test= "test";
function App() {
  return (
    <div >
  <Header />
      <h1>test this</h1>
  <p>{test}</p>
    </div>
  );
}

export default App;
