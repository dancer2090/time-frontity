import React, { useState, useRef, useEffect } from 'react';
import {
  Wrapper,
  DateValue,
  NameAuthor,
  Content,
  ButtonBlock,
  Button,
} from './styles';

const CommentPost = () => {
  const contentRef = useRef(null);
  const [heightValue, setHeightValue] = useState('fit-content');
  const [showCollapseButton, setShowCollapseButton] = useState(false);

  useEffect(() => {
    if (contentRef.current.scrollHeight >= 82) {
      setShowCollapseButton(true);
      setHeightValue(`${contentRef.current.offsetHeight}px`);
    }
  }, []);

  const changeSizeComments = () => {
    setShowCollapseButton(false);
    contentRef.current.style.maxHeight = 'initial';

    setHeightValue(`${contentRef.current.scrollHeight}px`);
  };

  return (
    <Wrapper>
      <DateValue>
        10 сентября 2020 | 12:33
      </DateValue>
      <NameAuthor>Андрей</NameAuthor>
      <Content ref={contentRef} style={{ height: heightValue }}>
        В Хабаровске десятки тысяч человек вышли на
        акцию в поддержку Сергея Фургала десятки человек в десятки
        В Хабаровске десятки тысяч человек вышли на
        акцию в поддержку Сергея Фургала десятки человек в десятки
        В Хабаровске десятки тысяч человек вышли на
        акцию в поддержку Сергея Фургала десятки человек в десятки
        {
          showCollapseButton && (
            <ButtonBlock>
              <Button onClick={changeSizeComments} name="triangle" />
            </ButtonBlock>
          )
        }
      </Content>
    </Wrapper>
  );
};

export default CommentPost;
