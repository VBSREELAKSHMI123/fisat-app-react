import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import ViewStudent from './components/ViewStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/search' element={<SearchStudent/>}/>
    <Route path='/view' element={<ViewStudent/>}/>
    <Route path='/' element={<AddStudent/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
