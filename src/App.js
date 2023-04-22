import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom'
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/Home/HomePage'
import Nav from './components/Nav/Nav'
import Detail from './views/Detail/Detail'
import ActDetail from './views/ActDetail/ActDetail';
import Form from './views/Form/Form';
import Activities from './views/Activities/Activities';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3001/'


function App() {
  const location = useLocation();



  return (
    <div className="App">

      <div>
        {location.pathname !== '/'&&<Nav/>}
      </div>
      
      
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}></Route>
        <Route path="/activities/:actName" element={<ActDetail/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/activities" element={<Activities/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
