import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

//강의에서는(7-7강의 2:50) 로그인에 onClick 이벤트로 함수줘서 로그인페이지 호출함
const Navbar = () => {
    const menuList = ["Women","Men","Baby","Kids","H&M HOME","Sport","Sale","지속가능성"]
    
    const navigate = useNavigate()
    
    const goToLogin = () => {
        navigate("/login")
    }
    const search = (event) => {
        //console.log("key press")

        //search에 입력한 검색어를 읽어와서 url 바꿔주기
        if(event.key === "Enter"){
            //console.log("click", event.key)
            let keyword = event.target.value
            //console.log("keyword", keyword)

            //url변경
            navigate(`/?q=${keyword}`)
        }
    }
  return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon className="login-icon" icon={faUser} />
            <div className="login-link">로그인</div>
            </div>
        </div>
        <div className="nav-section">
        <Link to="/">
            <img width="70px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/330px-H%26M-Logo.svg.png"/>
        </Link>

        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>               
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder="제품 검색" onKeyDown={(event) => search(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar