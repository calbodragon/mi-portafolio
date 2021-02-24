import React from 'react';
import imagen1 from '../img/portfolio/thumbnails/hackthon.png';
import image from '../img/portfolio/fullsize/hackthon.png';
import imagen2 from '../img/portfolio/thumbnails/geek.jpg';
import geek from '../img/portfolio/fullsize/geek.jpg';
import go from '../img/portfolio/thumbnails/gorecycling.jpg';
import recycling from '../img/portfolio/fullsize/gorecycling.jpg';
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
          <a className="portfolio-box" href={farmapull}>
            <img className="img-fluid" src={farmapull} alt="farmapull"/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                farmacia informativa
              </div>
              <div className="project-name">
                <a href="https://farmapull.com/" target="_blank">farmapull</a> 
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={hydra}>
            <img className="img-fluid" src={hydrasas} alt="hydra"/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
               hydra S.A.S
              </div>
              <div className="project-name">
                    <a href="https://hydrasas.com/" target="_blank">hydra S.A.S</a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={domiking}>
            <img className="img-fluid" src={domiking} alt="domiking"/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                domiking
              </div>
              <div className="project-name">
                <a href="http://domiking.co/" target="_blank">
                mensajeria
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
                    <a href="https://infallible-meitner-9151f8.netlify.com" target="_blank">Go recycling</a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={espaciosinteligentes}>
            <img className="img-fluid" src={camaras} alt="espaciosinteligentes"/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
               camaras de seguridad
              </div>
              <div className="project-name">
                    <a href="https://espaciosinteligentes.co/" target="_blank">espacios inteligentes/</a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={cytoavance}>
            <img className="img-fluid" src={cryto} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
               Proyecto
              </div>
              <div className="project-name">
                    <a href="https://cryptoadvancepro.com/" target="_blank">crypto advancepro/</a>
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