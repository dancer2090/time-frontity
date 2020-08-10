import { styled } from 'frontity';
import { SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL } from '../../const/responsive';
import SvgSprite from '../SvgSprite';

export const Wrapper = styled.div`
  width: 100%;
  background: #F8F8F8;
  min-height: 159px;
  transition: all .3s ease-in-out;

  ${({ open }) => (
    open
      ? 'min-height: 193px;'
      : null
  )}

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    min-height: 58px;
  }

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    min-height: 51px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
  }
`;

export const WrapperContainer = styled.div`
  width: 100%;
  position: fixed;
  background: #F8F8F8;
  left: 0;
  top: 0;
  z-index: 1;

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    background-color: white;
  }
`;

export const Container = styled.div`
  max-width: 1023px;
  margin: 0 auto;
  width: 100%;
  padding: 25px 0;

  ${({ resize }) => (
    resize
      ? 'max-width: 1162px; padding: 18px 0;'
      : null
  )};

  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    max-width: 980px;
  }

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    max-width: 100%;
    padding: 14px 16px;
  }
`;

export const TopLayout = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 27px;
  height: 60px;
  transition: all .3s;

  ${({ resize }) => (
    resize
      ? 'height: 0; margin-bottom: 0;'
      : null
  )};

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    margin-bottom: 0;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  max-width: 249px;
  height: auto;

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    max-width: 120px;
  }

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    max-width: 89px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    display: none;
  }
`;

export const ScrollImage = styled.img`
  max-width: 82px;
  display: none;
  margin-right: 36px;

  ${({ resize }) => (
    resize
      ? 'display: block;'
      : null
  )};
`;

export const BottomRelative = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  position: relative;
`;

export const Navigation = styled.nav`
  a, span {
    font-weight: 600;
    cursor: pointer;
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
  position: absolute;
  width: 19px;
  background-color: #F8F8F8;
  transition: all .3s ease-in-out;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  ${({ active }) => (
    active
      ? 'width: 100%;'
      : null
  )};
`;

export const SearchIcon = styled(SvgSprite)`
  width: 19px;
  min-width: 19px;
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
  width: 0;
  overflow: hidden;
  display: flex;
  align-items: center;

  ${({ active }) => (
    active
      ? 'width: 100%;'
      : null
  )};
`;

export const SearchInputBlock = styled.div`
  position: relative;
  width: 100%;
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

export const SearchInput = styled.input`
  width: 100%;
  padding: 0 15px;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SearchCloseIcon = styled(SvgSprite)`
  width: 13px;
  height: 13px;
  fill: #969696;
  cursor: pointer;
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

export const LanguageShow = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background-color: transparent;
  z-index: 2;
  opacity: 0;
  transition: all .3s;

  ${({ show }) => (
    show
      ? 'opacity: 1;'
      : null
  )};
`;

export const LanguageSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #282828;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition: all .3s;

  &:hover {
    color: #000;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderContent = styled.div`
  height: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;

  ${({ show }) => (
    show
      ? 'border-top: 1.5px solid rgba(150, 150, 150, 0.5); height: 34px;'
      : null
  )}
`;

export const Links = styled.div`
  text-align: center;

  a {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    color: #282828;
    text-decoration: none;
    transition: all .3s;
    margin-right: 12px;

    &:hover {
      color: #000;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const BurgerButton = styled.button`
  width: 30px;
  border: none;
  background-color: transparent;
  height: 20px;
  padding: 0;
  display: none;

  &:active,
  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    display: block
  }

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 24px;
    height: 14px;
  }
`;

export const BurgerIcon = styled(SvgSprite)`
  width: 100%;
  height: 100%;
  fill: #0E0F11;
`;

export const MobileSearchIcon = styled(SvgSprite)`
  width: 30px;
  height: 20px;
  display: none;
  fill: #282828;

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    display: block;
  }

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 19px;
    height: 19px;
  }
`;

export const MobileSearch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0 31px 0 18px;
  display: flex;
  align-items: center;
  transform: translateX(-100%);
  transition: all .3s;

  ${({ show }) => (
    show
      ? 'transform: none'
      : null
  )};
`;

export const MobileSearchBlockIcon = styled(SvgSprite)`
  width: 19px;
  height: 19px;
  fill: #969696;
  margin-right: 10px;
`;

export const MobileSearchBlock = styled.div`
  flex-grow: 2;
  position: relative;

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

export const MobileSearchClose = styled(SvgSprite)`
  width: 13px;
  height: 13px;
  fill: #969696;
`;

export const MobileInput = styled.input`
  width: 100%;
  padding: 0 10px;
  border: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;
