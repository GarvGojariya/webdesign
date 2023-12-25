import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import {Route,Routes} from 'react-router-dom'
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Articales from './Pages/Articales';
import BlogDetails from './Pages/BlogDetails';
import ContactUs from './Pages/ContactUs';
import Error from './Pages/Error';
import Team from './Pages/Team';


function App() {
  return (
<>
<Routes>
    <Route path="/" element={<Layout><Home/></Layout>}/>
    <Route path="/services" element={<Layout><Services/></Layout>}/>
    <Route path="/projects" element={<Layout><Projects/></Layout>}/>
    <Route path="/articales" element={<Layout><Articales/></Layout>}/>
    <Route path="/bloagdetail" element={<Layout><BlogDetails/></Layout>}/>
    <Route path="/contactus" element={<Layout><ContactUs/></Layout>}/>
    <Route path="/team" element={<Layout><Team/></Layout>}/>
    <Route path="/404" element={<Error/>}/>

</Routes>

</>
  );
}

export default App;


//https://www.figma.com/file/Blc1qr1ZA3JiBx7W7ZjWQ8/SELHONO-Design-Website-template-(Community)?node-id=3%3A2&mode=dev
//https://www.figma.com/community/file/1304462589073827097