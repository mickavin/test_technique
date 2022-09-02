import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import films from '../../data/list-de-films';
import SimpleInput from 'components/SimpleInput';
import SimpleSelect from "components/SimpleSelect";
import Card from 'components/Card';
import Modal from "components/Modal";
import Loader from "components/Loader";
import InfiniteScoller from 'react-infinite-scroller';
import search from "utils/search";
import sort from "utils/sort";
import SORT_LABELS from "constants/sortLabels";
import { toggleAction } from "store/actions/toggleAction";
import { inputStyle } from "styles";
import glass from 'img/glass.svg' 
import './style.css';

const MoviesList = () => {
    const likes = useSelector(state => state.like.likedMovies)
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [sortType, setSortType] = useState('alphabetic')
    const [info, setInfo] = useState(null)
    const [number, setNumber] = useState(6)
    const [slicedMovies, setSlicedMovies] = useState(films.slice(0, 6))

    useEffect(() => {
        if(typeof document != 'undefined'){
            const el = document.querySelector("#container-infinite div")
            const classes = el.classList
            classes.add('row')
        }
    }, [])

    useEffect(() => {
        filteredElements(6)
    }, [sortType])

    const filteredElements = (numberOfElements = 6) => {
        let movies = search(searchText, films, [{type: 'number', key: 'id'}, {type: 'text', key: 'original_title'}, {type: 'text', key: 'overview'}])
        if(sortType == 'alphabetic'){
            movies = sort(movies, 'text', 'original_title', true)
        } else if(sortType == 'alphabetic-desc'){
            movies = sort(movies, 'text', 'origi[nal_title', false)
        } else if(sortType == 'popular'){
            movies = sort(movies, 'number', 'pop]ularity', true)
        } else if(sortType == 'unpopular'){
            movies = sort(movies, 'number', 'popularity', false)
        } else if(sortType == 'average'){
            movies = sort(movies, 'number', 'vote_average', false)
        } else if(sortType == 'average-desc'){
            movies = sort(movies, 'number', 'vote_average', true)
        }
        setSlicedMovies(movies.slice(0, numberOfElements))
    }

    const toggleLike = (id) => dispatch(toggleAction(id))

    const closeModal = () => {
        if(typeof document != 'undefined'){
            setInfo(null)
            const body = document.querySelector('body');
            body.style.overflow = 'auto';
        }
    }

    const loadMore = () => {
        let numberOfElements = number + 6
        setNumber(numberOfElements)
        filteredElements(numberOfElements)
    }

    

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col col-md-2 col-lg-4">
                        <h5>
                            Liste de films
                        </h5>
                    </div>
                    <div className="col col-md-2 col-lg-4">
                        <div className="input-with-button" style={styles.inputWithButton}>
                            <SimpleInput styles={{...inputStyle.formControl, ...styles.formControl}} onChangeText={setSearchText} value={searchText} placeholder={"Rechercher un film"}/>
                            <a onClick={filteredElements} style={styles.button}><img style={styles.imageButton} src={glass}/></a>
                        </div>
                    </div>
                    <div className="col col-md-2 col-lg-4">
                        <SimpleSelect styles={{...inputStyle.formControl, ...styles.formControl}} onChangeOption={setSortType} value={sortType} placeholder={"Ranger par"} data={SORT_LABELS}/>
                    </div>
                </div>
            </div>
            <div className='container' id="container-infinite">
                <InfiniteScoller
                  useWindow
                  hasMore={films?.length != slicedMovies?.length}
                  loadMore={loadMore}
                  loader={<Loader width={80}/>}
                >
                    {
                        slicedMovies.map((item, index) => 
                        <Card key={item?.id + index} setInfo={(it) => setInfo(it)} item={item} toggle={() => toggleLike(item.id)} isLike={likes.findIndex(it => it == item.id) > -1}/>
                        )
                    }
                </InfiniteScoller>
            </div>
            {
                info ?
                <Modal close={closeModal} info={info}/>
                : null
            }
           
        </>
    )
}

const styles = {
    formControl: {
        alignSelf: 'center',
        width: "200px",
        height: "30px !important",
        marginTop: "10px"
    },
    imageButton: {
        height: "20px"
    },
    inputWithButton: {
        position: 'relative'
    },
    button: {
        position: 'absolute',
        top: "10px",
        left: "200px"
    }
}

export default MoviesList