import logo from './logo.svg';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap';
import { BrowserRouter, Routes, Route, Link, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import Cartscreen from './screens/Cartscreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AboutUsScreen from "./screens/AboutUsScreen"
import FAQs from "./screens/FAQs"
import Blogs from "./screens/Blogs"
import ShopCarsscreen from './screens/ShopCars';
import Carfinderscreen from './screens/Carfinder';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path = "/" exact element = {<HomeScreen/>}/>
          <Route path = "/cart" exact element = {<Cartscreen/>}/>
          <Route path = "/register" exact element = {<RegisterScreen/>}/>
          <Route path = "/login" exact element = {<LoginScreen/>}/>
          <Route path = "/aboutus" exact element = {<AboutUsScreen/>}/>
          <Route path = "/faqs" exact element = {<FAQs/>}/>
          <Route path = "/blogs" exact element = {<Blogs/>}/>
          <Route path = "/shopcar" exact element = {<ShopCarsscreen/>}/>
          <Route path = "/carfinder" exact element = {<Carfinderscreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
