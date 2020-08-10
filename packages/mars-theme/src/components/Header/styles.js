import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';

export const Wrapper = styled.div`
  width: 100%;
  background: #F8F8F8;
`;

export const Container = styled.div`
  max-width: 1023px;
  margin: 0 auto;
  width: 100%;
  padding: 25px 0;
`;

export const TopLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 27px;
`;

export const Logo = styled.img`
  max-width: 249px;
  height: auto;
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Navigation = styled.nav`
  a {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #282828;
    margin-right: 16px;
    text-decoration: none;
    transition: all .3s;

    &:hover {
      color: #000;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(SvgSprite)`
  width: 19px;
  height: 19px;
  fill: #282828;
  cursor: pointer;

  ${({ active }) => (
    active
      ? 'fill: #969696;'
      : null
  )};
`;

export const SearchWrapper = styled.div`
  display: none;
  align-items: center;
`;

export const SearchInputBlock = styled.div`
  position: relative;
  margin-left: 13px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 12px;
    width: 1px;
    background-color: #969696;
  }
`;

export const SearchCloseIcon = styled(SvgSprite)`
  width: 13px;
  height: 13px;
  fill: #969696;
`;

export const Language = styled.div`
  margin-left: 21px;
  position: relative;
`;

export const LanguageValueBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LanguageValue = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #282828;
  margin-right: 3px;
`;

export const LanguageIcon = styled(SvgSprite)`
  width: 9px;
  height: 9px;
  fill: #282828;
  transition: all .3s;

  ${({ active }) => (
    active
      ? 'transform: rotate(180deg);'
      : null
  )};
`;
