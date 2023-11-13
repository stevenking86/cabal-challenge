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
  const [successMessage, setSuccessMessage] = useState("")
  const [failMessage, setFailMessage] = useState("")

  const handleOnChange = (e) => {
        setCsv(e.target.files[0])
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(csv) {
          console.log(props.importPath)

          const requestData = {
            csv: csv
          };

          const apiUrl = 'http://localhost:3000/import';
          debugger
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          };

          fetch(apiUrl, options)
            .then(response => {
              // Check if the request was successful (status code 2xx)
              if (response.ok) {
                return response.json(); // Parse the JSON in the response
                setSuccessMessage('Success!')
              } else {
                setFailMessage('Upload Failed')
              }
            })
            .then(data => {
              // Handle the data from the response
              console.log('Response data:', data);
            })
            .catch(error => {
              // Handle any errors that occurred during the fetch
              console.error('Fetch error:', error);
            });
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
