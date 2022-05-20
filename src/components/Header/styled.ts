import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 1rem;
  overflow: hidden;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li.last {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
    }
  }

  a:not(.button) {
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    font-family: Roboto Bold;
    padding: 2rem 0.5rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryDark};
    }
  }
`;
