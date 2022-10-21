import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import { Output } from './components/Output';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/:arg' element={<Output />} />
        <Route path='/:arg/:font/:bgc' element={<Output /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
