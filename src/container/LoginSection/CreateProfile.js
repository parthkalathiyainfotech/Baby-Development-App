import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RHeight, RWidth } from '../../assets/constant/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

export default function CreateProfile() {
    const data = [
        { name: 'Mom', value: 'Mom' },
        { name: 'Dad', value: 'Dad' },
        { name: 'Grandma', value: 'Grandma' },
        { name: 'Grandpa', value: 'Grandpa' },
        { name: 'Auntie', value: 'Auntie' },
        { name: 'Uncle', value: 'Uncle' },
        { name: 'Nanny', value: 'Nanny' },
        { name: 'Other', value: 'Other' },
    ]
    const [selectedValue, setSelectedValue] = useState('Mom');
    const [radio, setRadio] = useState(true);

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={{ flex: 1 }}>
                <View style={{ width: RWidth(100), height: RHeight(100), flexGrow: 1, position: 'absolute' }}>
                    
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
                            <Text style={{ color: '#0C4151', fontSize: 24, fontWeight: '700' }}>Create Profile</Text>
                            <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '400', top: 5 }}>
                                Enter following details to create your profile
                            </Text>
                        </View>
                        <View style={{ width: '100%', marginTop: RHeight(3) }}>
                            <AppTextInput
                                title={'First Name'}
                                placeholder={'Enter First Name'}
                            />
                        </View>
                        <View style={{ width: '100%', marginTop: RHeight(5) }}>
                            <AppTextInput
                                title={'Last Name'}
                                placeholder={'Enter Last Name'}
                            />
                        </View>

                        <View style={{ width: '100%', marginTop: RHeight(5) }}>
                            <Text style={{ color: '#0C4151', fontWeight: '500', fontSize: 12 }}>Use this app as</Text>
                        </View>


                        <View style={{ width: '100%', height: RHeight(20), marginTop: RHeight(2), flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {data.map((v, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: '30%',
                                        height: '20%',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        borderColor: selectedValue === v.value ? '#0C4151' : '#6A6A6A',
                                        backgroundColor: selectedValue === v.value ? '#0C4151' : 'transparent',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: RHeight(1),
                                        marginBottom: RHeight(1),
                                    }}
                                    onPress={() => setSelectedValue(v.value)} // Set the selected value
                                >
                                    <Text style={{
                                        color: selectedValue === v.value ? 'white' : '#6A6A6A',
                                        fontSize: 12,
                                        fontWeight: '400',
                                    }}>
                                        {v.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>





                        <View style={{ width: '100%' }}>
                            <Text style={{ color: '#0C4151', fontWeight: '500', fontSize: 12 }}>Use this app as</Text>
                        </View>

                        <View style={{ width: '100%', height: RHeight(4), marginTop: RHeight(2), flexDirection: 'row', alignItems: 'center', }} >

                            <View style={{ width: '15%', height: '100%', flexDirection: 'row', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => setRadio(true)}>
                                    <Ionicons
                                        name={radio ? 'radio-button-on' : 'radio-button-off'}
                                        size={25}
                                        color={radio ? '#0C4151' : '#6A6A6A'}
                                    />
                                </TouchableOpacity>
                                <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '600', marginLeft: 5 }}>Here</Text>
                            </View>


                            <View style={{ width: '20%', height: '100%', flexDirection: 'row', alignItems: 'center', marginLeft: 16, }}>
                                <TouchableOpacity onPress={() => setRadio(false)}>
                                    <Ionicons
                                        name={!radio ? 'radio-button-on' : 'radio-button-off'}
                                        size={25}
                                        color={!radio ? '#0C4151' : '#6A6A6A'}
                                    />
                                </TouchableOpacity>
                                <Text style={{ color: '#2F2F2F', fontSize: 12, fontWeight: '600', marginLeft: 5 }}>On the way</Text>
                            </View>
                        </View>

                        
                        <View style={{ width: '100%', marginTop: RHeight(5) }}>
                            <AppButton title={'Next'}/>
                        </View>






                    </View>
                </View>
            </View>
        </View >
    )
}   