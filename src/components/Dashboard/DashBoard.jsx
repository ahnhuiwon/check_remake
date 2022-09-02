import React from "react";
import { useSelector } from "react-redux";
import SymbolSetting from "../contents/SymbolSetting";
import SymbolCard from "./SymbolCard";
import '../../style/scss/dashboard.scss';
import Example from './ParkChart';

const DashBoard = () => {

    const { contents_data } = useSelector(state=>state.contentsReducer);

    return(
        <div className="contents_wrap">
            <div className="row">
                <div className="col-lg-6" style={{backgroundColor : "white"}}>
                    <div className="row">
                    {
                        contents_data.arcane.map((data, index)=>(
                            <SymbolCard data={data} key={index}/>
                        ))
                    }
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h4 className="header-title">몬스터 파크 차트</h4>
                        </div>
                        <Example />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;