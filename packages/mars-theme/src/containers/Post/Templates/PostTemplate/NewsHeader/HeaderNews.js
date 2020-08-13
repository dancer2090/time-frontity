import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  GPostDetails,
  Title,
  BigPhoto,
  BigPhotoBlock,
  BigPhotoDescription,
  BigPhotoImage,
} from './styles';
import { formatDatePost } from '../../../../../utils/formatDate';

const HeaderNews = ({
  data, category, state, libraries, image, caption,
}) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const frameUrl = imageUrlCheck(image, urlsWithLocal);

  // data
  const { acf = {} } = data;
  const { title = '' } = acf[lang];

  const date = formatDatePost(lang, data.date);

  return (
    <Wrapper>
      <Title>
        <Html2React html={title} />
      </Title>
      <GPostDetails date={date} category={category} showResources={false} />
      <BigPhotoBlock>
        <BigPhoto>
          <BigPhotoImage src={frameUrl} />
        </BigPhoto>
        <BigPhotoDescription>
          <Html2React html={caption.rendered} />
        </BigPhotoDescription>
      </BigPhotoBlock>
    </Wrapper>
  );
};

export default connect(HeaderNews);
