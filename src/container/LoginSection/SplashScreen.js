import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RHeight, RWidth } from '../../assets/constant/Responsive'
import AppButton from '../../components/AppButton'

export default function SplashScreen() {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '100%', height: '100%', position: 'absolute', alignSelf: 'center' }}>
                <Image source={require('../../assets/Images/SplashImage.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
            </View>
    

            <View style={{ width: '100%', height: RHeight(30), bottom: 0, position: 'absolute', paddingHorizontal: RWidth(4), paddingBottom: RHeight(3),paddingTop:RHeight(5) }}>
                <View style={{ width: '100%', height: '70%', }}>
                    <Text style={{color:'#0C4151',fontWeight:'700',fontSize:24}}>Empowering early</Text>
                    <Text style={{color:'#0C4151',fontWeight:'700',fontSize:24}}>development, one cuddle</Text>
                    <Text style={{color:'#0C4151',fontWeight:'700',fontSize:24}}>at a time.</Text>
                </View>
                <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ width: '46%', height: RHeight(6), borderWidth: 2, borderRadius: 4, borderColor: '#0C4151', justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
                        <Text style={{ color: '#0C4151', fontWeight: '500', fontSize: 14 }}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '46%', height: RHeight(6),  borderRadius: 4, borderColor: '#0C4151', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#0C4151'}}>
                        <Text style={{ color: 'white', fontWeight: '500', fontSize: 14 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}