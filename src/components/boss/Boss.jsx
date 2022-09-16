import { useDispatch, useSelector } from "react-redux";
import { useContentsUdt } from "../../customHooks/useContents";
import { set_boss_modal } from "../../redux/action";
import BossModal from "../common/BossModal";
import UpIcon from "../common/UpIcon";
import BossCard from "./BossCard";

const Boss = () => {

    const dispatch = useDispatch();

    const { boss_data } = useSelector(state=>state.bossReducer);
    
    const { reset_mode, boss_set } = useContentsUdt();

    const boss_add_modal = () => {
        dispatch(set_boss_modal(true));
    }
    
    return(
        <div className="contents_wrap">
            <div className="row">
                <div class="btn_group_wrap">
                    <div class="btn-group btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={()=>{ boss_set() }}>저장하기</button>
                        <button type="button" class="btn btn-primary" onClick={()=>{ boss_add_modal() }}>추가하기</button>
                        <button type="button" class="btn btn-primary" onClick={()=>{ reset_mode("boss") }}>리셋하기</button>
                    </div>
                </div>
                {
                    boss_data && boss_data.week_boss.map((data, index)=>(
                        <BossCard data={data} key={index} filter="boss"/>
                    ))
                }
            </div>
            <UpIcon />
            <BossModal />
        </div>
    )
}
export default Boss;