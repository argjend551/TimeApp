import React from "react";
import { useState, useEffect } from "react";
import "../../../public/css/switch.css";
import { Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";


const StyledApp = styled.div`
    input:checked + .slider:before{
    transform: translateX(${props => props.theme.togglePos} );
    // background-color: ${props => props.theme.body};
}

.material-icons{

      transform: translateX(${props => props.theme.togglePos} );
}
`;

export default function Switch(props) {
  let { theme, toggleTheme } = props;
  const isLight = true;

  const handleChange = event => {
    theme === "light" ? toggleTheme('light') : toggleTheme('dark');
  };

  return (
    <StyledApp>


      <Container className="darkmodeSwitch">
        <label className="switch" >

          <input className="input" type="checkbox" checked={isLight} onChange={handleChange}></input>
          <span className="slider">
            <i className="material-icons" selectable={false}>wb_sunny</i>
          </span>
        </label>

      </Container >
    </StyledApp>
  );
};

