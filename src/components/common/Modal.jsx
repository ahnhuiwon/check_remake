import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { set_modal } from "../../redux/action";
import SymbolSetting from "../contents/SymbolSetting";
import { useContentsUdt } from "../../customHooks/useContents";

const ContentsModal = () => {

    const dispatch = useDispatch();
    const { contents_data } = useSelector(state=>state.contentsReducer);
    const { etc_data } = useSelector(state=>state.etcReducer);
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
                    <div className="row">
                    {
                        contents_data.arcane.map((data, index) => (
                            <SymbolSetting data={data} index={index}/>
                        ))
                    }
                    {
                        etc_data.etc.map((data, index)=>(
                            <SymbolSetting data={data} index={`etc${index}`} filter={"etc"}/>
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

export default ContentsModal;