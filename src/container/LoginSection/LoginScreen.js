import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import { RHeight, RWidth } from '../../assets/constant/Responsive';

export default function LoginScreen() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={{ width: '100%', height: '100%' ,backgroundColor:'white'}}>
            <StatusBar translucent  backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ flex: 1 }}>
                <View style={{ width: RWidth(100), height: RHeight(100), flexGrow: 1, position: 'absolute' }}>
                    <Image
                        source={require('../../assets/Images/BackgroundImage.png')}
                        style={{ width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.6,marginTop:RHeight(1) }}
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
                        <View style={{ width: '100%', height: RHeight(6),marginTop:RHeight(5)}}>
                            <TouchableOpacity style={{ width: '15%', height: '100%', justifyContent: 'center' }}>
                                <MaterialCommunityIcons name={'keyboard-backspace'} size={25} color={'black'} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', height: RHeight(8), marginTop: RHeight(1) }}>
                            <Text style={{ color: '#0C4151', fontSize: 24, fontWeight: '700' }}>Login</Text>
                            <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '400', top: 5 }}>
                                Login to access your account
                            </Text>
                        </View>

                        <View style={{ width: '100%', height: RHeight(25), marginTop: RHeight(3) }}>
                            <AppTextInput
                                title={'Email'}
                                placeholder={'Enter Email'}
                                keyboardType={'email-address'}
                            />
                            <View style={{ marginTop: RHeight(5) }}>
                                <AppTextInput
                                    title={'Password'}
                                    placeholder={'Enter Password'}
                                    secureTextEntry={!isPasswordVisible}
                                    imagepath={
                                        isPasswordVisible
                                            ? require('../../assets/Images/openEye.png')
                                            : require('../../assets/Images/closeEye.png')
                                    }
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                />
                                <TouchableOpacity
                                    style={{
                                        width: '40%',
                                        height: RHeight(3),
                                        marginTop: RHeight(3),
                                        alignSelf: 'flex-end',
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#DB4444',
                                            textAlign: 'right',
                                            fontWeight: '600',
                                            fontSize: 13,
                                        }}
                                    >
                                        Forget Password?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: RHeight(3) }}>
                            <AppButton title={'Login'} />
                        </View>



                        <View style={{ width: '100%', height: RHeight(3), marginTop: RHeight(3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <View style={{ width: RWidth(40), height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
                            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 12 }}>OR</Text>
                            <View style={{ width: RWidth(40), height: 1, backgroundColor: 'gray', opacity: 0.5 }} />
                        </View>

                        <View style={{ width: '100%', height: RHeight(7), justifyContent: 'center', alignItems: 'center', marginTop: RHeight(3), flexDirection: 'row' }}>
                            <TouchableOpacity style={{ width: '15%', borderRadius: 4, height: '90%', elevation:2, justifyContent: 'center', alignItems: 'center', marginRight: RWidth(2.5), backgroundColor: 'white' }}>
                                <Image source={require('../../assets/Images/Google.png')} style={{ width: '100%', height: '100%', resizeMode: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '15%', borderRadius: 4, height: '90%', elevation:2, justifyContent: 'center', alignItems: 'center', marginLeft: RWidth(2.5), backgroundColor: 'white' }}>
                                <Image source={require('../../assets/Images/FaceBook.png')} style={{ width: '100%', height: '100%', resizeMode: 'center' }} />
                            </TouchableOpacity>
                        </View>




                        <View style={{ width: '100%', height: RHeight(3),position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: '#6A6A6AB2', fontSize: 14, fontWeight: '500' }}>Don’t have an account? </Text>
                            <TouchableOpacity><Text style={{ color: '#0C4151', fontSize: 14, fontWeight: '600' }}>Register</Text></TouchableOpacity>
                        </View>








                    </View>
                </View>
            </View>
        </View>
    );
}
