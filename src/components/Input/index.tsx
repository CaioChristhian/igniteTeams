import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';


export function Input({ ...rest }: TextInputProps){
  return (
    <S.Container {...rest}>
      
    </S.Container>
  );
}