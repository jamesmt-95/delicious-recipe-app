import PropTypes from 'prop-types'
//styled components
// import styled from "styled-components";
//make a separate file for stled components
import { Wrapper, Card, Gradient } from "./styled-comps/styledComps";
//react-splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


const Veggie = ({veggie}) => {

  return (
    <>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 4,
            type: "loop",
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1.5rem",
            breakpoints: {
              767: {
                perPage: 2,
              },
            },
          }}
        >
          {veggie.map((recipe) => {
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
  )
}

Veggie.propTypes = {
  veggie: PropTypes.array
}

export default Veggie