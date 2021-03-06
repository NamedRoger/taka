
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { useHistory } from 'react-router-dom';

import BgImage from "../../assets/img/illustrations/signin.svg";

import useUser from '../../hooks/useUser';

export default (props) => {
  const initLogin = {
    username:'',
    password:''
  }

  const {login,isLogged,error} = useUser();
  const history = useHistory();

  useEffect(() => {
    if(isLogged) history.push('/');
    if(!error.success) alert(error.error);
  },[isLogged,history,error]);


  const [ModelLogin,setLogin] = useState(initLogin);
  const onSubmit = async (e) => {
    e.preventDefault();
    await login(ModelLogin);
  }

  const setInput = (e) => {
    const key = e.target.name;
    setLogin({
      ...ModelLogin,
      [key]:e.target.value
    });
  }
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Inicia Sesión {isLogged ?'si':'no'}</h3>
                </div>
                <Form className="mt-4" onSubmit={onSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus 
                      onChange={setInput} 
                      value={ModelLogin.username}
                      name="username" 
                      required 
                      type="email" 
                      placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control 
                        required 
                        onChange={setInput} 
                        value={ModelLogin.password} 
                        name="password" 
                        type="password" 
                        placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
