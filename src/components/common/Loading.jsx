import * as Loader from 'react-loader-spinner';

const Loading = () => {
    return(
        <div className='loading_wrap'>
            <Loader.Rings color="#111d69" height={400} width={400} />
        </div>
    )
}

export default Loading;