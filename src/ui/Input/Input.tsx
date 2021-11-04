import React, { FC, InputHTMLAttributes, SyntheticEvent } from "react";

import { Input } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  id?: string;
  label?: string;
  type?: string;
  onChange?: (event: SyntheticEvent) => void;
  ref?: any;
}

export const InputField: FC<InputProps> = React.forwardRef((props, ref) => (
  <div data-testid="input-id">
    <Input ref={ref} {...props} />
  </div>
));

