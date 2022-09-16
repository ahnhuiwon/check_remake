import React, { useEffect, useState } from 'react'
import useSymbolCalc from '../../customHooks/useSymbolCalc'
import Swal from 'sweetalert2'

const SymbolCard = ({ data }) => {
  const { id } = data;
  const [level_state, set_level_state] = useState(Number(data.level))
  const [count_state, set_count_state] = useState(Number(data.count))

  const calc_result = useSymbolCalc(level_state, count_state, id)

  const change_symbol_level = e => {
    const { value } = e.target

    if (value > 20) {
      Swal.fire('수정할 수 없습니다!', 'lv은 최대 20입니다.', 'warning')

      set_level_state(1)

      return false
    }

    set_level_state(value)
  }

  const change_symbol_count = e => {
    const { value } = e.target

    set_count_state(value)
  }

  return (
    <div class="col-sm-6 mb-3">
      <div class="card widget-flat">
        <div class="card-body">
          <div class="float-end">
            <div className="icon_wrap">
              <img src={`${data.sym_link}`} />
            </div>
          </div>
          <h5 className="text-muted fw-normal mt-0" title="Number of Customers">
            {data.first_name}
          </h5>
          <p class="mb-3 mt-3 text-muted">
            <span class="text-success me-2">
              <i class="mdi mdi-arrow-up-bold"></i>
              {calc_result}%
            </span>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: `${calc_result}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </p>
          <div className="row">
            <div class="input-group-sm mb-2 col-sm-6">
              <span class="input-group-text" id="basic-addon1">
                Lv
              </span>
              <input
                type="number"
                class="form-control"
                placeholder="심볼 레벨"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={level_state}
                onChange={e => {
                  change_symbol_level(e)
                }}
                min="0"
                max={id > 6 ? "11" : "20"}
              />
            </div>
            <div class="input-group-sm mb-2 col-sm-6">
              <span class="input-group-text" id="basic-addon1">
                개수
              </span>
              <input
                type="number"
                class="form-control"
                placeholder="심볼 현재 개수"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={count_state}
                onChange={e => {
                  change_symbol_count(e)
                }}
                min="0"
                max="372"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SymbolCard
