import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { set_contents } from "../redux/action";

export const useContentsUdt = () => {

    const { contents_data } = useSelector(state=>state.contentsReducer);
    const dispatch = useDispatch();

    const change_mode = (param) => {
        contents_data.arcane.map((data)=>(
            data.id === param ? data.first_mode = !data.first_mode : ''
        ));

        dispatch(set_contents(contents_data));
    }

    const sub_change_mode = (param)=> {
        contents_data.arcane.map((data)=>(
            data.id === param ? data.second_mode = !data.second_mode : ''
        ));

        dispatch(set_contents(contents_data));
    }

    const reset_mode = () => {

        contents_data.arcane.map((data)=> (
            data.first_mode = false
        ))

        contents_data.arcane.map((data)=> (
            data.second_mode = false
        ))

        dispatch(set_contents(contents_data));
    }

    const close_mode = (param) => {
        console.log(param);
        contents_data.arcane.map((data)=>(
            data.id === param ? data.close = true : ''
        ));

        dispatch(set_contents(contents_data));
    }

    const symbol_setting = (param) => {

        contents_data.arcane.map((data)=>{
            if(data.id === param){
                if(data.close === false){
                    Swal.fire(
                        '추가할 수 없습니다!',
                        '이미 존재하는 컨텐츠입니다.',
                        'warning'
                    )
                }
            }
        });

        contents_data.arcane.map((data)=>(
            data.id === param && (data.close = false)
        ));

        dispatch(set_contents(contents_data));
    }

    const contents_set = () => {
        window.localStorage.setItem("user_setting", JSON.stringify(contents_data));
        Swal.fire(
            '완료되었습니다!',
            '선택하신 컨텐츠가 저장되었습니다.',
            'success'
        )
    }

    return { change_mode, sub_change_mode, reset_mode, close_mode, symbol_setting, contents_set };
}
