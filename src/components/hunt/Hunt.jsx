import React, { useState } from "react";
import moment from "moment";
import '../../style/scss/hunt.scss';
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import useItemUdt from "../../customHooks/useItem";
import html2canvas from "html2canvas";
import UpIcon from "../common/UpIcon";

const Hunt = () => {

    const { reset_mode, item_set } = useItemUdt();

    const [today, set_today] = useState(moment().format('YYYY-MM-DD'));

    const { item_data } = useSelector(state=> state.huntReducer);

    const capture_func = () => {
        html2canvas(document.body).then(canvas=> {
            const capture = document.createElement('a');
            capture.download = 'filename';
            capture.href = canvas.toDataURL(capture);
            capture.click();
        });
    }

    return(
        <div className="contents_wrap">
            <div className="row">
                <h3 class="col-sm-12 col-xl-5">{today}</h3>
                <div className="col-sm-12 col-xl-2">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">사용한 재획비</span>
                        <input type="number" class="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" 
                            min="0"
                        />
                    </div>
                </div>
                <div class="col-sm-12 col-xl-5 hunt_btn_wrap">
                    <div class="btn-group btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={()=>{ capture_func() }}>
                            캡쳐하기
                        </button>
                        <button type="button" class="btn btn-primary" onClick={()=>{ item_set() }}>
                            저장하기
                        </button>
                        <button type="button" class="btn btn-primary" onClick={ ()=>{ reset_mode() } }>
                            리셋하기
                        </button>
                    </div>
                </div>
                {
                    item_data && item_data.item.map((data, index)=> (
                        <ItemCard data={data} key={index} />
                    ))
                }
            </div>
            <UpIcon />
        </div>
    )
}

export default Hunt;