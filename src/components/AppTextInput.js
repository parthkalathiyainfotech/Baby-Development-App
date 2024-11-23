import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { RHeight } from '../assets/constant/Responsive'

export default function AppTextInput({ title, imagepath, placeholder, onChangeText, numberOfLines, onBlur ,keyboardType,secureTextEntry,onPress}) {
    return (
        <View style={{ width: '100%', height: RHeight(7), }}>
            <Text style={{ color: '#2F2F2F', fontSize: 13, fontWeight: '700' }}>{title}</Text>
            <View style={{ width: '100%', height: '80%', borderWidth: 1, marginTop: RHeight(1), borderRadius: 4, flexDirection: 'row' }}>
                <TextInput
                    style={{ width: '85%', height: '100%', paddingLeft: 10, color: 'black' }}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    numberOfLines={numberOfLines}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={'gray'}
                    // keyboardType='email-address'
                />
                <TouchableOpacity style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
                    <Image source={imagepath} style={{ width: '50%', height: '50%', resizeMode: 'center' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}