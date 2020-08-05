import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  LeftContent,
  Name,
  Quote,
  LeftBottomContent,
  Details,
  TextDescription,
  RightContent,
  FrameBlock,
  Image,
  ImageDescription,
} from './styles';
import img from '../../../../../img/girls-image.jpg';

const InterviewHeader = ({ state, libraries }) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(img, urlsWithLocal);

  return (
    <Wrapper>
      <LeftContent>
        <Name>
          Наталья Фролова:
        </Name>
        <Quote>
          “Музиканти не можуть бути повністю поза
          політикою, адже ми впливаємо на мільйони сердець і голів ”
        </Quote>
        <LeftBottomContent>
          <Details showResources={false} showShared={false} />
          <TextDescription>
            Сооснователь «Белой скалы», зоолог Марина Шквыря рассказала УНИАН,
            почему приют переезжает и как это связано с коронавирусом,
            почему необходимо пресечь торговлю экзотами и чем приют лучше частных рук.
          </TextDescription>
        </LeftBottomContent>
      </LeftContent>
      <RightContent>
        <FrameBlock>
          <Image src={urlImage} />
        </FrameBlock>
        <ImageDescription>
          Фото: Пресс-служба
        </ImageDescription>
      </RightContent>
    </Wrapper>
  );
};

export default connect(InterviewHeader);
