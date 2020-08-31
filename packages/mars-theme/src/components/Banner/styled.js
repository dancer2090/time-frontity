import { styled, css } from 'frontity';

export const BannerContainer = styled.div`
  display: block;
  ${({ width }) => css`width: ${width}`};
  ${({ height }) => css`height: ${height}`};
  max-width: 100%;
  overflow: hidden;
`;
export const BannerImg = styled.img`
  display: block;
`;