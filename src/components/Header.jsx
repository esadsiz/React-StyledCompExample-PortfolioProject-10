import Button from './styles/Button.styled';
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import StyledHeader, { Image, Logo, Nav } from './styles/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Burgundy_ribbon.svg/1200px-Burgundy_ribbon.svg.png"></Logo>
          <div>
            <Button color="#A62440">Apply Button</Button>
            <Button bg="#A62440">Talk Button</Button>
          </div>
        </Nav>

        <Flex>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ad.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus recusandae pariatur praesentium exercitationem temporibus quidem atque officia consectetur cum!
            </p>
            <Button bg="#A62440">Start Button</Button>
          </div>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Burgundy_ribbon.svg/1200px-Burgundy_ribbon.svg.png"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
