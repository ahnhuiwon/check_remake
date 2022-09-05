import { useSelector, useDispatch } from 'react-redux';

export const useUserSetting = () => {

    const scroll_top = () => {
        window.scrollTo(0,0);
    }

    return { scroll_top }
}