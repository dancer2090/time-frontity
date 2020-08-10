import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  BigPhotoBlock,
  BigPhoto,
  BigPhotoImage,
  BigPhotoDescription,
  ContentContainer,
  CenterContent,
  Content,
  RightNavigation,
} from './styles';
import RelatedNewsCard from './RelatedNewsCard/RelatedNewsCard';
import post from '../../../../img/post.jpg';

const PostTemplate = ({ state, libraries }) => {
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const postUrl = imageUrlCheck(post, urlsWithLocal);

  return (
    <Wrapper>
      <Container>
        <BigPhotoBlock>
          <BigPhoto>
            <BigPhotoImage src={postUrl} />
          </BigPhoto>
          <BigPhotoDescription>
            Фото: Пресс-служба
          </BigPhotoDescription>
        </BigPhotoBlock>

        <ContentContainer>
          <CenterContent>
            <Content>
              <p>
                В Хабаровске десятки тысяч человек вышли на акцию в поддержку
                Сергея Фургала. Главное. В цьому випадку точно не зможу сказати,
                бо не була там. Але масову загибель риби можуть викликати кілька
                причин. По-перше, цвітіння  водоростей, переважно синьо-зелених,
                які наче плівкою вкривають водойми, створюючи дефіцит кисню. Через це
                риба змінює свою поведінку і може задихатися, адже вона дихає
                озчиненим у воді киснем. Цвітіння водоростей поширене в водоймах
                зі стоячою водою. Вони
                <strong> активно розмножуються та гинуть</strong>
                у спекотну
                погоду, виділяючи, до того ж, токсичні речовини. Також масове цвітіння
                спричиняють синтетичні миючі засоби, які  потрапляють в водойми, органічні
                відходи та змиті дощем добрива (поля часто розбивають впритул до річок).
                Іншою можливою причиною масової загибелі риби може бути випадковий або
                цілеспрямований виток у водойму якоїсь речовини з підприємства.
              </p>
              <p>
                В Хабаровске десятки тысяч человек вышли на акцию в поддержку
                Сергея Фургала. Главное. В цьому випадку точно не зможу сказати,
                бо не була там. Але масову загибель риби можуть викликати кілька
                причин. По-перше, цвітіння  водоростей, переважно синьо-зелених,
                які наче плівкою вкривають водойми, створюючи дефіцит кисню. Через це
                риба змінює свою поведінку і може задихатися, адже вона дихає
                озчиненим у воді киснем. Цвітіння водоростей поширене в водоймах
                зі стоячою водою. Вони
                <strong> активно розмножуються та гинуть</strong>
                у спекотну
                погоду, виділяючи, до того ж, токсичні речовини. Також масове цвітіння
                спричиняють синтетичні миючі засоби, які  потрапляють в водойми, органічні
                відходи та змиті дощем добрива (поля часто розбивають впритул до річок).
                Іншою можливою причиною масової загибелі риби може бути випадковий або
                цілеспрямований виток у водойму якоїсь речовини з підприємства.
              </p>
            </Content>
          </CenterContent>
          <RightNavigation>
            <RelatedNewsCard />
          </RightNavigation>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};

export default connect(PostTemplate);
