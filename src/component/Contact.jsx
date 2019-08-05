import React from 'react';


const Contact=()=> {
    return (
        <div>
        <section className="page-section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mt-0">Contacteme</h2>
          <hr className=" my-4 btn-info"/>
          <p className="text-muted mb-5">inicia un nuevo proyecto de app para tu vida , algo que marque la diferencia !</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
          <div><a href="https://api.whatsapp.com/send?phone=573188070852">3188070852</a> </div>
        
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
          
          <a className="d-block" href="cristhiambohorquez@yahoo.es">cristhiambohorquez@yahoo.es</a>
        </div>
      </div>
    </div>
  </section>
  </div>
    )
}
export default Contact;