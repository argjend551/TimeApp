import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
  bg_brightness: '100%',
  togglePos: '0px'
};

export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
  bg_brightness: '70%',
  togglePos: '26px'
};

export const GlobalStyles = createGlobalStyle`

body{
  background-color: ${(props) => props.theme.body}
}

.cityBackgroundImg {
    color: #fff;
    filter:brightness(${(props) => props.theme.bg_brightness});
}

`;