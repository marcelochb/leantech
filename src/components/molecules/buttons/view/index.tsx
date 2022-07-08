import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ModelOfButtons } from '../model'
import { styles } from './styles'
import { Texts } from '../../../atoms'

const Link: React.FC<ModelOfButtons> = ({ children, theme, style, alignCenter, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[
      styles(theme).link,
      alignCenter
        ? styles(theme).center
        : {},
      style
    ]}>
      <Texts.Body theme={theme}>{children}</Texts.Body>
    </TouchableOpacity>
  )
}


export const Buttons = {Link}
