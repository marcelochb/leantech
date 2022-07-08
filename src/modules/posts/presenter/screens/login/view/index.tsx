import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {PageWrapper} from '../../../../../../components';
import {BaseTheme} from '../../../../../../core/themes'
import { styles } from './style';

export const Login = () => {
  return (
    <PageWrapper theme={BaseTheme}>
      <View style={styles(BaseTheme).container}>
        <Text>Login</Text>
        <TextInput style={styles(BaseTheme).input}

          />
        <TextInput style={styles(BaseTheme).input}
            secureTextEntry
          />
      </View>
    </PageWrapper>
  )
}