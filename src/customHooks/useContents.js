import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
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
            data.id === param ? data.close_mode = true : ''
        ));

        dispatch(set_contents(contents_data));
    }

    return { change_mode, sub_change_mode, reset_mode, close_mode };
}
