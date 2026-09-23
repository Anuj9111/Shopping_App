import Home from './pages/Home.jsx'
import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import Logout from './pages/logout.jsx';
import Mycart from './pages/viewCart.jsx'
import Myorder from './pages/viewCart.jsx'
import Settings from './pages/Settings.jsx'
import Profile from './pages/Profile.jsx'


function App(){
  return(
    
      <div className='min-h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/mycart" element={<Mycart/>}/>
            <Route path="/myorder" element={<Myorder/>}/>
            <Route path="/myprofile" element={<Profile/>}/>
            <Route path="/setting" element={<Settings/>}/>
            <Route path="*" element={<h2>not found</h2>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
  )
}
export default App;