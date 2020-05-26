/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from './button'
import { Bookmark, Search, RotateCcw } from './icons'
import Box from './box'
import theme from '../utils/theme'
function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return label === 'Search' ? (
          <Box key={label} p={15} bg="white" mt={-15} borderRadius="full">
            <Button borderRadius="full" size={56} bg="red" onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === 'Favorite' && (
              <Bookmark color={theme.colors.textLight} />
            )}
            {label === 'History' && (
              <RotateCcw color={theme.colors.textLight} />
            )}
            <Box bg={isFocused ? 'red' : 'white'} size={3} mt={6} />
          </Button>
        )
      })}
    </View>
  )
}
export default TabBar
