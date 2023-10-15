import { Container, Nav, Preview, Action, Button} from "./styles";

export default function Navbar () {
  return (
    <Container>
      <Preview>
        Lark State
      </Preview>
      <Nav>
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Rent</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </Nav>
      <Action>
        <Button href="/#" variant='secondary' size='lg'>
          Log in
        </Button>
        <Button href="/#" variant='primary' size='lg'>
          Sign up
        </Button>
      </Action>
    </Container>
  )
}