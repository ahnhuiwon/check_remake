import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_item } from "../redux/action";
import Swal from "sweetalert2";

const useItemUdt = () => {
    
    const { item_data } = useSelector(state=>state.huntReducer);
    const dispatch = useDispatch();

    const change_item = (e, param) => {

        const { value } = e.target;

        item_data.item.map((data)=>(
            data.id === param && (data.count = value)
        ))

        dispatch(set_item(item_data));
    }

    const reset_mode = () => {
        item_data.item.map((data)=>(
            data.count = 0
        ))

        dispatch(set_item(item_data));
    }

    const item_set = () => {
        window.localStorage.setItem("item_setting", JSON.stringify(item_data));
        Swal.fire(
            '완료되었습니다!',
            '성공적으로 저장되었습니다.',
            'success'
        )
    }

    return { change_item, reset_mode, item_set }    
}

export default useItemUdt;