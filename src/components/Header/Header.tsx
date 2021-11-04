import React from "react";
import { HeaderStyle } from './style';
import { Typography } from '../../ui/Typography/Typography'
export interface HeaderProps {
  label?: string;
  id?: string;
}

export const Header: React.FC<HeaderProps> = ({
  label,
  id,
  ...props
}) => {

  return (
    <HeaderStyle data-testid='header-id' {...props} >
      <Typography size='h1'> {label} </Typography>
    </HeaderStyle>
  );
};