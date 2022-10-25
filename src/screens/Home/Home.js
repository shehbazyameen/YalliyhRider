import {View, Text} from 'react-native';
import React from 'react';
import styling from './Styling';
import {InputFeild} from '../../components/InputField';

const Home = () => {
  return (
    <View style={[styling.Container]}>
      <InputFeild
        // refValueCurrent={refenterpassword}
        onFocusBorderColor={true}
        textLabels={'UserName * '}
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
