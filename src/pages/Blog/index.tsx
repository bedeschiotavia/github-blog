import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { BlogContainer } from "./styles";

export function Blog() {
  return (
    <>
      <Header/>
      <Profile/>
      <Search/>
      <BlogContainer>
        <Card/>
        <Card/>
        <Card/>
      </BlogContainer>
    </>
  )
}