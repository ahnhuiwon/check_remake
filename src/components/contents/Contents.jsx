import ContentsSymbol from './ContentsSymbol';
import '../../style/scss/contents.scss';
import UpIcon from '../common/UpIcon';
import { useSelector } from 'react-redux';

const Contents = () => {
    const { contents_data } = useSelector(state=>state.contentsReducer);
    
    return(
        <div className="contents_wrap">
            <div className="row">
                <div class="btn_group_wrap">
                <button type="button" class="btn btn-primary btn_left" >저장하기</button>
                    <div class="btn-group btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" >추가하기</button>
                        <button type="button" class="btn btn-primary">리셋하기</button>
                    </div>
                </div>
                {
                    contents_data && contents_data.arcane.map((data, index)=>(
                        <ContentsSymbol data={data} key={index}/>
                    ))
                }
            </div>
            <UpIcon />
        </div>
    )
}
export default Contents;