import endImage from "../../assets/background-e.svg";
import startImage from "../../assets/background-s.svg";
import logoImage from "../../assets/logo-github-blog.svg";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={startImage} alt="" />
        <img src={logoImage} alt="" />
        <img src={endImage} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}