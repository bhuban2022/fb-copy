
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loginform from './Pages/Loginform';
import Registration from './Pages/Register';
import Navbar from './component/Navbar';
// import SideBar from './Pages/SideBar';
import ConfirmEmail from './Pages/ConfirmEmail';
import Home from './Pages/Home';
import Register1 from './Pages/Register1';
import Feeds from './Pages/Feeds';

// import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
<Routes>
  <Route path="/register" element={<Registration/>}/>
  <Route path="/register1" element={<Register1/>}/>


 {/* <Route path='/sidebar' element={<SideBar/>}></Route> */}
 <Route path='/loginform' element={<Loginform/>}/>
<Route path='/feeds' element={<Feeds/>}/>

</Routes>
{/* <Navbar/> */}
<Home/>

<ConfirmEmail/>
    </>
  );
}

export default App;
