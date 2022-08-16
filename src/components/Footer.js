import SocialIcons from './SocialIcons';
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import StyledFooter from './styles/Footer.styled';
import { Logo } from './styles/Header.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Logo src="https://seeklogo.com/images/P/purple-logo-D91C4B8226-seeklogo.com.png" alt="" />
        </Flex>

        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li> +1 (534) 332 66 11</li>
            <li>mail@mail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  );
}
