import React from "react";
import { useContentsUdt } from "../../customHooks/useContents";

const SymbolSetting = ({data, filter}) => {

    const { symbol_setting } = useContentsUdt(); 

    return(
        <div className="col-3 col_div">
            <div className="row row_div" onClick={()=>{ symbol_setting(data.id, filter) }}>
                <img src={`${data.sym_link}`} />
                <p>{data.first_name}</p>
            </div>
        </div>
    )
}

export default SymbolSetting;