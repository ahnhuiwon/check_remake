import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_union } from "../redux/action";

const useUnionCalc = (rating_state, level_state, my_state) => {

    const [total_percent, set_total_percent] = useState(0);
    const [next_percent, set_next_percent] = useState(0);

    const { union_data } = useSelector(state=>state.unionReducer);
    const dispatch = useDispatch();

    // 스텝당 유니온 요구 레벨
    const union_count = [
        [500, 1000, 1500, 2000, 2500],
        [3000, 3500, 4000, 4500, 5000],
        [5500, 6000, 6500, 7000, 7500],
        [8000, 8500, 9000, 9500, 10000],
        [10500, 11000, 11500, 12000, 12500]
    ];



    useEffect(()=>{
        change_union_local('target_rating', rating_state);
    }, [rating_state]);



    useEffect(()=>{
        change_union_local('target_level', level_state);
    }, [level_state]);



    useEffect(()=>{
        change_union_local('my_level', my_state);
    }, [my_state]);


    
    useEffect(()=>{
        if(rating_state && level_state && my_state){

            const get_union = union_count[rating_state][level_state];

            let total_percent = Number(my_state) / Number(get_union) * 100;

            total_percent > 100 && (total_percent = 100);

            set_total_percent(Math.floor(total_percent));

        }
    }, [rating_state, level_state, my_state]);



    // useEffect(()=>{
    //     if(rating_state && level_state && my_state){
    //         if(level_state === 4){
                
    //             const next_state = Number(rating_state) + 1;

    //             const get_union = union_count[next_state][0];
                
    //             const total_percent = Number(my_state) / Number(get_union) * 100;

    //             set_next_percent(total_percent);
    //         } else {
    //             return false
    //         }
    //     }
    // }, [rating_state, level_state, my_state]);

    const change_union_local = (param, data) => {
        union_data.union[param] = data;

        dispatch(set_union(union_data));
    }

    return total_percent
}

export default useUnionCalc;