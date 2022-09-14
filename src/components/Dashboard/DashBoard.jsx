import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SymbolCard from './SymbolCard'
import '../../style/scss/dashboard.scss'
import Chart from '../common/ Chart'
import Input from '../common/Input'
import { useUserSetting } from '../../customHooks/useSetting'
import Union from './Union'

const DashBoard = () => {
  const { contents_data } = useSelector(state => state.contentsReducer)
  const { park_data } = useSelector(state => state.parkReducer);

  const { dashboard_save } = useUserSetting();

  return (
    <div className="contents_wrap">
      <div className="row">
        <div class="btn_group_wrap mb-4">
          <button type="button" class="btn btn-primary btn_left"
            onClick={()=>{ dashboard_save() }}
          >
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
                        {park_data.park.map((data, index) => (
                          <Input key={index} data={data} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12">
              <Union />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
