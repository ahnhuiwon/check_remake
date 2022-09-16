import { Link } from 'react-router-dom';
import '../../style/scss/index.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {

    const [menu_flag, set_menu_flag] = useState(false);

    const open_menu = () => {
      set_menu_flag(!menu_flag);
    }

    return(
      <>
        <nav className='nav_wrap'>
          <Link to="/" className="title_text">
            단풍 체크기
          </Link>
          <ul>
            <li>
              <Link to="/dashboard">대시보드</Link>
            </li>
            <li>
              <Link to="/contents">컨텐츠 체크</Link>
            </li>
            <li>
              <Link to="/boss">주간보스 체크</Link>
            </li>
            <li>
              <Link to="/hunt">재획비 체크</Link>
            </li>
          </ul>
        </nav>
        <nav className="mobile_menu">
          <Link to="/" className="title_text">
            단풍 체크기
          </Link>
          <div className='icon_wrap' onClick={()=>{ open_menu() }}>
            <AiOutlineMenu />
          </div>
        </nav>
        <ul className="hidden_menu" style={ menu_flag ? { height : "260px" } : { height : "0" }}>
          <li>
            <Link to="/dashboard" onClick={()=>{ set_menu_flag(false) }}>대시보드</Link>
          </li>
          <li>
            <Link to="/contents" onClick={()=>{ set_menu_flag(false) }}>컨텐츠 체크</Link>
          </li>
          <li>
            <Link to="/boss" onClick={()=>{ set_menu_flag(false) }}>주간보스 체크</Link>
          </li>
          <li>
            <Link to="/hunt" onClick={()=>{ set_menu_flag(false) }}>재획비 체크</Link>
          </li>
        </ul>
      </>
    )
}

export default Header;