import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ["Women","Men","Baby","Kids","H&M HOME","Sport","Sale","지속가능성"]
  return (
    <div>
        <div>
            <div className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
            </div>
        </div>
        <div className="nav-section">
            <img width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/330px-H%26M-Logo.svg.png"/>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>               
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder="제품 검색"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar