import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../ui/Button/Button';
import { Container, Label, Error, SelectStyle } from './style';
import { TextConstants, Country, MarriedStatus } from '../../constants/tests';

import { InputField } from '../../ui/Input/Input';
import { Typography } from '../../ui/Typography/Typography';


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

const Form: React.FC<FormProps> = ({ id }) => {

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
        <Typography size='h2'>New employees Form</Typography>
        <form data-testid='form-id' onSubmit={handleSubmit(onSubmit)}>
          <Label>{TextConstants.COUNTRY_WORK}</Label>
          <SelectStyle {...register('country', { required: true })} >
            <option value=''>{Country.SELECT}</option>
            <option value='Spain'>{Country.SPAIN}</option>
            <option value='Ghana'>{Country.GHANA}</option>
            <option value='Brazil'>{Country.BRAZIL}</option>
          </SelectStyle>
          {errors.country && <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>}

          <Typography size='label'>{TextConstants.FIRST_NAME}</Typography>
          <InputField type='text' data-testid='name-id' {...register('name', { required: true })} />
          {errors.name && <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>}

          <Typography size='label'>{TextConstants.LAST_NAME}</Typography>
          <InputField type='text' data-testid='lastName-id' {...register('lastName', { required: true })} />
          {errors.lastName && <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>}

          <Typography size='label'>{TextConstants.DATE_OF_BIRTH}</Typography>
          <InputField type='datetime' data-testid='data-id' placeholder="DD/MM/YYYY" {...register("dataBirth", { required: true })} />
          {errors.dataBirth && <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>}

          <Typography size='label'>{TextConstants.HOLIDAY_ALLOWANCE}</Typography>
          <InputField
            type='number'
            data-testid='holiday-id'
            {...register('holidayAllowance', { required: true, min: min(), max: max() })}
          />
          {/* Ghana: No laws on holiday allowance */}
          {errors.holidayAllowance &&
            errors.holidayAllowance.type === 'required' && (
              <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>
            )}
          {/* Spain: Minimum holiday allowance is 30 days */}
          {errors.holidayAllowance && errors.holidayAllowance.type === 'min' && (
            <Typography size='error'>{TextConstants.MINIMUM_HOLIDAY_ALLOWANCE}</Typography>
          )}
          {/* Brazil: Maximum holiday allowance is 40 days */}
          {errors.holidayAllowance && errors.holidayAllowance.type === 'max' && (
            <Typography size='error'>{TextConstants.MAXIMUM_HOLIDAY_ALLOWANCE}</Typography>
          )}

          {(CountryWork === 'Spain' || CountryWork === 'Ghana') && (
            <>
              <Typography size='label'>{TextConstants.MARITAL_STATUS}</Typography>
              <SelectStyle {...register('maritalStatus', { required: true })} >
                <option value=''>{TextConstants.SELECT_MARITAL_STATUS} </option>
                <option value='Spain'>{MarriedStatus.SINGLE}</option>
                <option value='Ghana'>{MarriedStatus.MARRIED}</option>
                <option value='Brazil'>{MarriedStatus.SEPARATED}</option>
                <option value='Brazil'>{MarriedStatus.DIVORCED}</option>
              </SelectStyle>
              {errors.maritalStatus && <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>}
            </>
          )}

          {/* Extra Fields SPAIN */}
          {CountryWork === 'Spain' && (
            <>
              <Typography size='label'>{TextConstants.SOCIAL_INSURANCE_NUMBER}</Typography>
              <InputField type='number' data-testid='socialNumber-id' {...register('socialInsuranceNumber', { required: true, maxLength: 10 })} />
              {errors.socialInsuranceNumber && errors.socialInsuranceNumber.type === 'required' && (
                <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>
              )}
              {errors.socialInsuranceNumber && errors.socialInsuranceNumber.type === 'maxLength' && (
                <Typography size='error'>{TextConstants.MAXIMUM_OF_DIGITS} </Typography>
              )}
            </>
          )}

          {/* Extra Fields GHANA */}
          {CountryWork === 'Ghana' && (
            <>
              <Typography size='label'>{TextConstants.NUMBER_OF_CHILDREN}</Typography>
              <InputField type='number' {...register('socialInsuranceNumber', { required: true })} />
              {errors.socialInsuranceNumber && (
                <Typography size='error'>T{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>
              )}
            </>
          )}

          {/* Extra Fields BRAZIL */}
          {CountryWork === 'Brazil' && (
            <>
              <Typography size='label'>{TextConstants.WORKING_HOURS}</Typography>
              <InputField type='number' {...register('socialInsuranceNumber', { required: true })} />
              {errors.socialInsuranceNumber && (
                <Typography size='error'>{TextConstants.THIS_FIELD_IS_REQUIRED}</Typography>
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

