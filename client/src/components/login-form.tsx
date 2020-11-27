import React, { Component } from 'react';
import styled from '@emotion/styled';
import { colors, unit } from '../styles';
import * as LoginTypes from '../pages/__generated__/login';

interface LoginFormProps {
  login: (a: { variables: LoginTypes.loginVariables }) => void
  error?: Error
}

interface LoginFormState {
  email: string;
  password: string;
  [key: string]: string;
} 

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {

  state = { 
    email: '',
    password: '' 
  };
  
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value:string = (event.target as HTMLInputElement).value;
    const name:string = (event.target as HTMLInputElement).name;
 
    this.setState({
      [name]: value
    }, () => {
      //console.log(this.state)
    });
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.login({ variables: { 
      email: this.state.email,
      password: this.state.password
    }});
  };

  render() {
   const { error } = this.props;
   const { message } = this.props.error! || '';

    return (
      <Container>
        <Heading>Log in</Heading>
        <StyledForm onSubmit={ (e:any) => this.onSubmit(e) }>
          <StyledInput
            required
            type="email"
            name="email"
            placeholder="Email"
            data-testid="login-input"
            onChange={ (e:any) => this.onChange(e) }
          />
          <StyledInput
            required
            type="password"
            name="password"
            placeholder="Password"
            data-testid="login-input"
            onChange={ (e:any) => this.onChange(e) }
          />
          <button type="submit">Log in</button>
          { error 
            ? <StyledError>{ message }</StyledError>
            : null
          }
        </StyledForm>
      </Container>
    );
  }
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')`
  align-items: center;
  background-color: ${colors.primary};
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  padding-bottom: ${unit * 6};
`;

const Heading = styled('h1')`
  margin: ${unit * 3}px 0 ${unit * 6}px;
`

const StyledForm = styled('form')`
  background-color: white;
  border-radius: 3px;
  box-shadow: 6px 6px 1px rgba(0, 0, 0, 0.25);
  color: ${colors.text};
  max-width: 40rem;
  padding: 3rem;
  width: 100%;
`

const StyledInput = styled('input')`
  :focus: { borderColor: colors.primary }
  border: 1px solid ${colors.grey};
  font-size: 1.6rem;
  margin-bottom: 3rem;
  outline: none;
  padding: ${unit * 0.125}rem ${unit * 0.25}rem;
  width: 100%;
`

const StyledError = styled('div')`
  color: darkred;
  display: block;
  font-size: 1.4rem;
  margin: 1rem 0 0;
`