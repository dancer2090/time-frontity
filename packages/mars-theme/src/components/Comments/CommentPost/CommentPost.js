import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  DateValue,
  NameAuthor,
  Content,
  ButtonBlock,
  Button,
} from './styles';
import { formatDatePost } from '../../../utils/formatDate';

const CommentPost = ({ state, libraries, data }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const contentRef = useRef(null);
  const { lang = 'ru' } = state.theme;
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
  const {
    author_name: name = '',
    content = '',
    date = '',
  } = data;
  const dateValue = formatDatePost(lang, date);
  return (
    <Wrapper>
      <DateValue>
        { dateValue }
      </DateValue>
      <NameAuthor>
        { name }
      </NameAuthor>
      <Content ref={contentRef} style={{ height: heightValue }}>
        <Html2React html={content.rendered} />
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

export default connect(CommentPost);
