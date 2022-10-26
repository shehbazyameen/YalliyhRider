import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Taber = () => {
  return (
    <View>
      <View style={styling.viewTaber}>
        <TouchableOpacity
          style={{
            backgroundColor: tab ? '#E78901' : 'transparent',
            borderRadius: 10,
          }}
          onPress={() => {
            setTab(true);
          }}>
          <Text
            style={{
              color: tab ? '#ffffff' : 'black',
              paddingHorizontal: 25,
              paddingVertical: 9,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: !tab ? '#E78901' : 'transparent',
            borderRadius: 10,
          }}
          onPress={() => {
            setTab(false);
          }}>
          <Text
            style={{
              color: !tab ? '#ffffff' : 'black',
              paddingHorizontal: 25,
              paddingVertical: 9,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Taber;
