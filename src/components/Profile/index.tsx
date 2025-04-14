import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import avatarImg from '../../assets/avatar.png'
import { ProfileContainer, ProfileContent, ProfileImage, ProfileInfo } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage>
        <img src={avatarImg} alt="Avatar"/>
      </ProfileImage>
      <ProfileContent>
        <div>
          <h3>Otávia Bedeschi</h3>
          <a href="">GITHUB <ArrowSquareOut size={16} weight="regular" /></a>
        </div>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus debitis inventore non? Voluptas tenetur hic veritatis labore, quam at a ipsa nam consequuntur velit, illo saepe non laboriosam veniam dignissimos!</p>
        <ProfileInfo>
          <div>
            <GithubLogo size={16} weight="fill" />
            bedeschi.otavia
          </div>
          <div>
            <Buildings size={16} weight="fill" />
            ZIP Design
          </div>
          <div>
            <Users size={16} weight="fill" />
            0 followers
          </div>
        </ProfileInfo>
      </ProfileContent>    
    </ProfileContainer>
  )
}