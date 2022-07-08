import { View, Text } from 'react-native'
import React from 'react'
import { ModelOfCardPost } from '../model'
import { styles } from './styles'
import { Card, Texts } from '../../../atoms'

export const CardPost: React.FC<ModelOfCardPost> = ({
  theme,
  label,
  onPressFalse,
  onPressTrue
}) => {
  return (
    <Card theme={theme} style={styles(theme).container}>
      <Texts.Body theme={theme} alignCenter>{label}</Texts.Body>
      <View style={styles(theme).buttonView}>
        <Buttons.Link style={styles(theme).button} alignCenter theme={theme} onPress={onPressTrue}>TRUE</Buttons.Link>
        <Buttons.Link style={styles(theme).button} alignCenter theme={theme} onPress={onPressFalse}>FALSE</Buttons.Link>
      </View>
    </Card>
  )
}
