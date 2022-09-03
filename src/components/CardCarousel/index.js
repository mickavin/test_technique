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
            <div className="card-with-description">
                <div className="card card-movie m-0">
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
                                    :
                                    <Loader/>
                                }
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className="text-white m-1">
                        {item?.id}. {item?.title}
                    </h6>
                    <p className="text-white-70 m-1">
                        {item?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}