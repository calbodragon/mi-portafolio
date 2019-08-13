import React from 'react';
import imagen1 from '../img/portfolio/thumbnails/hackthon.png';
import image from '../img/portfolio/fullsize/hackthon.png';
import imagen2 from '../img/portfolio/thumbnails/geek.jpg';
import geek from '../img/portfolio/fullsize/geek.jpg';
import go from '../img/portfolio/thumbnails/recycling.jpg';
import recycling from '../img/portfolio/fullsize/recycling.jpg';
import tienda from '../img/portfolio/fullsize/tienda.png';
import tienda2 from '../img/portfolio/thumbnails/tienda.png';


const Portafoliosection=()=>{
    return(
        <div>
            <section id="portfolio">
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={image}>
            <img className="img-fluid" src={imagen1} alt="beta"/>
             <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                hackathon
              </div>
            <div className="project-name">
            <a href="https://eager-cray-2e7348.netlify.com/" target="_blank">
                Academia geek
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={imagen2}>
            <img className="img-fluid" src={geek} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                traformar a react
              </div>
              <div className="project-name">
                <a href="https://hardcore-feynman-9f00f3.netlify.com/" target="_blank">
                Geek conferencia.
                </a> 
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={tienda}>
            <img className="img-fluid" src={tienda2} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Tienda online
              </div>
              <div className="project-name">
                <a href="https://tienda-virtual-geek.firebaseapp.com" target="_blank">
                Tienda online
                </a> 
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={go}>
            <img className="img-fluid" src={recycling} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
               Proyecto
              </div>
              <div className="project-name">
              Go recycling
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>   
      </section>
      
        </div>
    )
}
export default Portafoliosection;