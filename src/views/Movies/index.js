import { useEffect, useState } from "react";
import Card from '../../components/Card';
import films from '../../data/list-de-films';
import './style.css';
import { moviesStyle, inputStyle } from "styles"; 
import SimpleInput from 'components/SimpleInput';
import search from "utils/search";
import sort from "utils/sort";
import SimpleSelect from "components/SimpleSelect";
import SORT_LABELS from "constants/sortLabels";
import { useSelector, useDispatch } from 'react-redux'
import { toggleAction } from "store/actions/toggleAction";

const MoviesList = () => {
    const likes = useSelector(state => state.like.likedMovies)
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('')
    const [sortType, setSortType] = useState('alphabetic')
    const filteredElements = () => {
        let movies = search(searchText, films, [{type: 'number', key: 'id'}, {type: 'text', key: 'original_title'}, {type: 'text', key: 'overview'}])
        if(sortType == 'alphabetic'){
            return sort(movies, 'text', 'original_title', true)
        } else if(sortType == 'alphabetic-desc'){
            return sort(movies, 'text', 'original_title', false)
        } else if(sortType == 'popular'){
            return sort(movies, 'number', 'popularity', true)
        } else if(sortType == 'unpopular'){
            return sort(movies, 'number', 'popularity', false)
        } else if(sortType == 'average'){
            return sort(movies, 'number', 'vote_average', false)
        } else if(sortType == 'average-desc'){
            return sort(movies, 'number', 'vote_average', true)
        }
        return movies
    }

    const toggleLike = (id) => dispatch(toggleAction(id))

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
                        <SimpleInput styles={{...inputStyle.formControl, ...styles.formControl}} onChangeText={setSearchText} value={searchText} placeholder={"Rechercher un film"}/>
                    </div>
                    <div className="col col-md-2 col-lg-4">
                        <SimpleSelect styles={{...inputStyle.formControl, ...styles.formControl}} onChangeText={setSortType} value={sortType} placeholder={"Ranger par"} data={SORT_LABELS}/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        filteredElements().map((item, index) => 
                            <Card key={item?.id + index} item={item} toggle={() => toggleLike(item.id)} isLike={likes.findIndex(it => it == item.id) > -1}/>
                            )
                    }
                </div>
            </div>
        </>
    )
}

const styles = {
    formControl: {
        alignSelf: 'center',
        width: "200px",
        height: "30px !important",
        marginTop: "10px"
    }
}

export default MoviesList