import styled from 'styled-components';

interface TypographyProps {
  children?: any;
  onClick?: any;
  variant?: 'title' | 'span' | 'p';
  fontWeight?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  fontSize?: string;
  color?: string;
  padding?: string;
  margin?: string;
  textAlign?: 'center' | 'left' | 'right';
  letterSpacing?: string;
  fontFamily?: 'var(--font-primary)' | 'var(--font-secondary)';
  cursor?: 'pointer';
}

export default function Typography(props: TypographyProps) {
  const { variant = 'p' } = props;

  switch (variant) {
    case 'title':
      return <StyledTitle {...props}>{props.children}</StyledTitle>;
    case 'span':
      return <StyledSpan {...props}>{props.children}</StyledSpan>;
    default:
      return <StyledTypography {...props}>{props.children}</StyledTypography>;
  }
}

const StyledTypography = styled.p<TypographyProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '300')};
  text-transform: ${({ textTransform }) => (textTransform ? textTransform : 'none')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.8rem')};
  color: ${({ color }) => (color ? color : 'inherit')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : '0px')};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'var(--font-primary)')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
`;

const StyledTitle = styled('p')<TypographyProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  text-transform: ${({ textTransform }) => (textTransform ? textTransform : 'none')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '3rem')};
  color: ${({ color }) => (color ? color : 'inherit')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : '0px')};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'var(--font-primary)')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
`;

const StyledSpan = styled('span')<TypographyProps>`
  display: inline-block;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  text-transform: ${({ textTransform }) => (textTransform ? textTransform : 'none')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  color: ${({ color }) => (color ? color : 'inherit')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : '0px')};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'var(--font-primary)')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
`;
