import { styled } from 'frontity';
import SvgSprite from '../../SvgSprite';
import SubscribeNews from '../../SubscribeNews';
import { SIZE_DESCTOP_SMALL, SIZE_LAPTOP, SIZE_LAPTOP_SMALL } from '../../../const/responsive';

export const MobileMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
  overflow: auto;
  transition: all .3s ease-in-out;

  ${({ isOpen }) => (
    isOpen
      ? 'z-index: 20; opacity: 1;'
      : null
  )}
`;

export const Overflow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(0, 0, 0, 0.7);
`;

export const MenuWrapper = styled.div`
  max-width: 288px;
  width: 100%;
  transform: translateX(-100%);
  transition: all .3s ease-in-out;
  
  ${({ isOpen }) => (
    isOpen
      ? 'transition-duration: .3s; transform: none;'
      : null
  )}
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  padding: 0 19px 0 17px;
  min-height: 51px;
`;

export const MenuClose = styled(SvgSprite)`
  width: 13px;
  height: 13px;
  fill: #969696;
`;

export const MenuBody = styled.div`
  background: #F2F2F2;
`;

export const MobileLanguage = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #282828;

  &:active,
  &:focus {
    outline: none;
  }
`;

export const Navigation = styled.div`
  padding: 10px 18px 20px 18px;
`;

export const NavigationItem = styled.div`
  margin-bottom: 22px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    margin-bottom: 0;
  }

  a, span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: #000000;
    display: block;
    flex-grow: 2;
  }
`;

export const IconArrow = styled(SvgSprite)`
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

export const NavigationSubContent = styled.div`
  padding-left: 33px;
  width: 100%;
  height: ${({ height }) => height}px;
  overflow: hidden;
  transition: all .3s ease-in-out;
`;

export const NavigationContent = styled.div`
  padding: 22px 0;

  a {
    display: block;
    margin-bottom: 22px;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #000000;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const MobileFooter = styled.div`
  border-top: 1px solid #969696;
  padding: 15px 15px 40px 33px; 
`;

export const SocialListBlock = styled.div`
  display: flex;
`;

export const SubcribeBlock = styled.div`
  display: flex;
  margin-bottom: 23px;
`;

export const GSubscribe = styled(SubscribeNews)`
  svg {
    width: 17px;
    height: 14px;
    margin-right: 6px;
    fill: #666666;
  }

  span {
    font-size: 12px;
    line-height: 27px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #666666;
  }
`;

export const DownloadPdf = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  text-decoration: none;
`;

export const DownloadPdfIcon = styled(SvgSprite)`
  width: 17px;
  height: 24px;
  fill: #666666;
  margin-right: 8px;
`;

export const DownloadPdfLabel = styled.span`
  font-size: 12px;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #666666;
`;
