import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_boss_modal } from "../../redux/action";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BossSetting from "../boss/BossSetting";

const BossModal = () => {

    const dispatch = useDispatch();
    const { modal_state } = useSelector(state=>state.bossModalReducer);
    const { boss_data } = useSelector(state=>state.bossReducer);

    const close_modal = () => {
        dispatch(set_boss_modal(false));
    }

    return(
        <>
            <Modal show={modal_state} >
                <Modal.Header closeButton onClick={()=>{close_modal()}}>
                    <Modal.Title>컨텐츠 추가하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                    {
                        boss_data.week_boss.map((data, index) => (
                            <BossSetting data={data} index={index}/>
                        ))
                    }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{close_modal()}}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BossModal;