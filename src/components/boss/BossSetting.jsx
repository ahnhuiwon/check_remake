import React from "react";
import { useContentsUdt } from "../../customHooks/useContents";

const BossSetting = ({data, filter}) => {

    const { boss_setting } = useContentsUdt(); 

    return(
        <div className="col-3 col_div">
            <div className="row row_div" onClick={()=>{ boss_setting(data.id) }}>
                <img src={`${data.link}`} />
                <p>{data.name}</p>
            </div>
        </div>
    )
}

export default BossSetting;