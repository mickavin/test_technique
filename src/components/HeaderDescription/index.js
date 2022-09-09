import catflix from 'img/catflix.svg';
import image1 from 'img/image-1.jpg';
import image2 from 'img/image-2.webp';
import image3 from 'img/image-3.jpg';
import image4 from 'img/image-4.jpg';
import { year } from 'utils/date';
import back from 'img/back.svg';
import { headerStyle } from 'styles';

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
        <div style={{backgroundImage: `url(${url})`, ...headerStyle.homepage_header}}>
        <div className="overlay" style={headerStyle.overlay}/>
        <nav className="navbar navbar-expand-lg navbar-dark" style={headerStyle.homepage_header__movies_nav}>
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
                  <a className="nav-link" href="#" style={headerStyle.homepage_header__movies_nav__nav_link}>
                    Catégories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Favoris
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <a 
        onClick={close}
        className="position-absolute" style={headerStyle.back_button}>
          <img
            alt="back"
            src={back}
            style={{ height: 20 }}
          />
        </a>
        <section style={headerStyle.homepage_description_block}>
      
          <div className="banner-overlay" />
          <div className="description-block" style={headerStyle.description_block}>
            <div className="d-flex flex-column">
                <span className="text-shadow text-white" style={{...headerStyle.description_info, ...headerStyle.font_weigth_400}}>
                    Movies
                </span>
                <h3 className="mb-3 text-shadow text-white font-weight-normal">
                    {info.original_title}
                </h3>
                <div className="flex-row mb-3 justify-content-around">
                    {
                        year(info?.release_date) ?
                        <span className=" text-shadow text-white mr-3" style={{...headerStyle.description_info, ...headerStyle.font_weigth_200}}>
                            {year(info?.release_date)}
                        </span>
                        : null
                    }
                    <span className=" text-shadow text-white mr-3" style={{...headerStyle.description_info, ...headerStyle.font_weigth_200}}>
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