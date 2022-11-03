import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import styling from './Styling';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import NotificationList from '../../components/NotificationList';
import {colors} from '../../config/Colors';
import Buton from '../../components/Buton';

const Notification = ({navigation}) => {
  return (
    <View style={[styling.Container]}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.arrowLeftShort}
        leftRoute={() => {
          navigation.goBack();
        }}
        centerTitle={labels.notifications}
      />
      <View style={styling.viewBorder} />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.colorWhite,
          padding: 22,
          alignItems: 'center',
        }}>
        <NotificationList
          title={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
          dateTime={'10:00  a.m | 05/04/21'}
        />
        <View
          style={{
            height: 1,
            width: '95%',
            marginTop: 12,
            backgroundColor: colors.bordergray,
            alignSelf: 'flex-end',
          }}
        />
        <View style={[styling.padding22]} />
        <Buton title={labels.viewMore} onPress={() => {}} />
      </View>
    </View>
  );
};

export default Notification;
