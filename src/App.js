import React, { Component } from 'react';
import './App.css';
import FormSubmit from './components/FormSubmit/FormSubmit';
import {Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Registration Form</Typography>
        <FormSubmit onSubmit={onFormSubmit} validateCpf={validateCpf} validateName={validateName} />
      </Container>
    );
  }
}

function onFormSubmit(data) {
  console.log(data);
}

// VALIDATE
function validateCpf(cpf){
  if(cpf.length !== 11){
    return {valid: false, text: "CPF must have 11 numbers"};
  } else {
    return {valid: true, text: ""};
  }
}

function validateName(name){
  if(name.length < 2){
    return {valid: false, text: "2 characters minimum"};
  } else {
    return {valid: true, text: ""};
  }
}

export default App;