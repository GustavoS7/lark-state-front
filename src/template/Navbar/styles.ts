import { styled } from "../../config/stitches.config";
import { BaseButton } from "../../styles/base/BaseButton";

export const Container = styled('header', {
  backgroundColor: '$white',
  borderBottom: '1px solid $black',
  padding: '1rem 8rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Nav = styled('ul', {
  display: 'flex',
  gap: '10rem',
  alignItems: 'center',
  listStyle: 'none',

  '& li > a': {
    textDecoration: 'none',
    fontSize: '20px',
    color: '$yellow',
    padding: '5px 20px',
  },

  '& li > a:hover': {
    borderBottom: '1px solid $yellow'
  }
})

export const Preview = styled('div', {
  color: '$yellow',
  fontWeight: '700',
  fontSize: '2rem',
  textTransform: 'uppercase'
})

export const Action = styled('div', {
  display: 'flex',
  gap: '1rem'
})

export const Button = styled(BaseButton, {
  variants: {
    variant: {
      primary: {
        border: '1px solid $yellow',
        backgroundColor: '$yellow',
        color: '$white'
      },
      secondary: {
        border: '1px solid $yellow',
        color: '$yellow'
      }
    }
  }
})