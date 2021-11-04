import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
//import { Button } from '../../ui/Button/Button';
import { Container } from './style';


export interface FormProps {
  id?: string;
}

export const Form: React.FC<FormProps> = ({ id }) => {


  return (
    <>
      <Container>
        Form here
      </Container>
    </ >
  );
};

export default Form;

