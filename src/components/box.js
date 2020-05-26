import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius,
} from 'styled-system';
import {View} from 'react-native';

const Box = styled(View)(compose(color, size, space, flexbox, borderRadius));

export default Box;
