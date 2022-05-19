import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0 1rem;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;

  a:not(.logo) {
    display: inline-block;
    color: ${(props) => props.theme.colors.background};
    font-weight: 500;
    padding: 2rem 0.5rem;
    &:hover {
      color: ${(props) => props.theme.colors.headerTextHover};
      background-color: #124dc0;
    }
  }
`;
