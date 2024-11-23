import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RHeight } from '../assets/constant/Responsive'

export default function AppButton({title}) {
  return (
    <TouchableOpacity style={{width:'100%',height:RHeight(6),backgroundColor:'#0C4151',borderRadius:4,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:14,fontWeight:'500'}}>{title}</Text>
    </TouchableOpacity>
  )
}