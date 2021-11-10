import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
              <div className="card d-none d-md-block">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          to="#carouselExampleControls"
          role="button"
          data-slide="prev"
        ></Link>
        <Link
          className="carousel-control-prev"
          to="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="carousel-control-next"
          to="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
