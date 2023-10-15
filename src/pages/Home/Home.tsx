import { Header, Container, Preview, Heading, Text, Search, Checkbox } from './styles'

export default function Home () {
  return (
    <Header>
      <Container>
        <Preview>
          <Heading>
            Buy, Rent or Sell your property easily
          </Heading>
          <Text>
            A great platform to buy, sell or even rent your 
            properties without any commisions.
          </Text>
        </Preview>
        <Search>
          <Checkbox>
            <label htmlFor="buy">Buy</label>
            <input type="radio" name='lookingFor' id='buy' hidden />
            <label htmlFor="rent">Rent</label>
            <input type="radio" name='lookingFor' id='rent' hidden />
          </Checkbox>
        </Search>
      </Container>
    </Header>
  )
}