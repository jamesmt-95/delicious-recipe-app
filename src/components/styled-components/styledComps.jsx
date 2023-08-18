import styled from "styled-components";

//Components for Popular.jsx & Veggie.jsx

const Wrapper = styled.section`
  margin: 1.5rem 0rem;
  padding: 0 1rem;
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    margin: 1rem 0rem 0.4rem 0rem;
  }
`;

const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  position: relative; /* to make p absolute */

  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    width: 100%;
    color: white;
    text-align: center;
    z-index: 1;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

//Components for Category.jsx

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0rem;
  padding: 0.2rem;
  //List is to wrap the icons, and following a to style each
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    transition: 0.2s all;
    &.active {
      background: linear-gradient(to right, #f27121, #e94057);
      box-shadow: 0 3px 10px 0px rgba(0, 0, 0.5, 0.5);
    }
    &:hover {
      box-shadow: 0 0 10px 0px rgba(0, 0, 0.5, 0.8);
    }
    @media screen and (min-width: 768px) {
      margin: 0 0.7rem;
    }
    h4 {
      color: #ffffff;
      font-size: 0.8rem;
    }
    svg {
      color: #ffffff;
      font-size: 1.5rem;
      margin-bottom: 0.3rem;
    }
  }
`;

//Components for Cuisine.jsx

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
  padding: 2rem;
`;

const GridCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

//Components for Search.jsx

const FormStyle = styled.form`
  margin-top: 1.5rem;
  div {
    position: relative;
    width: 70%;
    text-align: center;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 40%;
    }
    input {
      width: 100%;
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1.2rem;
      color: white;
      padding: 0.6rem 3rem;
      border-radius: 1rem;
      outline: none;
    }
    svg.search-icon {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: #ffffff;
    }
    svg.close {
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translate(-3%, -50%);
      color: #ffffff;
      cursor: pointer;
      transition: 0.3s all;
    }
  }
`;

export { Wrapper, Card, Gradient };
export { List };
export { Grid, GridCard };
export { FormStyle };
