import { styled } from 'frontity';
import SvgSprite from '../../SvgSprite';

export const MobileMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const MenuWrapper = styled.div`
  max-width: 288px;
  width: 100%;
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

export const MobileLanguage = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #282828;
`;

export const Navigation = styled.div`
  padding: 10px 18px 20px 18px;
`;

export const NavigationItem = styled.div`
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: #000000;
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

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MobileFooter = styled.div`
  border-top: 1px solid #969696;
  padding: 15px 15px 40px 15px; 
`;

export const SocialListBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const DownloadPdf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
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
