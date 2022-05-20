import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0 1rem;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;

  a {
    display: inline-block;
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    padding: 2rem 0.5rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryDark};
    }
  }
`;
