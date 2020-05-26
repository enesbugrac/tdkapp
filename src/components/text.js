import styled from 'styled-components'
import { compose, color, size, space, typography } from 'styled-system'
import { Text as T } from 'react-native'

const Text = styled(T)(compose(typography, color, size, space))

export default Text
