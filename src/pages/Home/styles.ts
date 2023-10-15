import { styled } from "../../config/stitches.config";

export const Header = styled('header', {
  backgroundImage: 'url("/assets/object.png")',
  height: 'calc(100vh - 80px)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Container = styled('div', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  gap: '2rem'
})

export const Preview = styled('div', {
  maxWidth: '40%',
})

export const Heading = styled('h1', {
  fontSize: '4rem',
  color: '$white',
  marginBottom: '2rem'
})

export const Text = styled('p', {
  fontSize: '1.5rem',
  color: '$white'
})

export const Search = styled('form', {
  margin: '0 auto'
})

export const Checkbox = styled('div', {
  display: 'flex',
  backgroundColor:'$white',
  borderRadius: '8px 8px 0 0',

  '> label': {
    padding: '10px 30px',
  },

  '> input:checked + label': {
    backgroundColor: '$yellow'
  }
})