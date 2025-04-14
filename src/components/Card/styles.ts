import { styled } from 'styled-components'

export const CardContainer = styled.div`
  width:416px;
  height: 260px;
  padding: 2rem;

  background-color: ${props => props.theme['base_post']};
  border-radius: 0.5rem;

  div {
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  span {
    width:20%;
    font-size: 0.75rem;
    color: ${props => props.theme['base_span']};
  }
`