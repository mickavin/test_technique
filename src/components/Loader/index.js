import loading from '../../img/loading.svg';

export default ({width=20}) => {
    return (
        <div className="divLoaderView">
            <img className="svgLoaderView" src={loading} width={width}/>
        </div>
    )
}