import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { Header } from "../../components/Header";
import { IssueContentContainer, PostInfoContainer, PostInfoHeader, PostInfoMeta } from "./styles";

export function Issue() {
  return (
    <>
      <Header/>
      <PostInfoContainer>
        <PostInfoHeader>
        <a href=""><CaretLeft size={16} weight="regular" />VOLTAR </a>
        <a href="">VER NO GITHUB <ArrowSquareOut size={16} weight="regular" /></a>
        </PostInfoHeader>
        <h1>JavaScript data types and data structures</h1>
        <PostInfoMeta>
          <div>
            <GithubLogo size={16} weight="fill" />
            bedeschi.otavia
          </div>
          <div>
            <CalendarBlank size={16} weight="fill" />
            1 day ago
          </div>
          <div>
            <ChatCircle size={16} weight="fill" />
            5 comments
          </div>
        </PostInfoMeta>
      </PostInfoContainer>
      <IssueContentContainer>
        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
        <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>
      </IssueContentContainer>
    </>
  )
}