import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  TopNavigation,
  ContentContainer,
  CenterContent,
  Content,
  TabsWrapper,
  RightNavigation,
  AuthorInformation,
  AuthorImage,
  AuthorName,
  SubscribeBlock,
  CommentsBlock,
  SocialBlock,
  SocialFlex,
  MobileEvents,
  SocialLabel,
  FullBanner,
  MobileComments,
  MobileCommentsIco,
  MobileCommentCount,
  GMobileTitle,
  RightBanner,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import SocialList from '../../../../components/SocialList';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import TabsPost from '../../../../components/TagsPost';
import Shared from '../../../../components/Shared';
import SubscribeNews from '../../../../components/SubscribeNews';
import Comments from '../../../../components/Comments';
import RelatedNewsCard from './RelatedNewsCard/RelatedNewsCard';
import HeaderNews from './NewsHeader';
import InterviewHeader from './InterviewHeader';
import PublicationHeader from './PublicationHeader';
import authorLogo from '../../../../img/author-logo.jpg';
import postMedium from '../../../../img/post-medium.jpg';
import girlImage from '../../../../img/gir-image.jpg';

const PostTemplate = ({ state }) => {
  console.log(state);
  const type = 'publication';

  const renderHeaderPost = (typePost) => {
    switch (typePost) {
      case 'interview':
        return <InterviewHeader />;
      case 'publication':
        return <PublicationHeader />;
      default:
        return <HeaderNews />;
    }
  };

  return (
    <Wrapper>
      <Container>
        <TopNavigation type={type}>
          <Breadcrumbs links={[
            { name: 'Харків', link: '/' },
            { name: 'В хабаровске десятки тысяч человек...', link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>

        { renderHeaderPost(type) }

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

              <blockquote>
                <p>
                  В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала.
                  Главное. В цьому випадку точно не зможу сказати, бо не була там.
                  Але масову загибель риби можуть викликати кілька причин.
                </p>
              </blockquote>
              <figure
                id="attachment_7"
                aria-describedby="caption-attachment-7"
                style={{ width: '203px' }}
                className="wp-caption aligncenter"
              >
                <img
                  className="size-medium wp-image-7"
                  src={postMedium}
                  alt=""
                  width="203"
                  height="300"
                  sizes="(max-width: 203px) 100vw, 203px"
                />
                <figcaption id="caption-attachment-7" className="wp-caption-text">
                  Фото: Пресс-служба
                </figcaption>
              </figure>
              <iframe
                title="COSTA RICA IN 4K 60fps HDR (ULTRA HD)"
                width="640"
                height="360"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?feature=oembed"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
              <p>
                {/* eslint-disable-next-line max-len */}
                Здесь ваш текст.. Здесь ваш текст..» Многие программы электронной вёрстки и редакторы HTML используют
                Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам «lorem ipsum» сразу
                показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст
                Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые — намеренно (например,
                юмористические варианты).
              </p>
              <p>Здесь ваш текст.. Здесь ваш текст..» Многие программы электронной</p>
              <figure
                id="attachment_7"
                aria-describedby="caption-attachment-7"
                style={{ width: '203px' }}
                className="wp-caption alignleft"
              >
                <img
                  className="size-medium wp-image-7"
                  src={girlImage}
                  alt=""
                  width="203"
                  height="300"
                  sizes="(max-width: 203px) 100vw, 203px"
                />
                <figcaption id="caption-attachment-7" className="wp-caption-text">
                  Фото: Пресс-служба
                </figcaption>
              </figure>
              <p>
                В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала.
                Главное. В цьому випадку точно не зможу сказати, бо не була там. Але масову
                загибель риби можуть викликати кілька причин. По-перше, цвітіння  водоростей,
                переважно синьо-зелених, які наче плівкою вкривають водойми, створюючи дефіцит кисню.
                Через це риба змінює свою поведінку і мо. ибель риби можуть викликати кілька причин.
                По-перше, цвітіння  водоростей, переважно синьо-зелених, які наче плівкою вкривають водойми,
                створюючи дефіцит кисню. Через це риба змінює свою поведінку і мо.
                Через це риба змінює свою поведінку і мо
              </p>
              <ul>
                <li>
                  В Хабаровске десятки тысяч человек вышли на акцию в поддержку
                  Сергея Фургала. Главное. В цьому випадку точно не зможу сказати,
                  бо не була там. Але масову загибель риби можуть викликати кілька причин.
                </li>
                <li>
                  В Хабаровске десятки тысяч человек вышли на акцию в поддержку
                  Сергея Фургала. Главное. В цьому випадку точно не зможу сказати,
                  бо не була там. Але масову загибель риби можуть викликати кілька причин.
                </li>
                <li>
                  В Хабаровске десятки тысяч человек вышли на акцию в поддержку
                  Сергея Фургала. Главное. В цьому випадку точно не зможу сказати,
                  бо не була там. Але масову загибель риби можуть викликати кілька причин.
                </li>
              </ul>
              <h2>Подзаголовок в публикации 2</h2>
              <p>
                В Хабаровске десятки тысяч человек вышли на акцию в поддержку Сергея Фургала.
                Главное. В цьому випадку точно не зможу сказати, бо не була там. Але масову загибель
                риби можуть викликати кілька причин. По-перше, цвітіння  водоростей, переважно
                синьо-зелених, які наче плівкою вкривають водойми, створюючи дефіцит кисню.
                Через це риба змінює свою поведінку і мо
              </p>
            </Content>

            <TabsWrapper>
              <TabsPost />
              <Shared />
            </TabsWrapper>
            <AuthorInformation>
              <AuthorImage src={authorLogo} />
              <AuthorName>
                Александр Герасименко
              </AuthorName>
            </AuthorInformation>
            <MobileEvents>
              <MobileComments>
                <MobileCommentsIco name="comments" />
                <MobileCommentCount>999</MobileCommentCount>
              </MobileComments>
              <Shared />
            </MobileEvents>
            <SubscribeBlock>
              <SubscribeNews />
            </SubscribeBlock>

            <CommentsBlock>
              <Comments />
            </CommentsBlock>
          </CenterContent>

          <RightNavigation>
            <RightBanner />
            <GMobileTitle size="small">
              новости харькова
            </GMobileTitle>
            {
              [1, 2, 3, 4, 5].map((item) => (
                <RelatedNewsCard key={item} />
              ))
            }
          </RightNavigation>
        </ContentContainer>

        <SocialBlock>
          <SocialLabel>следите за нами в соцсетях</SocialLabel>
          <SocialFlex>
            <SocialList />
          </SocialFlex>
        </SocialBlock>

        <FullBanner />
      </Container>
    </Wrapper>
  );
};

export default connect(PostTemplate);
