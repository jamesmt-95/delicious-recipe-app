import styled from "styled-components";


const Wrapper = styled.section`
  margin: 2.5rem 0rem;
  padding: 0 1rem;
  h3{
  padding-bottom: 0.3rem;
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

export { Wrapper, Card, Gradient }