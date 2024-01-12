import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../component/Navbar'
import SideBarNew from './SideBarNew'
import AdManager from '../SideBarLinks/AdManager'
import Friends from '../SideBarLinks/Friends'
import Groups from '../SideBarLinks/Groups'
import Memories from '../SideBarLinks/Memories'
import Saved from '../SideBarLinks/Saved'
import FbHeader from './FbHeader'
import AddFriend from './AddFriend'
import AddPhotos from './AddPhotos'
// import SideBar from './SideBar'
const Home = () => {
  return (
    <div>

<Navbar/>
{/* <SideBar/> */}
<SideBarNew/>
<Routes>
<Route path='/admanager' element={<AdManager/>}/>
<Route path='/friends' element={<Friends/>}/>
<Route path='/groups' element={<Groups/>}/>
<Route path='/memories' element={<Memories/>}/>
<Route path='/saved' element={<Saved/>}/>
<Route path='/addfrn' element={<AddFriend/>}/>
<Route path='/addphotos' element={<AddPhotos/>}/>

</Routes>





    </div>
  )
}

export default Home