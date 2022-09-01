import React from "react";
import { useSelector } from "react-redux";
import { CgClose } from 'react-icons/cg'
import { useContentsUdt } from "../../customHooks/useContents";
import { useSwalModule } from "../../customHooks/useSweetAlert";

const ContentsSymbol = ({data}) => {

    const { change_mode, sub_change_mode } = useContentsUdt();
    const { delete_swal } = useSwalModule();

    return(
        <>
        { !data.close_mode &&
            <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-3 card_wrap">
                <div className="card">
                    <img src={`${data.link}`} className="card-img-top" alt="..." />
                    <div className="card-body div_dom">
                        <h5 className="card-title">{data.first_name}</h5>
                        <div>
                            <CgClose onClick={()=>{ delete_swal(data.id) }}/>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush ul_wrap">
                        <li className="list-group-item li_dom">일일 퀘스트
                            <span className="form-check form-switch span_input">
                                <input className="form-check-input" type="checkbox" checked={data.first_mode} onChange={()=>{ change_mode(data.id) }} />
                            </span>
                        </li>
                        {
                        data.second_name && 
                        <li className="list-group-item li_dom">{data.second_name}
                            <span className="form-check form-switch span_input">
                                <input className="form-check-input" type="checkbox" checked={data.second_mode}  onChange={()=>{ sub_change_mode(data.id) }} />
                            </span>
                        </li>
                        }
                    </ul>
                </div>
            </div>
        }
        </>
    )
}

export default ContentsSymbol;