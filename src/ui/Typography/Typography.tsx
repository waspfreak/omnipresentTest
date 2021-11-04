import React, { SyntheticEvent } from "react";
import styled, { css } from 'styled-components';
import { TextField } from "./style";

/**
 * This is just to hint what the string should be
 */
type colorHex = string;
/**
 * Possible options for the typography color
 */
export type ColorEnum = "primaryText" | "secondaryText" | colorHex;

/**
 * TextProps does not include color
 */
export type TextProps = React.PropsWithChildren<{
  size:
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "li"
  | "body"
  | "error"
  | "label"
  | "button"

  /**
   * Optional click handler
   */
  onClick?: (event: SyntheticEvent) => void;

  elementProps?: any;
}>;
/**
 * Typography props has all of text props plus color
 */
export interface TypographyProps extends TextProps {
  color?: ColorEnum;
}
const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  titleLarge: "h5",
  li: "li",
  body: "p",
  label: "label",
  error: "span",
  button: "span",

};

export const Text: React.FC<TextProps> = ({ size, children, ...props }) => {
  return React.createElement(elements[size], props, children);
};

/**
 * Typography component
 */
export const Typography: React.FC<TypographyProps> = ({
  size = "h1",
  elementProps,
  children,
}) => {
  return (
    <TextField>
      <Text size={size}
        {...elementProps}>
        {children}
      </Text >
    </TextField>
  );
};