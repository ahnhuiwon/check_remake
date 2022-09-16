import ContentsSymbol from './ContentsSymbol';
import '../../style/scss/contents.scss';
import UpIcon from '../common/UpIcon';
import { useSelector, useDispatch } from 'react-redux';
import { useContentsUdt } from '../../customHooks/useContents';
import { set_modal } from '../../redux/action';
import Modal from '../common/Modal';
import EtcCard from './EtcCard';

const Contents = () => {
    const { contents_data } = useSelector(state=>state.contentsReducer);
    const { etc_data } = useSelector(state=>state.etcReducer);

    const { reset_mode, contents_set } = useContentsUdt();

    const dispatch = useDispatch();

    const add_modal = () => {
        dispatch(set_modal(true));
    }
    
    return(
        <div className="contents_wrap">
            <div className="row">
                <div class="btn_group_wrap">
                    <div class="btn-group btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary btn_left" onClick={()=>{ contents_set() }}>저장하기</button>
                        <button type="button" class="btn btn-primary" onClick={()=>{ add_modal() }}>추가하기</button>
                        <button type="button" class="btn btn-primary" 
                            onClick={()=>{ reset_mode("contents") }}
                        >리셋하기</button>
                    </div>
                </div>
                {
                    contents_data && contents_data.arcane.map((data, index)=>(
                        <ContentsSymbol data={data} key={index} filter="symbol" />
                    ))
                }
                {
                    etc_data && etc_data.etc.map((data, index)=> (
                        <EtcCard data={data} key={index} filter={"etc"} />
                    ))
                }
            </div>
            <UpIcon />
            <Modal />
        </div>
    )
}
export default Contents;