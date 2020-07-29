import { styled } from 'frontity';

export const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 157px;

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  @media screen and (max-width: 991px) {
    padding-top: 155px;
    padding-bottom: 135px;
  }

  @media screen and (max-width: 767px) {
    padding: 40px 10px 100px 10px;
  }
`;

export const TitleError = styled.h2`
  margin-top: 0;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(#F8710F 0%, #FFB03A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 64px;
`;

export const Frame = styled.img`
  width: 449px;
  height: 259px;
  margin: 0 auto 62px auto;

  @media screen and (max-width: 576px) {
    max-width: 449px;
    width: 100%;
    height: auto;
  }
`;

export const Description = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #222222;

  span {
    font-family: 'Open Sans';
    display: block;
    margin-bottom: 10px;
  }

  a {
    color: #FF9434;
    transition: all .3s;
    &:hover {
      color: #d87216;
    }
  }

  @media screen and (max-width: 576px) {
    font-size: 16px;

    span {
      margin-bottom: 19px;

      &:last-of-type {
        max-width: 218px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;
