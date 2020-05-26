import styled from 'styled-components';
import {
  position,
  borderRadius,
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
} from 'styled-system';
import {TouchableOpacity} from 'react-native';

const Button = styled(TouchableOpacity)(
  compose(borderRadius, layout, color, size, space, flexbox,position),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
