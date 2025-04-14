import { SearchContainer, SearchForm } from "./styles";

export function Search() {
  return (
      <SearchContainer>
        <div>
          <h3>Posts</h3>
          <span>
            6 posts
          </span>
        </div>
        <SearchForm>
          <input type="text" placeholder="Search post"/>
        </SearchForm>
      </SearchContainer>
  )
}