import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 2rem;
  font-size: 4rem;
  font-weight: bolder;
  height: fit-content;
  text-align: center;
  width: fit-content;
  margin: auto;
  border-radius: 2rem;

  p {
    margin: 0 auto;
    max-width: 300px;
  }
`;
