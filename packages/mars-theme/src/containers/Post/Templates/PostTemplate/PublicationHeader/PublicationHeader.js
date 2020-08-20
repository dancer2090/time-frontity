import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  BigFrame,
  BigFrameBlock,
  BigFrameImage,
  BigFrameDescription,
  PostInformation,
  TitlePost,
  Quote,
} from './styles';
import publication from '../../../../../img/publication.jpg';
import PostDetails from '../../../../../components/PostDetails';

const PublicationHeader = ({ state, libraries }) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(publication, urlsWithLocal);

  return (
    <Wrapper>
      <BigFrame>
        <BigFrameBlock>
          <BigFrameImage src={urlImage} />
        </BigFrameBlock>
        <BigFrameDescription>
          Фото: Пресс-служба
        </BigFrameDescription>
      </BigFrame>
      <PostInformation>
        <TitlePost>
          Домашняя солнечная электростанция:
          воплощение украинской мечты или деньги на ветер
        </TitlePost>
        <PostDetails showResources={false} showShared={false} />
        <Quote>
          Сооснователь «Белой скалы», зоолог Марина Шквыря рассказала
          УНИАН, почему приют переезжает и как это связано с коронавирусом,
          почему необходимо пресечь торговлю экзотами и чем приют лучше частных рук.
        </Quote>
      </PostInformation>
    </Wrapper>
  );
};

export default connect(PublicationHeader);
