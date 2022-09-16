import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_contents } from "../redux/action";

const useSymbolCalc = (level_state, count_state, id) => {

    const [total_state, set_total_state] = useState(0);
    const { contents_data } = useSelector(state=>state.contentsReducer);
    const dispatch = useDispatch();

    // 레벨 당 아케인 심볼 중첩 수
    const symbol_count = [
        "0", "12", "27", "47", "74", "110", 
        "157", "217", "292", "384", "495", "627", 
        "782", "962", "1169", "1405", "1672", "1972", 
        "2307", "2697"
    ];

    // 레벨 당 어센틱 심볼 중첩 수
    const acentic_count = [
        "0", "29", "105", "246", "470", 
        "795", "1239", "1820", "2556", "3465", 
        "4565"
    ];


    useEffect(()=>{
        console.log('진입');
        if(count_state || level_state){
            symbol_level_local(id);
        }
    }, [level_state]);


    useEffect(()=>{
        console.log('진입');
        if(count_state || level_state){
            symbol_count_local(id);
        }
    }, [count_state]);


    useEffect(()=>{
        console.log('진입2');
        if(count_state || level_state){
            if(id < 7){

                const get_symbol = symbol_count[Number(level_state) - 1];
                const total_percent = (Number(get_symbol) + Number(count_state)) / 2679 * 100;
                let total_percent_check = isNaN(total_percent) ? 0 : total_percent;

                total_percent_check > 100 && (total_percent_check = 100)

                set_total_state(Math.floor(total_percent_check));

            } else {

                const get_symbol = acentic_count[Number(level_state) - 1];
                const total_percent = (Number(get_symbol) + Number(count_state)) / 4565 * 100;
                let total_percent_check = isNaN(total_percent) ? 0 : total_percent;

                total_percent_check > 100 && (total_percent_check = 100)

                set_total_state(Math.floor(total_percent_check));
            }
        }

    }, [level_state, count_state]);



    const symbol_level_local = (param) => {
        contents_data.arcane.map((data)=>(
            data.id === param && (data.level = level_state)
        ));

        dispatch(set_contents(contents_data));
    }

    const symbol_count_local = (param) => {
        contents_data.arcane.map((data)=>(
            data.id === param && (data.count = count_state)
        ));

        dispatch(set_contents(contents_data));
    }

    return total_state;

}

export default useSymbolCalc;