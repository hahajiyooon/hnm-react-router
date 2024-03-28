import React from 'react'
import { Link } from 'react-router-dom'
import {Form, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


//type="submit"이면 onClick이아닌 onSubmit으로 이벤트 줘야함
//Form 쓰면 preventDefault이거 쓰기. 왜? 새로고침 막으려고
const Login = ({setAuthenticate}) => {
  const navi = useNavigate()

  //로그인버튼 클릭시 새로고침 구동x
  const loginUser = (event) => {
    event.preventDefault()
    //console.log("login user function issue")
    setAuthenticate(true)
    navi("/")
  }


  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-2" >
          <Form.Control type="text" placeholder="ID" />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Login