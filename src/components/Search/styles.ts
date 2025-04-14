import { styled } from 'styled-components'

export const SearchContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding-top: 3rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme['base_span']};
  }
`
export const SearchForm = styled.form`
  input {
    width: 100%;
    background: ${props => props.theme['base_input']};
    padding: 1rem;
    border: solid 1px ${props => props.theme['base_border']};
    border-radius: 0.5rem;
    margin-top: 1rem;

    &::placeholder {
      color: ${props => props.theme['base_label']};
    }
  }
`