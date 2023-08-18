import PropTypes from 'prop-types'
//styled components
// import styled from "styled-components";
//make a separate file for stled components
import { Wrapper, Card, Gradient } from "./styled-components/styledComps";
//react-splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';

const Popular = ({ popular }) => {
  const splideOptions = {
    arrows: false,
    pagination: false,
    perPage: 4,
    drag: "free",
    gap: "1.5rem",
    breakpoints: {
      769: {
        perPage: 1,
      },
    },
  }
  return (
    < div id='popular'>
      <Wrapper>
        <h3>Popular Picks</h3>
        {<Splide
          options={splideOptions}
        >
          {
            popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <img src={recipe.image} alt={recipe.title} loading="lazy" />
                    <Gradient />
                    <p className='popular-recipe-card-name'>{recipe.title}</p>
                  </Card>
                </SplideSlide>
              );
            })}
        </Splide>}
      </Wrapper>
    </div>
  );
};

Popular.propTypes = {
  popular: PropTypes.array
}


export default Popular;
