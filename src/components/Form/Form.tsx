import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../ui/Button/Button';
import { Container, Label, Error, Input, SelectStyle } from './style';
import { TextConstants, Country, MarriedStatus } from '../../constants/tests';

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

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(
      `Country:`, data.country,
      `Name:`, data.name,
      `Last Name:`, data.lastName,
      `Birth Day:`, data.dataBirth,
      `Number of Holidays:`, data.holidayAllowance,
      `Marital Status`, data.maritalStatus,
      `Social Insurance Number`, data.socialInsuranceNumber,
    );
  };

  // watch input value by passing the name of it so we can show custom fields
  const CountryWork: string = watch('country');

  //Max Min for Holidays
  const min: () => number | undefined = () => {
    if (CountryWork === 'Spain') {
      return (30)
    }
  }

  const max: () => number | undefined = () => {
    if (CountryWork === 'Brazil') {
      return (40);
    }
  }

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
          {errors.country && <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}

          <Label>{TextConstants.FIRST_NAME}</Label>
          <Input data-testid='name-id' {...register('name', { required: true })} />
          {errors.name && <Error >{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}

          <Label>{TextConstants.LAST_NAME}</Label>
          <Input data-testid='lastName-id' {...register('lastName', { required: true })} />
          {errors.lastName && <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}

          <Label>{TextConstants.DATE_OF_BIRTH}</Label>
          <Input type="datetime" data-testid='data-id' placeholder="DD/MM/YYYY" {...register("dataBirth", { required: true })} />
          {errors.dataBirth && <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}


          <Label>{TextConstants.HOLIDAY_ALLOWANCE}</Label>
          <Input
            type='number'
            data-testid='holiday-id'
            {...register('holidayAllowance', { required: true, min: min(), max: max() })}
          />
          {/* Ghana: No laws on holiday allowance */}
          {errors.holidayAllowance &&
            errors.holidayAllowance.type === 'required' && (
              <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>
            )}
          {/* Spain: Minimum holiday allowance is 30 days */}
          {errors.holidayAllowance && errors.holidayAllowance.type === 'min' && (
            <Error>{TextConstants.MINIMUM_HOLIDAY_ALLOWANCE}</Error>
          )}
          {/* Brazil: Maximum holiday allowance is 40 days */}
          {errors.holidayAllowance && errors.holidayAllowance.type === 'max' && (
            <Error>{TextConstants.MAXIMUM_HOLIDAY_ALLOWANCE}</Error>
          )}

          {(CountryWork === 'Spain' || CountryWork === 'Ghana') && (
            <>
              <Label>{TextConstants.MARITAL_STATUS}</Label>
              <SelectStyle {...register('maritalStatus', { required: true })} >
                <option value=''>{TextConstants.SELECT_MARITAL_STATUS} </option>
                <option value='Spain'>{MarriedStatus.SINGLE}</option>
                <option value='Ghana'>{MarriedStatus.MARRIED}</option>
                <option value='Brazil'>{MarriedStatus.SEPARATED}</option>
                <option value='Brazil'>{MarriedStatus.DIVORCED}</option>
              </SelectStyle>
              {errors.maritalStatus && <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>}
            </>
          )}


          {/* Extra Fields SPAIN */}
          {CountryWork === 'Spain' && (
            <>
              <Label>{TextConstants.SOCIAL_INSURANCE_NUMBER}</Label>
              <Input type='number' data-testid='socialNumber-id' {...register('socialInsuranceNumber', { required: true, maxLength: 10 })} />
              {errors.socialInsuranceNumber && errors.socialInsuranceNumber.type === 'required' && (
                <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>
              )}
              {errors.socialInsuranceNumber && errors.socialInsuranceNumber.type === 'maxLength' && (
                <Error>{TextConstants.MAXIMUM_OF_DIGITS} </Error>
              )}
            </>
          )}

          {/* Extra Fields GHANA */}
          {CountryWork === 'Ghana' && (
            <>
              <Label>{TextConstants.NUMBER_OF_CHILDREN}</Label>
              <Input type='number' {...register('socialInsuranceNumber', { required: true })} />
              {errors.socialInsuranceNumber && (
                <Error>T{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>
              )}
            </>
          )}

          {/* Extra Fields BRAZIL */}
          {CountryWork === 'Brazil' && (
            <>
              <Label>{TextConstants.WORKING_HOURS}</Label>
              <Input type='number' {...register('socialInsuranceNumber', { required: true })} />
              {errors.socialInsuranceNumber && (
                <Error>{TextConstants.THIS_FIELD_IS_REQUIRED}</Error>
              )}
            </>
          )}

          <Button id='send-id' label={TextConstants.SEND} />
        </form>
      </Container>
    </ >
  );
};

export default Form;

