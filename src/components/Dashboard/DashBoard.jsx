import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SymbolCard from './SymbolCard'
import '../../style/scss/dashboard.scss'
import Chart from '../common/ Chart'
import Input from '../common/Input'
import union from '../../style/image/union1.png'

const DashBoard = () => {
  const { contents_data } = useSelector(state => state.contentsReducer)
  const [day_week, set_day_week] = useState([
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
    '일',
  ])

  return (
    <div className="contents_wrap">
      <div className="row">
        <div class="btn_group_wrap mb-4">
          <button type="button" class="btn btn-primary btn_left">
            저장하기
          </button>
        </div>
        <div className="col-lg-6">
          <div className="row">
            {contents_data.arcane.map((data, index) => (
              <SymbolCard data={data} key={index} />
            ))}
          </div>
        </div>

        <div className="col-xl-6">
          <div className="row">
            <div className="col-sm-6 col-lg-12">
              <div className="card widget-flat mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h4 className="header-title">몬스터 파크 진행률</h4>
                  </div>
                  <div className="row">
                    <Chart />
                    <div className="input_wrap">
                      <div className="row">
                        {day_week.map((data, index) => (
                          <Input key={index} data={data} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12">
              <div className="card widget-flat">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="header-title">유니온 진행률</h4>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mb-5 union_img_wrap">
                      <img src={union} alt="유니온 이미지" />
                    </div>
                    <div className="col-sm-6 mb-5">
                      <div className="row">
                        <div class="input-group mb-3">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            유니온 등급
                          </label>
                          <select class="form-select" id="inputGroupSelect01">
                            <option selected>노비스</option>
                            <option value="1">노비스</option>
                            <option value="2">베테랑</option>
                            <option value="3">마스터</option>
                            <option value="4">그랜드 마스터</option>
                            <option value="5">슈프림</option>
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            유니온 단계
                          </label>
                          <select class="form-select" id="inputGroupSelect01">
                            <option selected>1단계</option>
                            <option value="1">1단계</option>
                            <option value="2">2단계</option>
                            <option value="3">3단계</option>
                            <option value="4">4단계</option>
                            <option value="5">5단계</option>
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            유저 유니온
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="현재 레벨을 입력하세요"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 mt-3 text-muted union_progress_wrap">
                      <span className="text-success me-2">
                        <i className="mdi mdi-arrow-up-bold"></i>다음 유니온
                      </span>
                      <div className="progress progress_style">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '25%' }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>25%</span>
                    </p>
                    <p className="mb-3 mt-3 text-muted union_progress_wrap">
                      <span className="text-success me-2">
                        <i className="mdi mdi-arrow-up-bold"></i>목표 유니온
                      </span>
                      <div className="progress progress_style">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '25%' }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>25%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
