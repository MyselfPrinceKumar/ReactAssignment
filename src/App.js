
import NavBar from './Components/NavBar';
import "../src/App.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Footer from './Components/Footer';
import "./Components/Style/Footer.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/first' element={<Component1 />}></Route>
          <Route path='/second' element={<Component2 />}></Route>
          <Route path='/third' element={<Component3 />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;