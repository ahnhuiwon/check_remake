import React from "react";

const SymbolCard = ({data}) => {
    return(
        <div class="col-sm-6 mb-3">
            <div class="card widget-flat">
                <div class="card-body">
                    <div class="float-end">
                        <div className="icon_wrap">
                            <img src={`${data.sym_link}`} />
                        </div>
                    </div>
                    <h5 className="text-muted fw-normal mt-0" title="Number of Customers">{data.first_name}</h5>
                    <p class="mb-3 mt-3 text-muted">
                        <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 99.27%</span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> 
                    </p>
                    <div className="row">
                        <div class="input-group-sm mb-2 col-sm-6">
                            <span class="input-group-text" id="basic-addon1">Lv</span>
                            <input type="number" class="form-control" placeholder="심볼 레벨" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group-sm mb-2 col-sm-6">
                            <span class="input-group-text" id="basic-addon1">개수</span>
                            <input type="number" class="form-control" placeholder="심볼 현재 개수" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SymbolCard;