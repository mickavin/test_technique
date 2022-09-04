import React, { useState, useEffect } from "react";
import generateImage from "api/generateImage";
import './style.css';
import noImage from '../../img/no-image.jpg';
import Rate from "components/Rate";
import getDate from "utils/date";
import getLanguage from "utils/language";
import Like from "components/Like";
import Loader from "components/Loader";

export default (props) => {
    const item = props?.item
    const [image, setImage] = useState('')

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
            setImage(noImage)
        }
    }

    return (
        <div className="col col-md-2 col-lg-3">
            <div className="card card-movie" style={{width: "250px"}}>
                <div className="blog-grid w-100 rounded shadow">
                    <div className="position-relative">
                        <a onClick={() => props?.setInfo({...item, image})} className="info position-absolute pointer d-flex justify-content-center">
                            i
                        </a>
                        <a onClick={props?.toggle} className="like position-absolute pointer">
                            <Like isLike={props?.isLike ? props?.isLike : false}/>
                        </a>

                        <div className="card-thumb d-flex justify-content-center">
                            {
                                image ?
                                <img
                                    src={image}
                                    alt="img"
                                    className="card-img-top"
                                />
                                :
                                <Loader/>
                            }
                        
                        </div>
                    </div>
                    <div className="card-content content w-100">
                       
                        <span className="rate position-absolute">
                            <Rate rate={item?.vote_average ? item?.vote_average : 0}/>
                        </span>
                        
                        <div style={{ height: "60%", height: "100%" }}>
                        <h5>
                            <a
                            style={{ cursor: "pointer" }}
                            onClick={() => props?.setDesc({...item, image})}
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