import React, { useState, useEffect} from "react";

const useSymbolCalc = (level_state, count_state) => {

    const [total_state, set_total_state] = useState(0);


    // 레벨 당 심볼 중첩 수
    const symbol_count = [
        "0", "12", "27", "47", "74", "110", 
        "157", "217", "292", "384", "495", "627", 
        "782", "962", "1169", "1405", "1672", "1972", 
        "2307", "2697"
    ];


    useEffect(()=>{
        if(count_state || level_state){

            const get_symbol = symbol_count[Number(level_state) - 1];
            const total_percent = (Number(get_symbol) + Number(count_state)) / 2679 * 100;
            const total_percent_check = isNaN(total_percent) ? 0 : total_percent;

            set_total_state(Math.floor(total_percent_check));
        }

    }, [level_state, count_state]);

    return total_state;

}

export default useSymbolCalc;