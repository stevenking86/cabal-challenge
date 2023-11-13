import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Button = styled.button`
`

const ImportPage = (props) => {
    const [csv, setCsv] = useState("");
  const handleOnChange = (e) => {
        setCsv(e.target.files[0])
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(csv) {
          console.log(props.importPath)
        }
    };


  return (
    <div>
      <Title>
        Import
      </Title>

      <form>
        <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
        ></input>
          <Button
              onClick={(e) => {
                  handleOnSubmit(e);
              }}
          >
            IMPORT CSV
          </Button>
      </form>
    </div>
  )
}

ImportPage.propTypes = {
  // greeting: PropTypes.string
  importPath: PropTypes.string
};

export default ImportPage
