import {View, Text} from 'react-native';
import React from 'react';
import styling from './Styling';
import {InputFeild} from '../../components/InputField';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';

const Home = ({navigation}) => {
  return (
    <View style={[styling.Container]}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        backgroundImage={Assets.HeaderBack2}
        leftIcon={Assets.menu}
        leftRoute={() => {
          navigation.openDrawer();
        }}
        centerTitle={labels.youAreOnline}
        rightIcon1={Assets.bell}
        rightIcon1Onpress={() => {}}
      />
      <InputFeild
        // refValueCurrent={refenterpassword}
        onFocusBorderColor={true}
        textLabels={'UserName* '}
        returnKeyType={'next'}
        paddingHorizontal={0}
        paddingHorizontalRight={22}
        // imageInputField
        placeholder={'First Name'}
        // leftIcon={Assets.Password}
        // rightIcon={Assets.user}
        // value={firstName}
        // onChange={e => setFirstName(e)}
      />
    </View>
  );
};

export default Home;
