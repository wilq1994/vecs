import React, { Component } from 'react'
import styled from 'styled-components';

import { Link } from "react-router-dom";

import Input from '../ui/Input';
import Button from '../ui/Button';

const Layout = styled.div`
  background: #eee;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.4rem;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 2.8rem;
  margin: 1.4rem;
  max-width: calc(1.4rem * 20);
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h1`
  font-size: 1.777rem;
  font-weight: 500;
  text-align: center;
  line-height: 2.8rem;
  margin: 0;
  margin-bottom: 2.1rem;
`;

const Logo = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 2.1rem;
  margin: 0 auto 2.1rem;
  img {
    display: block;
    margin: 0 auto;
  }
`;

const Copyright = styled.p`
  margin: 0 0 1.4rem;
  text-align: center;
  color: #909090;
`;

export class NewRoom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: ''
    }

    this.changeName = this.changeName.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  changeName(event){
    this.setState({ name: event.target.value });
  }

  createRoom(){
    this.props.history.push('/room');
  }

  render() {
    const { name } = this.state;

    return (
      <Layout>
        <Box>
          <Logo><img src="img/logo.png" alt="Vecs"/></Logo>
          <Heading>Nowy pokój</Heading>
          <Input label="Nazwa:" change={ this.changeName } required/>
          <Button block disabled={ name === '' } onClick={ this.createRoom }>Stwórz</Button>
        </Box>
        <Copyright>Bartosz Wilk © 2018</Copyright>
      </Layout>
    )
  }
}

export default NewRoom; 