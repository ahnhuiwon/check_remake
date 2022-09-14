import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export const useUserSetting = () => {

    const { park_data } = useSelector(state=>state.parkReducer);
    const { contents_data } = useSelector(state=>state.contentsReducer);
    const { union_data } = useSelector(state=>state.unionReducer);

    const scroll_top = () => {
        window.scrollTo(0,0);
    }

    const dashboard_save = () => {
        window.localStorage.setItem("park_setting", JSON.stringify(park_data));
        window.localStorage.setItem("user_setting", JSON.stringify(contents_data));
        window.localStorage.setItem("union_setting", JSON.stringify(union_data));
        Swal.fire(
            '완료되었습니다!',
            '선택하신 컨텐츠가 저장되었습니다.',
            'success'
        )
    }

    return { scroll_top, dashboard_save }
}