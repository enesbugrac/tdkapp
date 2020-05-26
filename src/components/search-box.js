import React from 'react'
import Box from './box'
import Text from './text'
import Input from './input'
import SvgSearch from './icons/Search'
import SvgX from './icons/X'
import theme from '../utils/theme'
import Button from './button'
import { Keyboard } from 'react-native'
function SearchBox() {
  const [isFocus, setFocus] = React.useState(false)
  const [value, setValue] = React.useState('')
  const onCancel = () => {
    Keyboard.dismiss()
    setFocus(false)
  }
  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.1,
            shadowRadius: 24
          }}
          value={value}
          height={52}
          bg="white"
          color="textDark"
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          pl={52}
          borderRadius="normal"
          onChangeText={(text) => setValue(text)}
          onFocus={() => setFocus(true)}
        />
        <Button position="absolute" left={16} top={14}>
          <SvgSearch color={theme.colors.atasozleriDark} />
        </Button>

        {value !== '' ? (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <SvgX color={theme.colors.textDark} />
          </Button>
        ) : null}
      </Box>
      {isFocus ? (
        <Button onPress={onCancel} p={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      ) : null}
    </Box>
  )
}
export default SearchBox
