import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addpost from './components/Addpost';
import View from './components/View';
import Searchpost from './components/Searchpost';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Addpost/>}></Route>
      <Route path='/view' exact element={<View/>}></Route>
      <Route path='/search' exact element={<Searchpost/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
