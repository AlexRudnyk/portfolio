import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
`;

export const FormTextarea = styled.textarea`
  height: 4em;
  resize: none;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  padding: 10px;
`;

export const FormBtn = styled.input`
  display: block;
  width: 150px;
  padding: 10px;
  align-self: center;
  cursor: pointer;
  color: white;
  background-color: blue;
  border-radius: 10px;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
