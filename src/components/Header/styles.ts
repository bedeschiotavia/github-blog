import { styled } from "styled-components";

export const HeaderContainer = styled.header `
  background-color: ${props => props.theme['base_profile']};
`

export const HeaderContent = styled.div `
  display:flex;
  justify-content: space-between;
  align-items: start;

  img {
    width:40%;
  }

  img:nth-child(2){
    padding-top: 5%;
    width: 15%;
  }

  @media (min-width: 800px) {
    img {
      max-width: 380px;
    }

    img:nth-child(2){
      padding-top: 3%;
      max-width: 148px;
    }
  }

  
`