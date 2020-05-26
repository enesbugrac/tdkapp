import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  flexbox,
  flex,
  borderRadius,
} from 'styled-system'
import { View } from 'react-native'

const Box = styled(View)(
  compose(flex, color, size, space, flexbox, borderRadius)
)

export default Box
