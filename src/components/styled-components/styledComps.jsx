import styled from "styled-components";

//Components for Popular.jsx & Veggie.jsx

const Wrapper = styled.section`
  margin: 2.5rem 0rem;
  padding: 0 1rem;
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
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
  padding: 1rem;
  margin: 2rem 0rem;
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

export { Wrapper, Card, Gradient };
export { List };
export { Grid, GridCard };
