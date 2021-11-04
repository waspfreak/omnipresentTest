import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../ui/Button/Button';
import { Container, Label, Error, Input, SelectStyle } from './style';
import { TextConstants, Country } from '../../constants/tests';

export interface FormProps {
  id?: string;
}

type Inputs = {
  country: string
  exampleRequired: string,
  name: string,
  lastName: string,
  dataBirth: any,
  holidayAllowance: number,
  maritalStatus: string,
  socialInsuranceNumber: number;
};

export const Form: React.FC<FormProps> = ({ id }) => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <>
      <Container>
        <form data-testid='form-id' onSubmit={handleSubmit(onSubmit)}>
          <Label>{TextConstants.COUNTRY_WORK}</Label>
          <SelectStyle {...register('country', { required: true })} >
            <option value=''>{Country.SELECT}</option>
            <option value='Spain'>{Country.SPAIN}</option>
            <option value='Ghana'>{Country.GHANA}</option>
            <option value='Brazil'>{Country.BRAZIL}</option>
          </SelectStyle>

          <Label>{TextConstants.FIRST_NAME}</Label>
          <Input {...register('name', { required: true })} />
          {errors.name && <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}

          <Label>{TextConstants.LAST_NAME}</Label>
          <Input {...register('lastName', { required: true })} />
          {errors.lastName && <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}

          <Label>{TextConstants.DATE_OF_BIRTH}</Label>
          <Input type="datetime" placeholder="DD/MM/YYYY" {...register("dataBirth", { required: true })} />
          {errors.dataBirth && <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}
          <Button label={TextConstants.SEND} />
        </form>
      </Container>
    </ >
  );
};

export default Form;

