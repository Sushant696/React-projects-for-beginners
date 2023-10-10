import styled from "styled-components";

export const StyledKit = styled.div`
  // min-width: 150px;
  // height: 160px;
  // border: 2px solid red;
  // margin: .4rem;
  // padding: 1rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // border-radius:4px;
  // transition: 0.5s;
  // letter-spacing: 1px;
  //  border-radius: 8px;
  width: 101%;
  height: 100%;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: bold;

  @include button(#000,
  "https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png",
  2300%,
  100%,
  none,
  #fff);
  cursor: pointer;
  -webkit-animation: ani2 0.7s steps(22) forwards;
  animation: ani2 0.7s steps(22) forwards;

  &:hover {
   -webkit-animation: ani 0.7s steps(22) forwards;
   animation: ani 0.7s steps(22) forwards;
  }
 }
}
`;

export const Container = styled.div`
  display: flex;
  height:100vh;
  justify-content:center;
  align-items:center;
`;
