import styled from 'styled-components';
import {
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
  compose(borderRadius, layout, color, size, space, flexbox),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
