import React, { SyntheticEvent } from "react";
import { ButtonStyle } from './style';

export interface ButtonProps {
  label?: string;
  id?: string;
  onClick?: (event: SyntheticEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  id,
  ...props
}) => {

  return (
    <div data-testid="button-id">
      <ButtonStyle id={id} {...props} >
        {label}
      </ButtonStyle>
    </div>
  );
};