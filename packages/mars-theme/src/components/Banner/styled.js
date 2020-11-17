import { styled, css } from 'frontity';
import {
  SIZE_LAPTOP,
} from '../../const/responsive';
import Image from "../image";

export const BannerContainer = styled.div`
    display: block;
    ${({ width }) => css`width: ${width}`};
    ${({ height }) => css`height: ${height}`};
    max-width: 100%;
    overflow: hidden;
    ${props => props.isFixed && css`
        position: fixed;
        top: 60px;
        z-index: 10;
        @media screen and (max-width: ${SIZE_LAPTOP}px) {
            position: relative;
            top: 0px;
            right: 0px;
        }
    `}
`;
export const BannerImg = styled.img`
  display: block;
`;