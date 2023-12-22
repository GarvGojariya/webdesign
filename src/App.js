import './App.css';
import Layout from './Layout/Layout';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import {Route,Routes} from 'react-router-dom'
import Services from './Pages/Services';


function App() {
  return (
<>
<Routes>
    <Route path="/" element={<Layout><Home/></Layout>}/>
    <Route path="/services" element={<Layout><Services/></Layout>}/>

    <Route path="/aboutus" element={<AboutUs/>}/>
</Routes>

</>
  );
}

export default App;


//https://www.figma.com/file/Blc1qr1ZA3JiBx7W7ZjWQ8/SELHONO-Design-Website-template-(Community)?node-id=3%3A2&mode=dev