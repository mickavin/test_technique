import './style.css';
import catflix from 'img/catflix.svg';
import image1 from 'img/image-1.jpg';
import image2 from 'img/image-2.webp';
import image3 from 'img/image-3.jpg';
import image4 from 'img/image-4.jpg';
import { year } from 'utils/date';
import back from 'img/back.svg';

const urls = [
    image1,
    image2,
    image3,
    image4
]

const url = urls[Math.floor(Math.random() * urls.length)]
// Inpiré de https://www.behance.net/gallery/70954671/Netflix-smart-tv-series-page

export default ({info, close}) => {
    return (
        <div className="homepage-header" style={{backgroundImage: `url(${url})`}}>
        <div className="overlay" />
        <nav className="navbar navbar-expand-lg navbar-dark movies-nav">
          <div className="container">
            <a className="navbar-brand">
              <img
                alt="logo"
                src={catflix}
                style={{ height: 40 }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/categories">
                    Catégories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/favorites">
                    Favoris
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <a 
        onClick={close}
        className="position-absolute back-button">
          <img
            alt="back"
            src={back}
            style={{ height: 20 }}
          />
        </a>
        <section className="homepage-description-block">
      
          <div className="banner-overlay" />
          <div className="description-block">
            <div className="d-flex flex-column">
                <span className="text-shadow text-white font-weight-400 description-info">
                    Movies
                </span>
                <h3 className="mb-3 text-shadow text-white font-weight-normal">
                    {info.original_title}
                </h3>
                <div className="flex-row mb-3 justify-content-around">
                    {
                        year(info?.release_date) ?
                        <span className=" text-shadow text-white font-weight-200 description-info mr-3">
                            {year(info?.release_date)}
                        </span>
                        : null
                    }
                    <span className=" text-shadow text-white font-weight-200 description-info mr-3">
                        Comedy
                    </span>

                   
                </div>
                <p className="mb-5 text-shadow text-white font-weight-normal">
                    {info.overview}
                </p>
            </div>
          </div>
        </section>
      </div>
)
}