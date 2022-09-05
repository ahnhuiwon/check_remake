import { BiArrowToTop } from 'react-icons/bi'
import { useUserSetting } from '../../customHooks/useSetting';

const UpIcon = () => {

    const { scroll_top } = useUserSetting();

    return(
        <div className='top_icon_wrap' onClick={()=>{ scroll_top() }}>
            <BiArrowToTop />
        </div>
    )
}

export default UpIcon;