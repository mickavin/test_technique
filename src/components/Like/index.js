import heart from '../../img/heart.svg';
import heartOutline from '../../img/heart-outline.svg';

export default (props) => {
console.log(props)
    return (
        <>
            {
                props?.isLike ?
                <img style={likeStyle.like} src={heart}/> 
                :
                <img style={likeStyle.like} src={heartOutline}/> 
            }
        </>
    )
}

const likeStyle = {
    like: {
        width: "20px",
        height: "20px"
    }
}