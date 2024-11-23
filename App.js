import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/container/LoginSection/LoginScreen'
import ForgetPassword from './src/container/LoginSection/ForgetPassword'
import OtpScreen from './src/container/LoginSection/OtpScreen'
import ResetPassword from './src/container/LoginSection/ResetPassword'
import SingUp from './src/container/LoginSection/SingUp'
import CreateProfile from './src/container/LoginSection/CreateProfile'

export default function App() {
  return (
    <View>
      <CreateProfile/>
    </View>
  )
}     