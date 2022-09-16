import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useUnionCalc from "../../customHooks/useUnionCalc";
import union_img from '../../style/image/union1.png'

const Union = () => {

    const { target_rating, target_level, my_level } = useSelector(state=>state.unionReducer.union_data.union);

    const [rating_state, set_rating_state] = useState(target_rating);
    const [level_state, set_level_state] = useState(target_level);
    const [my_state, set_my_state] = useState(my_level);

    const [step_union, set_step_union] = useState([
      [500, 1000, 1500, 2000, 2500],
      [3000, 3500, 4000, 4500, 5000],
      [5500, 6000, 6500, 7000, 7500],
      [8000, 8500, 9000, 9500, 10000],
      [10500, 11000, 11500, 12000, 12500]
    ]);

    const calc_result = useUnionCalc(rating_state, level_state, my_state);

    console.log(calc_result);

    const change_union_rating = (event) => {
      
      const { value } = event.target;

      set_rating_state(value);
    }

    const change_union_level = (event) => {

      const { value } = event.target;
      
      set_level_state(value);
    }

    const change_my_level = (event) => {

      const { value } = event.target;
      
      set_my_state(value);
    }

    return(
        <div className="card widget-flat">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="header-title">유니온 진행률</h4>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mb-5 union_img_wrap">
                      <img src={union_img} alt="유니온 이미지" />
                    </div>
                    <div className="col-sm-6 mb-5">
                      <div className="row">
                        <div class="input-group mb-3">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            목표 등급
                          </label>
                          <select class="form-select" id="inputGroupSelect01" value={rating_state} 
                            onChange={(e)=>{ change_union_rating(e) }}
                          >
                            <option value="0">노비스</option>
                            <option value="1">베테랑</option>
                            <option value="2">마스터</option>
                            <option value="3">그랜드 마스터</option>
                            <option value="4">슈프림</option>
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            목표 단계
                          </label>
                          <select class="form-select" id="inputGroupSelect01" value={level_state}
                            onChange={(e)=>{ change_union_level(e) }}
                          >
                            <option value="0">1단계</option>
                            <option value="1">2단계</option>
                            <option value="2">3단계</option>
                            <option value="3">4단계</option>
                            <option value="4">5단계</option>
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            내 유니온
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="현재 레벨을 입력하세요"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e)=>{ change_my_level(e) }}
                            value={my_state}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-xl-3 union_text">
                          <span className="text-success me-2">
                            <i className="mdi mdi-arrow-up-bold"></i>목표 유니온
                          </span>
                        </div>
                        <div className="col-sm-12 col-xl-7 union_chart">
                          <div className="progress progress_style">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${calc_result}%` }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-xl-2 union_percent">
                          <span>{calc_result}%</span>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
    )
}

export default Union;