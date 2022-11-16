import React, {useState} from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import styling from './Styling';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import StartModal from '../../components/StartModal';
import MapView from 'react-native-maps';
import Buton from '../../components/Buton';
import {InputFeild} from '../../components/InputField';
import {colors} from '../../config/Colors';
import {ScrollView} from 'react-native';

const Chat = ({navigation}) => {
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
        centerTitle={labels.youAreOnline}
      />

      <View style={styling.viewContainer}>
        <ScrollView>
          <View style={styling.flexDirectionRow}>
            <Image
              style={styling.hw40}
              source={Assets.profileDumy}
              resizeMode="contain"
            />
            <View style={styling.viewMainChatBox}>
              <View style={styling.flex08}>
                <Text style={[styling.textTitle]} numberOfLines={1}>
                  userName
                </Text>
                <Text style={[styling.textTitle]}>
                  996 Hello! How may I help you?
                </Text>
              </View>
              <View style={styling.viewDate}>
                <Text></Text>
                <Text style={[styling.textDate]}>12/12/2022</Text>
              </View>
            </View>
          </View>
          <View style={[styling.marginTop]} />
          <View style={styling.flexDirectionRow}>
            <View style={styling.viewMainChatBox}>
              <View style={styling.flex08}>
                <Text style={[styling.textTitle]} numberOfLines={1}>
                  userName
                </Text>
                <Text style={[styling.textTitle]}>
                  996 Hello! How may I help you?
                </Text>
              </View>
              <View style={styling.viewDate}>
                <Text></Text>
                <Text style={[styling.textDate]}>12/12/2022</Text>
              </View>
            </View>
            <Image
              style={styling.hw40}
              source={Assets.profileDumy}
              resizeMode="contain"
            />
          </View>
        </ScrollView>

        <View style={styling.viewMainInput}>
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            // onFocusBorderColor={true}
            height={57}
            hwRightIcon={33}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            placeholder={labels.enter + labels.message}
            // leftIcon={Assets.user}
            rightIcon={Assets.send}
            rightIconOnPress={() => {
              // alert('hi');
            }}
            // value={brandName}
            // onChange={e => setbrandName(e)}
          />
        </View>
      </View>
    </View>
  );
};

export default Chat;
