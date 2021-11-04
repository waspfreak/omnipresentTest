import React, { SyntheticEvent } from "react";
import { ButtonStyle } from './style';

export interface ButtonProps {
  label?: string;
  onClick?: (event: SyntheticEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  ...props
}) => {

  return (
    <div data-testid="button-id">
      <ButtonStyle {...props} >
        {label}
      </ButtonStyle>
    </div>
  );
};