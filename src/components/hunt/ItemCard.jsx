import React from "react";
import useItemUdt from "../../customHooks/useItem";

const ItemCard = ({data}) => {

    const { change_item } = useItemUdt();

    return(
        <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 card_wrap">
            <div className="card hunt_card">
                <img src={`${data.link}`} className="card-img-top" alt="..." />
                <div className="card-body div_dom">
                    <h5 className="card-title">{data.name}</h5>
                </div>
            </div>
            <div className="input-group hunt_input">
                {
                    data.name === "메소" ?
                    <span class="input-group-text" id="basic-addon1">총 메소</span> :
                    <span class="input-group-text" id="basic-addon1">개수</span>
                }
                <input type="number" class="form-control" value={data.count} placeholder="0" aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={(e)=>{ change_item(e, data.id) }}
                />
            </div>
        </div>
    )
}

export default ItemCard;