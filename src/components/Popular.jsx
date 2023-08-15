import PropTypes from 'prop-types'
//styled components
// import styled from "styled-components";
//make a separate file for stled components
import { Wrapper, Card, Gradient } from "./styled-comps/styledComps";
//react-splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


const Popular = ({popular}) => {
  

  return (
    <>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            type: "loop",
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1.5rem",
            breakpoints: {
              767: {
                perPage: 1,
              },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} loading="lazy" />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
};

Popular.propTypes = {
  popular: PropTypes.array
}


export default Popular;
