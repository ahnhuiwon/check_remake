import { BiArrowToTop } from 'react-icons/bi'
import { useScrollTop } from '../../customHooks/useSetting';

const UpIcon = () => {

    const { scroll_top } = useScrollTop();

    return(
        <div className='top_icon_wrap' onClick={()=>{ scroll_top() }}>
            <BiArrowToTop />
        </div>
    )
}

export default UpIcon;