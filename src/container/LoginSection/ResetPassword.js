import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RHeight, RWidth } from '../../assets/constant/Responsive'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

export default function ResetPassword() {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={{ flex: 1 }}>
                <View style={{ width: RWidth(100), height: RHeight(100), flexGrow: 1, position: 'absolute' }}>
                    <Image
                        source={require('../../assets/Images/BackgroundImage.png')}
                        style={{ width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.6 }}
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


                        <View style={{ width: '100%', height: RHeight(6) }}>
                            <TouchableOpacity style={{ width: '15%', height: '100%', justifyContent: 'center' }}>
                                <MaterialCommunityIcons name={'keyboard-backspace'} size={25} color={'black'} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', height: RHeight(8), marginTop: RHeight(1) }}>
                            <Text style={{ color: '#0C4151', fontSize: 24, fontWeight: '700' }}>Reset Password</Text>
                            <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '400', top: 5 }}>
                                Reset your password & login with new password
                            </Text>
                        </View>



                        <View style={{ width: '100%', marginTop: RHeight(3) }}>
                            <AppTextInput
                                title={'New Password'}
                                placeholder={'New Password'}
                                keyboardType={'visible-password'}
                            />
                        </View>
                        <View style={{ width: '100%', marginTop: RHeight(5) }}>
                            <AppTextInput
                                title={'Confirm Password'}
                                placeholder={'Confirm New Password'}
                                keyboardType={'visible-password'}
                            />
                        </View>
                        <View style={{ width: '100%', marginTop: RHeight(6) }}>
                            <AppButton
                                title={'Reset'}
                            />
                        </View>









                    </View>
                </View>
            </View>
        </View>
    )
}