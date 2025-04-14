import { styled } from 'styled-components'

export const PostInfoContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  margin-top: -3rem;

  background-color: ${props => props.theme['base_profile']};
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, .2);

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['base_title']};
  }

`
export const PostInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const PostInfoMeta = styled.div`
  display: flex;
  gap: 1.25rem;
  color: ${props => props.theme['base_span']};
  font-size: 0.875rem;
  padding-top:0.5rem;


  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
  }
`
export const IssueContentContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  color: ${props => props.theme['base_text']};
`