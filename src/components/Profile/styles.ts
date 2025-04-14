import { styled } from 'styled-components'

export const ProfileContainer = styled.div `
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  margin-top: -3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme['base_profile']};
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, .2);
`
export const ProfileImage = styled.div`
  max-width: 148px;
  border-radius: 0.5rem;
  margin-right: 2rem;
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const ProfileInfo = styled.div `
  display: flex;
  justify-content:start !important;
  gap: 1rem;
  div {
    display:flex;
    align-items: center;
    gap: 0.5rem;
  }
`