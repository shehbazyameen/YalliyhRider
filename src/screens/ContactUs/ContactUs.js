import React, {useState} from 'react';
import {View, ImageBackground, Dimensions, TextInput} from 'react-native';
import styling from './Styling';
import {Assets} from '../../assets';
import {InputFeild} from '../../components/InputField';
import {ScrollView} from 'react-native';
import Buton from '../../components/Buton';
import {labels} from '../../config/Labels';
import CustomHeader from '../../components/CustomHeader';
import {colors} from '../../config/Colors';

const {width, height} = Dimensions.get('window');

const ContactUs = ({navigation}) => {
  const [showeye, setshoweye] = useState(false);
  const [showeyeconfirm, setShoweyeConfirm] = useState(false);
  const [newShoweyeConfirm, setNewShoweyeConfirm] = useState(false);
  const [password, setPassword] = useState('');
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
        centerTitle={labels.contactUs}
        // rightIcon1={Assets.bell}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />

      <View style={[styling.paddingHorizontal45]}>
        {/* <View style={[styling.marginTop]} /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.FullName + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'Enter First Name'}
            leftIcon={Assets.user}
            secure={showeyeconfirm}
            // value={firstName}
            // onChange={e => setFirstName(e)}
          />

          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.LastName + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'Enter Last Name'}
            leftIcon={Assets.user}

            // value={firstName}
            // onChange={e => setFirstName(e)}
          />
          <View style={[styling.marginTop]} />
          <InputFeild
            // refValueCurrent={refenterpassword}
            onFocusBorderColor={true}
            textLabels={labels.Email + labels.staric}
            returnKeyType={'next'}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            // imageInputField
            placeholder={'Enter Email'}
            leftIcon={Assets.email}
            secure={showeye}
            value={password}
            onChange={e => setPassword(e)}
          />

          <View style={[styling.marginTop]} />

          <TextInput
            placeholder={labels.enterMessage}
            style={[styling.inputFeildStyleLargeReason, styling.textInput]}
            returnKeyType={'done'}
            // onChangeText={e => setNotesReason(e)}
            // value={notesReason}
            numberOfLines={4}
            multiline={true}
          />
          <View style={[styling.marginTop]} />
          <View style={[styling.marginTop]} />
          <View style={styling.textSignup}>
            <Buton
              title={labels.send}
              onPress={() => {
                // navigation.navigate('Verification');
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ContactUs;
