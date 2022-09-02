import { useEffect } from "react";
import Rate from "components/Rate";
import round from "utils/round";
import date from "utils/date";

export default ({close, info}) => {
    useEffect(() => {
        if(typeof document != 'undefined'){
            const body = document.querySelector('body');
            body.style.overflow = 'hidden';
        }
    }, [])
    return (
        <div onClick={() => close()} className='' style={modalStyles.backdrop}>
            <div style={modalStyles.modal}>
                <img className="w-100" src={info.image}/>
                <div style={modalStyles.modalBody}>
                    <span style={modalStyles.modalSpan}>
                        <Rate rate={info?.vote_average ? info?.vote_average : 0}/> 
                        ({round(info?.vote_average ? info?.vote_average/2 : 0)})
                    </span>
                    <h5 style={modalStyles.modalTitle}> 
                        {info?.original_title}
                    </h5>
                    <p> 
                        {info?.overview}
                    </p>
                    <p> 
                        {date(info?.release_date)}
                    </p>
                </div> 
            </div>
        </div>
    )
}

const modalStyles = {
    backdrop: {
        position: "fixed", 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor:'rgba(0,0,0,0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    modal: {
        overflow: "auto",
        maxHeight: "100vh",
        maxWidth: "100vw",
        width: "400px",
        height: "600px",
        backgroundColor: "#fff"
    }, 
    modalBody: {
        padding: "20px"
    }, 
    modalTitle: {
        marginTop: 0
    },
    modalSpan: {
        fontSize: "13px"
    }
}