import { useSelector, useDispatch } from "react-redux";
import { set_park } from "../redux/action";

export const useParkSet = () => {
    
    const { park_data } = useSelector(state=>state.parkReducer);
    const dispatch = useDispatch();

    const change_park_value = (event, param) => {
        const { value } = event.target;
        park_data.park.map((data)=>(
            data.id === param && (data.count = value)
        ))

        dispatch(set_park(park_data));
    }

    return { change_park_value }
}

