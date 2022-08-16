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
            <Button color="#A62440">Apply Courses</Button>
            <Button bg="#A62440">Talk to Adviser</Button>
          </div>
        </Nav>

        <Flex>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Clarusway is a leading international software Bootcamp. Join a
              micro class online with other trainees and learn coding skills
              with a highly-skilled instructor.
            </p>
            <Button bg="#A62440">Start Your New Carier</Button>
          </div>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Burgundy_ribbon.svg/1200px-Burgundy_ribbon.svg.png"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
