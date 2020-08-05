import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Header,
  Title,
  BigPhoto,
  BigPhotoBlock,
  BigPhotoDescription,
  BigPhotoImage,
} from './styles';
import post from '../../../../../img/post.jpg';
import PostDetails from '../PostDetails';

const HeaderNews = ({ state, libraries }) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const postUrl = imageUrlCheck(post, urlsWithLocal);

  return (
    <Wrapper>
      <Header>
        <Title>
          В Хабаровске десятки тысяч человек вышли на
          <br />
          акцию в поддержку Сергея Фургала. Главное
        </Title>
        <PostDetails />
      </Header>
      <BigPhotoBlock>
        <BigPhoto>
          <BigPhotoImage src={postUrl} />
        </BigPhoto>
        <BigPhotoDescription>
          Фото: Пресс-служба
        </BigPhotoDescription>
      </BigPhotoBlock>
    </Wrapper>
  );
};

export default connect(HeaderNews);
