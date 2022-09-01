import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { set_modal } from "../../redux/action";

const ContentsModal = () => {

    const dispatch = useDispatch();
    const { contents_data } = useSelector(state=>state.contentsReducer);
    const { modal_state } = useSelector(state=>state.modalReducer);

    const close_modal = () => {
        dispatch(set_modal(false));
    }

    
    return(
        <>
            <Modal show={modal_state} >
                <Modal.Header closeButton onClick={()=>{close_modal()}}>
                    <Modal.Title>컨텐츠 추가하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        contents_data.arcane.map(data => (
                            console.log(data)
                        ))
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" >
                        저장하기
                    </Button>
                    <Button variant="secondary" onClick={()=>{close_modal()}}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContentsModal;