import React, { useState, useEffect } from "react";
import generateImage from "api/generateImage";
import { cardCarouselStyle } from "styles";
import noImage from '../../img/no-image.jpg';
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
        <div className="col-12 col-md-6 col-xl-3">
            <div style={cardCarouselStyle.card_with_description}>
                <div className="m-0" style={cardCarouselStyle.card_with_description__card}>
                    <div className="w-100 rounded shadow">
                        <div className="position-relative">
                            <div style={cardCarouselStyle.card_with_description__card_thumb}>
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
                    <p className="text-white-70 m-1" style={cardCarouselStyle.text_white_70}>
                        {item?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}