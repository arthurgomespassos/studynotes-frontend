import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0.2rem solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  padding: 0.4rem 0.7rem;
  border-radius: 2rem;
  transition: all 200ms;
  font-family: Roboto Bold;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDarker};
    border: 0.2rem solid ${(props) => props.theme.colors.primaryDarker};
    font-weight: bolder;
  }
`;
