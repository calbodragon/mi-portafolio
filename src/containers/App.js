import React from 'react';
import Family from '../component/Family';
import Navigator from  '../component/Navigator';
import Masterheader from '../component/Masterheader'
import Aboutseccion from '../component/Aboutseccion';
import Servicesection from '../component/ServiceSection';
import Portafoliosection from '../component/Portafoliosection';
import Sectioncall from '../component/Sectioncall';
import Contact from '../component/Contact';




const App=()=>{
  return(
    <div>
     <Family>
        <Navigator/> 
        <Masterheader/>
        <Aboutseccion/>
        <Servicesection/>
        <Portafoliosection/>
        <Sectioncall/>
        <Contact/>
     </Family>
    </div>
  )
}

export default App;
