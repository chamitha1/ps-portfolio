import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Introduction from "../assets/img/Introduction.svg";
import arcscu from "../assets/img/ARCSCU.svg";
import cv from "../assets/img/CV Writing.svg";
import email from "../assets/img/Email Writing.svg";
import eq from "../assets/img/Emotional Intelligence.svg";
import etiquette from "../assets/img/Etiquette.svg";
import foodFest from "../assets/img/Food Festival.svg";
import interview from "../assets/img/Interview Skills.svg";
import negotiation from "../assets/img/Negotiation Skills.svg";
import portfolio from "../assets/img/Portfolio Management.svg";
import research from "../assets/img/Research Writing.svg";
import surviving from "../assets/img/Surviving Skills.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Overview = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="lecture" id="lectures">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Lecture Overview</h2>
              <p>Quick overview of the 12 lectures over the course of 14 weeks.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={Introduction} alt="Image" />
                  <h5>Lecture 1</h5>
                </div>
                <div className="item">
                  <img src={cv} alt="Image" />
                  <h5>Lecture 2</h5>
                </div>
                <div className="item">
                  <img src={portfolio} alt="Image" />
                  <h5>Lecture 3</h5>
                </div>
                <div className="item">
                  <img src={surviving} alt="Image" />
                  <h5>Lecture 4</h5>
                </div>
                <div className="item">
                  <img src={arcscu} alt="Image" />
                  <h5>Lecture 5</h5>
                </div>
                <div className="item">
                  <img src={research} alt="Image" />
                  <h5>Lecture 6</h5>
                </div>
                <div className="item">
                  <img src={foodFest} alt="Image" />
                  <h5>Lecture 7</h5>
                </div>
                <div className="item">
                  <img src={interview} alt="Image" />
                  <h5>Lecture 8</h5>
                </div>
                <div className="item">
                  <img src={email} alt="Image" />
                  <h5>Lecture 9</h5>
                </div>
                <div className="item">
                  <img src={eq} alt="Image" />
                  <h5>Lecture 10</h5>
                </div>
                <div className="item">
                  <img src={etiquette} alt="Image" />
                  <h5>Lecture 11</h5>
                </div>
                <div className="item">
                  <img src={negotiation} alt="Image" />
                  <h5>Lecture 12</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
