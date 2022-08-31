import star from '../../img/star.svg';
import emptyStar from '../../img/empty-star.svg';
import halfStar from '../../img/half-star.svg';

export default (props) => {
    const rate = props?.rate ? props?.rate / 2 : 0

    const getStar = (i) => {
        if(i + 1 < rate){
            return <img style={rateStyle.star} src={star}/>
        } else {
            if(i + 0.5 < rate){
                return <img style={rateStyle.star} src={halfStar}/> 
            } else {
                return <img style={rateStyle.star} src={emptyStar}/> 
            }
        }
    }

    return (
        <>
            {Array.from(Array(5).keys()).map(i => 
                <>
                {getStar(i)}
                </>
            )}
        </>
    )
}

const rateStyle = {
    star: {
        width: "10px",
        height: "10px"
    }
}