import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input {
  width: 100%;
  display: block;
  background-color: #7640da;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
}

input::placeholder {
  color: #bbb;
}

input:focus {
  outline: none;
}
img {
    border-radius: 50%;
    border: 10px solid #41418f;
    height: 150px;
    width: 150px;
  }
h2 {
  margin-top: 0;
  padding-bottom: 10px;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  max-width: 400px;
}

ul li {
  display: flex;
  align-items: center;
}

ul li strong {
  font-size: 0.9rem;
  margin-left: 0.5rem;
}
`

export default GlobalStyles;