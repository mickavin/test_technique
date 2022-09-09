import loading from '../../img/loading.svg';
import { loaderStyle } from 'styles';

export default ({width=20}) => {
    return (
        <div style={loaderStyle.divLoaderView}>
            <img style={loaderStyle.svgLoaderView} src={loading} width={width}/>
        </div>
    )
}