import { styled } from 'frontity';
import { SIZE_LAPTOP_SMALL } from '../../../../const/responsive';

export const Wrapper = styled.div`
  padding: 24px 0;
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
    
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px 0 17px;
    margin-bottom: 22px;
    
    & > div + div {
      display: none;
    }
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Information = styled.div`
  flex-grow: 2;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    padding: 0 17px;
    margin-bottom: 50px;
  }
`;

export const InformationRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

export const InformationName = styled.strong`
  font-weight: 600;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  display: inline-block;
  min-width: 61px;
  margin-right: 29px;
`;

export const InformationValue = styled.span`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
`;

export const InformationLink = styled.a`
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  text-decoration: none;
`;

export const DepartmentAdvertising = styled.div`
  margin-top: 37px;
`;

export const InformationTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 8px;
`;

export const FormSubmit = styled.form`
  width: 358px;
  min-width: 358px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 9px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    text-align: left;
    padding: 0 17px;
    margin-bottom: 12px;
  }
`;

export const FormInput = styled.div`
  width: 100%;
  margin-bottom: 9px;
`;

export const FormButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    padding: 0 17px;
    justify-content: flex-start;
  }
`;

export const FormButton = styled.button`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #666666;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  &:active, &:focus {
    outline: none;
  }
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Message = styled.div`
  margin: 10px 0;
  color: green;
  font-weight: bold;
  font-size: 14px;
`;
