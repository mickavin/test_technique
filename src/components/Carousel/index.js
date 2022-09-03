import './style.css';
import CardCarousel from 'components/CardCarousel';
import Card from 'components/Card';
import episodes from 'data/episodes';
import toLeft from 'img/to-left.svg';
import toRight from 'img/to-right.svg';

export default ({elements = episodes, title = "Seasons", hasSeasons = true}) => {
    const goToRight = () => {
        if(typeof document != 'undefined'){
            document.getElementById('carousel-cards').scroll({
                left: 300,
                behavior: 'smooth'
              });
        }
    }

    const goToLeft = () => {
        if(typeof document != 'undefined'){
            document.getElementById('carousel-cards').scroll({
                left: -300,
                behavior: 'smooth'
              });
        }
    }

    return (
        <div className="carousel w-100 p-7 pt-2">
            <div className="flex-row d-flex">
                <h5 className='text-white m-2'>
                    {title} 
                </h5> 
                {
                    hasSeasons ?
                    <div className='flex-row d-flex'>
                        <div className='season-number-selected justify-content-center d-flex align-items-center'>
                            1 
                        </div>  
                        <div className='season-number justify-content-center d-flex align-items-center'>
                            2
                        </div> 
                        <div className='season-number justify-content-center d-flex align-items-center'>
                            3
                        </div> 
                    </div> 
                    : null
                }
                
            </div>
            <div id="carousel-cards" className='overflow-auto d-flex flex-row carousel-cards'>
                <a 
                onClick={goToLeft}
                style={styles.leftButton}>
                    <img
                        src={toLeft}
                        alt="img"
                        className=""
                        style={styles.buttonIcon}
                    />
                </a>
                {
                    hasSeasons ? 
                    episodes.map(i => 
                        <CardCarousel item={i}/>
                        )
                    :
                    elements.map(i => 
                        <Card item={i}/>
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
        left: 5,
        top: "50%", 
        marginTop: "-20px",
        cursor: 'pointer'
    },
    rightButton: {
        position: "absolute", 
        right: 5,
        top: "50%", 
        marginTop: "-20px",
        cursor: 'pointer'
    },
    buttonIcon: {
        height: "40px"
    }
}