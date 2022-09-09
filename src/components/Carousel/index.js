import CardCarousel from 'components/CardCarousel';
import Card from 'components/Card';
import episodes from 'data/episodes';
import toLeft from 'img/to-left.svg';
import toRight from 'img/to-right.svg';
import { carouselStyle } from 'styles';

export default ({elements = episodes, title = "Seasons", hasSeasons = true}) => {
    const goToRight = () => {
        if(typeof document != 'undefined'){
            document.getElementById('carousel-cards').scroll({
                left: document.getElementById('carousel-cards').scrollLeft + 300,
                behavior: 'smooth'
            })
        }
    }

    const goToLeft = () => {
        if(typeof document != 'undefined'){
            document.getElementById('carousel-cards').scroll({
                left: document.getElementById('carousel-cards').scrollLeft - 300,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="w-100 p-7 pt-2" style={{...carouselStyle.carousel, ...carouselStyle.p_7}}>
            <div className="flex-row d-flex">
                <h5 className='text-white m-2'>
                    {title} 
                </h5> 
                {
                    hasSeasons ?
                    <div className='flex-row d-flex'>
                        <div className='justify-content-center d-flex align-items-center' style={carouselStyle.season_number_selected}>
                            1 
                        </div>  
                        <div className='justify-content-center d-flex align-items-center' style={carouselStyle.season_number}>
                            2
                        </div> 
                        <div className='justify-content-center d-flex align-items-center'  style={carouselStyle.season_number}>
                            3
                        </div> 
                    </div> 
                    : null
                }
                
            </div>
            <div id="carousel-cards" className='overflow-auto d-flex flex-row' style={carouselStyle.carousel_cards}>
                <a 
                onClick={goToLeft}
                style={styles.leftButton}>
                    <img
                        src={toLeft}
                        alt="img"
                        style={styles.buttonIcon}
                    />
                </a>
                {
                    hasSeasons ? 
                    episodes.map((i, index) => 
                        <CardCarousel key={index} item={i}/>
                        )
                    :
                    elements.map((i, index)  => 
                        <Card key={index} item={i}/>
                        )
                }

                <a 
                onClick={goToRight}
                style={styles.rightButton}>
                    <img
                        src={toRight}
                        alt="img"
                        className=""
                        style={styles.buttonIcon}
                    />
                </a>
            </div>
        </div>
    )
}

const styles = {
    leftButton: {
        position: "absolute", 
        left: "15px",
        top: "50%", 
        marginTop: "-20px",
        cursor: 'pointer'
    },
    rightButton: {
        position: "absolute", 
        right: "15px",
        top: "50%", 
        marginTop: "-20px",
        cursor: 'pointer'
    },
    buttonIcon: {
        height: "40px"
    }
}