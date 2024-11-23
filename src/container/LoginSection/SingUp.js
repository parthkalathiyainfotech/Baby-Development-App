import { View, StatusBar, Image, TouchableOpacity, Text, } from 'react-native'
import React, { useState } from 'react'
import { RHeight, RWidth } from '../../assets/constant/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

export default function SingUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <View style={{ flex: 1 }}>
        <View style={{ width: RWidth(100), height: RHeight(100), flexGrow: 1, position: 'absolute' }}>
          <Image
            source={require('../../assets/Images/BackgroundImage.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.6 ,marginTop:RHeight(1) }}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            height: RHeight(100),
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: RWidth(4),
          }}
        >
          <View
            style={{
              overflow: 'hidden',
              position: 'relative',
              height: '100%',
              width: '100%',
            }}
          >
            <View style={{ width: '100%', height: RHeight(6), marginTop: RHeight(5) }}>
              <TouchableOpacity style={{ width: '15%', height: '100%', justifyContent: 'center' }}>
                <MaterialCommunityIcons name={'keyboard-backspace'} size={25} color={'black'} />
              </TouchableOpacity>
            </View>


            <View style={{ width: '100%', height: RHeight(8), marginTop: RHeight(1) }}>
              <Text style={{ color: '#0C4151', fontSize: 24, fontWeight: '700' }}>Register</Text>
              <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '400', top: 5 }}>
                Enter your details & create account
              </Text>
            </View>





            <View style={{ width: '100%', marginTop: RHeight(3) }}>
              <AppTextInput
                title={'Mobile No.'}
                placeholder={'Enter Mobile No.'}
                keyboardType={'number-pad'}
              />
            </View>
            <View style={{ width: '100%', marginTop: RHeight(4) }}>
              <AppTextInput
                title={'Email'}
                placeholder={'Enter Email'}
                keyboardType={'email-address'}
              />
            </View>
            <View style={{ width: '100%', marginTop: RHeight(4) }}>
              <AppTextInput
                title={'Password'}
                placeholder={'Enter Password '}
                secureTextEntry={!isPasswordVisible}
                imagepath={
                  isPasswordVisible
                    ? require('../../assets/Images/openEye.png')
                    : require('../../assets/Images/closeEye.png')
                }
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            </View>
            <View style={{ width: '100%', marginTop: RHeight(4) }}>
              <AppTextInput
                title={'Confirm Password'}
                placeholder={'Enter Confirm Password '}
                secureTextEntry={!isConfirmPasswordVisible}
                imagepath={
                  isConfirmPasswordVisible
                    ? require('../../assets/Images/openEye.png')
                    : require('../../assets/Images/closeEye.png')
                }
                onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              />
            </View>

            <View style={{ width: '100%', marginTop: RHeight(6) }}>
              <AppButton
                title={'Register'}
              />
            </View>

            <View style={{ width: '100%', height: RHeight(3), marginTop: RHeight(3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              <View style={{ width: RWidth(40), height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
              <Text style={{ color: '#000000', fontWeight: '500', fontSize: 12 }}>OR</Text>
              <View style={{ width: RWidth(40), height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
            </View>

            <View style={{ width: '100%', height: RHeight(7), justifyContent: 'center', alignItems: 'center', marginTop: RHeight(3), flexDirection: 'row' }}>
              <TouchableOpacity style={{ width: '15%', borderRadius: 4, height: '90%', elevation: 2, justifyContent: 'center', alignItems: 'center', marginRight: RWidth(2.5), backgroundColor: 'white' }}>
                <Image source={require('../../assets/Images/Google.png')} style={{ width: '100%', height: '100%', resizeMode: 'center' }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '15%', borderRadius: 4, height: '90%', elevation: 2, justifyContent: 'center', alignItems: 'center', marginLeft: RWidth(2.5), backgroundColor: 'white' }}>
                <Image source={require('../../assets/Images/FaceBook.png')} style={{ width: '100%', height: '100%', resizeMode: 'center' }} />
              </TouchableOpacity>
            </View>


            <View style={{ width: '100%', height: RHeight(3), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
              <Text style={{ color: '#6A6A6AB2', fontSize: 14, fontWeight: '500' }}>Already have an account? </Text>
              <TouchableOpacity><Text style={{ color: '#0C4151', fontSize: 14, fontWeight: '600' }}>Login</Text></TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}