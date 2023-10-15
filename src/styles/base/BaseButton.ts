import { styled } from "@stitches/react";

export const BaseButton = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  borderRadius: '8px',
  
  variants: {
    size: {
      sm: {
        fontSize: '13px',
        padding: '0 10px',
        height: '25px',
      },
      md: {
        fontSize: '17px',
        padding: '0 20px',
        height: '35px',
      },
      lg: {
        fontSize: '20px',
        padding: '0 30px',
        height: '45px',
      },
    }
  }
})