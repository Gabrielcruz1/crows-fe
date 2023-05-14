import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";


function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home/> } />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/' element={ } />
        <Route path='/' element={ } /> */}
      </Routes>
    </div>
  );
}

export default App;
