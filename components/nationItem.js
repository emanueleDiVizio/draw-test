import React from 'react';
import { Text, View } from 'react-native';


export default NationItem = ({ nation }) => (
    <View style={{ flexDirection: 'row',         justifyContent: 'space-between',     alignSelf: 'stretch',    marginTop: 8, marginBottom: 8}}>
        <Text> {nation.name}</Text>
        <View style={{flex: 0.5, flexDirection: 'column', alignItems: 'flex-end'}}>
            <Text style={{alignSelf: 'center'}}>{nation.medals.total}</Text>
            <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
                <Text style={{flex: 1}}>G: {nation.medals.gold}</Text>
                <Text style={{flex: 1}}>S: {nation.medals.silver}</Text>
                <Text style={{flex: 1}}>B: {nation.medals.bronze}</Text>
             </View>
        </View>
    </View>
);