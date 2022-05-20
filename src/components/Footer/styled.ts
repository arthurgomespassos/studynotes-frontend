import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 1rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 1.2rem;
  span {
    color: ${(props) => props.theme.colors.cancel};
  }
`;
