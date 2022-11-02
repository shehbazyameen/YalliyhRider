import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styling from './Styling';
import {Assets} from '../../assets';
import {ScrollView} from 'react-native';
import Buton from '../../components/Buton';
import {labels} from '../../config/Labels';
import CustomHeader from '../../components/CustomHeader';

const Profile = ({navigation}) => {
  return (
    <View style={styling.mainContainer}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.arrowLeftShort}
        leftRoute={() => {
          navigation.goBack();
        }}
        centerTitle={labels.profile}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />
      <View style={[styling.paddingHorizontal45]}>
        <View>
          <Image
            style={styling.imageProfile}
            resizeMode="contain"
            source={Assets.profileDumy}
            borderRadius={100}
          />
        </View>
        <View style={[styling.marginTop]} />
        <View style={[styling.marginTop]} />
        <View style={[styling.marginTop]} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styling.viewFlexDirection}>
            <View style={styling.width48Perc}>
              <View>
                <Text style={styling.textName}>{labels.FullName}</Text>
                <Text style={styling.textPlaceHolderEdit}>{'Mark'}</Text>
              </View>
            </View>
            <View style={styling.width48Perc}>
              <View>
                <Text style={styling.textName}>{labels.LastName}</Text>
                <Text style={styling.textPlaceHolderEdit}>{'Carson'}</Text>
              </View>
            </View>
          </View>

          <View style={[styling.marginTop]} />

          <View style={styling.viewFlexDirection}>
            <View style={styling.width48Perc}>
              <View>
                <Text style={styling.textName}>{labels.Email}</Text>
                <Text style={styling.textPlaceHolderEdit}>{'Carson'}</Text>
              </View>
            </View>

            <View style={styling.width48Perc}>
              <View>
                <Text style={styling.textName}>{labels.PhoneNumber}</Text>
                <Text style={styling.textPlaceHolderEdit}>{'Carson'}</Text>
              </View>
            </View>
          </View>

          <View style={[styling.marginTop]} />
          <View style={[styling.marginTop]} />
          <View style={[styling.marginTop]} />
          <View style={styling.textSignup}>
            <Buton
              title={labels.edit}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Email');
              }}
              style={styling.touchforgot}>
              <Text style={[styling.textForgotPassword]}>
                {labels.changePassword}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
