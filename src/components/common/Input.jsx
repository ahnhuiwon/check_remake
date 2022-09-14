import React from 'react'
import { useParkSet } from '../../customHooks/usePark';

const Input = ({ data }) => {

  const { id, count } = data;

  const { change_park_value } = useParkSet();

  return (
    <>
      <div class="col">
        <input
          type="text"
          className="form-control"
          style={{ textAlign : "center" }}
          defaultValue={count}
          onChange={(e)=>{ change_park_value(e, id) }}
        />
      </div>
    </>
  )
}

export default Input
