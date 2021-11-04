import React from "react";
import { HeaderStyle } from './style';

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
    <HeaderStyle data-testid="header-id" {...props} >
      {label}
    </HeaderStyle>
  );
};