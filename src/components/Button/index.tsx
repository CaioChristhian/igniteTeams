import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps } from './styles';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props){
  return (
    <S.Container type={type} {...rest}>
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  );
}