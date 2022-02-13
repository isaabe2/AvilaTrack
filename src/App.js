import {BrowserRouter as Router,Routes,Route, Outlet } from 'react-router-dom'
import './App.css';
import './App.css';
import './css/TopChannel.css';
import './css/LoginUp.css';
import './css/Logged.css';
import './css/Login.css';
import './css/Signup.css';
import './css/Settings.css';
import './css/Create.css';
import './css/Canal.css';
import './css/Feed.css';
import './css/Comment.css';
import './css/FeedAnonimo.css';
import Logged from './components/Logged';
import Login from './components/Login';
import Signup from './components/Signup';
import Settings from './components/Settings';
import Create from './components/Create';
import Home from './components/Home';
import MyPage from './components/MyPage';
import CanalL from './components/CanalL';
import CanalA from './components/CanalA';



function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/canalL" element={<CanalL/>}/>
        <Route path="/anonimo" element={<CanalA/>}/>
        
      </Routes>
    </Router>
   
  );
}

export default App;
