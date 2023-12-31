import PropTypes from 'prop-types'
//styled components
// import styled from "styled-components";
//make a separate file for stled components
import { Wrapper, Card, Gradient } from "./styled-components/styledComps";
//react-splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//Link from react-router-dom, to view description
import { Link } from 'react-router-dom';


const Veggie = ({ veggie }) => {

  const splideOptions = {
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "1.5rem",
    breakpoints: {
      769: {
        perPage: 2,
      },
    },
  }

  return (
    <div id='veggie'>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={splideOptions}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={`/recipe-details/${recipe.id}`}>
                <Card>
                  <img src={recipe.image} alt={recipe.title} loading="lazy" />
                  <Gradient />
                  <p className='veggie-recipe-card-name'>{recipe.title}</p>
                </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

Veggie.propTypes = {
  veggie: PropTypes.array
}

export default Veggie