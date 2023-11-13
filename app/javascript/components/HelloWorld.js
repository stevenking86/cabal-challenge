import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const HelloWorld = (props) => {
  return (
    <Title>
      Greeting: {props.greeting}
    </Title>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
