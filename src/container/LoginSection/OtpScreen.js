import { View, Text, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { RHeight, RWidth } from '../../assets/constant/Responsive'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AppButton from '../../components/AppButton';

export default function OtpScreen() {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputRefs = useRef([]);

    const handleInputChange = (value, index) => {
        if (/^\d$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== '' && index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };
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
                            <Text style={{ color: '#0C4151', fontSize: 24, fontWeight: '700' }}>OTP Verification</Text>
                            <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '400', top: 5 }}> We’ve just sent you an OTP verification code</Text>
                            <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '400', top: 5 }}> to +91 56565 56565 </Text>
                        </View>



                        <View style={{ width: '100%',height:RHeight(7), marginTop: RHeight(6),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        {otp.map((value, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                    style={{
                                        width: '14%',
                                        height: RHeight(6),
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        textAlign: 'center',
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    value={value}
                                    onChangeText={(text) => handleInputChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                />
                            ))}
                        </View>

                        <View style={{ width: '100%', marginTop: RHeight(4)}}>
                            <AppButton title={'Verify'}/>
                        </View>











                    </View>
                </View>
            </View>
        </View>
    )
}