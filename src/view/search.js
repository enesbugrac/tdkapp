/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button} from 'react-native';
import SearchBox from '../components/search-box'
import {Logo} from '../components/icons'
import Box from '../components/box'
function SearchView({ navigation }) {
  return (
    <Box>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box py={20}>
      <Logo width={150} color="red"/>
      </Box>
      <Box p={10}>
      <SearchBox/>
      </Box>
      </Box>
  );
}


export default SearchView;
