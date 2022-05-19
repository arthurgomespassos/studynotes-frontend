import styled from 'styled-components';

export const Nav = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0.8rem 1rem;

  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.colors.headerText};
    font-weight: 500;
    &:hover {
      color: ${(props) => props.theme.colors.headerTextHover};
    }
  }
`;
