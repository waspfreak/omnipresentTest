import styled from 'styled-components';
  
export const Container = styled.div`
  width: 80%;
  min-height: 360px;
  margin-top: 2em;
`;

export const Input = styled.input`
  color: gray;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid gray;
  padding: 0.5em;
  width: 100%;
`;

export const Label = styled.label`
  justify-self: flex-start;
  display: flex;
  font-size: 1.2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const Error = styled.span`
  font-size: 1em;
  color: #e91e63;
  display: flex;
  justify-self: flex-start;
`;

export const SelectStyle = styled.select`
  background-color: transparent;
  padding: 0.5em;
  margin: 0;
  width: 100%;
  font-size: 1.2em;
  line-height: inherit;
  border-radius: 4px;
`;
