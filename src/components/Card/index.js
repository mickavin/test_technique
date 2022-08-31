import React, { useState, useEffect } from "react";
import generateImage from "api/generateImage";
import './style.css';
import noImage from '../../img/no-image.jpg';
import loading from '../../img/loading.svg';
import Rate from "components/Rate";
import getDate from "utils/date";
import getLanguage from "utils/language";
import Like from "components/Like";

export default (props) => {
    const item = props?.item
    const [image, setImage] = useState('')
    const [isNotLoad, setIsNotLoad] = useState(false)

    useEffect(() => {
        fetchImage()
    }, [])

    const fetchImage = async () => {
        try {
            const response = await generateImage()
            if(response.status != 200){
                throw 'Une erreur est survenue';
            }
            const arr = await response.json()
            setImage(arr[0]?.url)
        } catch (e){
            setIsNotLoad(true)
        }
    }

    return (
        <div className="col col-md-2 col-lg-4">
            <div className="card card-movie">
                <div className="blog-grid w-100 rounded shadow">
                    <div className="position-relative">
                        <div className="card-thumb">
                            {
                                image ?
                                <img
                                    src={image}
                                    alt="img"
                                    className="card-img-top h-100 w-100"
                                />
                                : isNotLoad ?
                                <img
                                    src={noImage}
                                    alt="img"
                                    className="card-img-top h-100 w-100"
                                    style={{marginTop: "-70px"}}
                                />
                                :
                                <div className="divLoaderView">
                                    <img className="svgLoaderView" src={loading} />
                                </div>
                            }
                        
                        </div>
                    </div>
                    <div className="card-content content w-100">
                        <span className="rate position-absolute">
                            <Rate rate={item?.vote_average ? item?.vote_average : 0}/>
                        </span>
                        <a onClick={props?.toggle} className="like position-absolute">
                            <Like isLike={props?.isLike ? props?.isLike : false}/>
                        </a>
                        <div style={{ height: "60%" }}>
                        <h5>
                            <a
                            style={{ cursor: "pointer" }}
                            >
                            {item?.original_title}
                            </a>
                        </h5>
                        {
                            getLanguage(item?.original_language) ?
                            <p className="p-movie">
                                {getLanguage(item?.original_language)}
                            </p>
                        : null
                        }
                        
                        {
                            item?.release_date ?
                            <p className="p-movie">
                                {getDate(item.release_date)}
                            </p>
                            : null
                        }
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}