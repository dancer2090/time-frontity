import React from 'react';
import {
  Post,
} from './styles';
import Link from '../../../../../components/link';

const TextPost = ({ className }) => (
  <Post className={className}>
    <Link link="#" className="post-name">
      В Хабаровске десятки тысяч человек
      вышли на акцию в поддержку Сергея Фургала
    </Link>
    <Link link="#" className="post-author">
      Андрей Яровой
    </Link>
  </Post>
);

export default TextPost;
