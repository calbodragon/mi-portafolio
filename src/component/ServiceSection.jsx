import React from 'react';
import logoreact from'../img/react.png';
import logobootstrap from '../img/bstrap.jpg';
import logojs from '../img/js.jpg';
import logonode from '../img/logonode.png';

const Servicesection =()=>{
    return(
        
<section class="page-section" id="services">
    <div class="container">
      <h2 class="text-center mt-0">Skills</h2>
      <hr class="btn-info my-4"/>
      <div class="row">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class ="card-img-top"src={logoreact}  alt="react"/>
            <h3 class="h4 mb-2">Reacjs</h3>
            <p class="text-muted mb-0">Una biblioteca de JavaScript para construir interfaces de usuario</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <img class ="card-img-top"src={logobootstrap}  alt="bstrap"/>
            <h3 class="h4 mb-2">Bootstrap</h3>
            <p class="text-muted mb-0">Bootstrap es un conjunto de herramientas de código abierto para desarrollar con HTML, CSS y JS.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
          <img class ="card-img-top"src={logojs}  alt="js"/>
            <h3 class="h4 mb-2">JavaScript</h3>
            <p class="text-muted mb-0">Bootstrap es un conjunto de herramientas de código abierto para desarrollar con HTML, CSS y JS.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
          <img class ="card-img-top"src={logonode}  alt="node"/>
            <h3 class="h4 mb-2">nodejs</h3>
            <p class="text-muted mb-0">Concebido como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node está diseñado para construir aplicaciones en red escalables.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

        
    )
}
export default Servicesection;