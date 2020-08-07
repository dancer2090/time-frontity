import { styled } from 'frontity';
import SvgSprite from "../../SvgSprite";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  padding: 0 20px;
`;

export const Label = styled.span`
  font-weight: 600;
  display: block;
  font-size: 12px;
  line-height: 138.4%;
  text-align: left;
  color: #000000;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  max-height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const FormWrapper = styled.div`
  padding-top: 10px;
  border-top: 1px solid #969696;
  margin-top: 3px;
`;

export const CommentsInput = styled.div`
  margin-top: 9px;
  position: relative;
`;

export const SendButton = styled(SvgSprite)`
  width: 25px;
  height: 23px;
  position: absolute;
  right: 7px;
  bottom: 13px;
  fill: #666;
`;
