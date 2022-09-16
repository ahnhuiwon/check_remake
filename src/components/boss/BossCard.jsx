import React from "react";
import '../../style/scss/boss.scss';
import { CgClose } from "react-icons/cg";
import { useContentsUdt } from "../../customHooks/useContents";
import { useSwalModule } from "../../customHooks/useSweetAlert";

const BossCard = ({data, filter}) => {

    const { boss_change_mode } = useContentsUdt();
    const { delete_swal } = useSwalModule();

    return(
        <>
        { 
        !data.close &&
            <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-3 card_wrap">
                <div className="card">
                    <img src={`${data.link}`} className="card-img-top" alt="보스 이미지" />
                    <div className="card-body div_dom">
                        <h5 className="card-title boss_title">{data.name}</h5>
                        <div>
                            <CgClose onClick={()=>{ delete_swal(data.id, filter) }}/>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush ul_wrap">
                        <li className="list-group-item li_dom">클리어
                            <span className="form-check form-switch span_input">
                                <input className="form-check-input" type="checkbox" checked={data.mode} onChange={()=> { boss_change_mode(data.id) }}/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        }
        </>
    )
}

export default BossCard;