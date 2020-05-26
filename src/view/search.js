/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button} from 'react-native';

import {Logo} from '../components/icons'
import BoxCenter from '../components/box-center'

function SearchView({ navigation }) {
  return (
    <BoxCenter bg= 'birlesikKelimeDark'>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo width={150} color="red"/>
    </BoxCenter>
  );
}


export default SearchView;
