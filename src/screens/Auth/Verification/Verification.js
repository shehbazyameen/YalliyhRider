import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styling from './Styling';
import {Assets} from '../../../assets';
import {Image} from 'react-native';
import {StatusBar} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {ScrollView} from 'react-native';
import Buton from '../../../components/Buton';
import {labels} from '../../../config/Labels';

const Verification = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [show, setShow] = useState(false);
  const [time, setTime] = useState('');
  // TIMER FIELDS
  var secs = 59,
    min = 0;

  useEffect(() => {
    if (show === true) {
      var interval = setInterval(() => {
        if (min === 0 && secs === 0) {
          setShow(false);
          clearInterval(interval);
        }
        if (secs === 0) {
          secs = 59;
          min -= 1;
        }
        if (secs < 10) setTime(`0${min} : 0${secs}`);
        else setTime(`0${min} : ${secs}`);
        secs--;
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [show]);

  return (
    <View style={[styling.Container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground source={Assets.imageSignup} style={styling.height190}>
        <View style={styling.viewImage}>
          <Image source={Assets.ApplicationLogo} />
        </View>
      </ImageBackground>
      <View style={styling.viewInputField}>
        <View style={[styling.marginTop]} />
        <View style={[styling.marginTop]} />
        <Text style={styling.textPasswordRecovery}>{labels.verification}</Text>

        <Text style={styling.textVerificationCode}>
          {labels.verificationCode}
        </Text>

        <ScrollView>
          <View style={[styling.marginTop]} />
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={e => setValue(e.replace(/[^0-9]/g, ''))}
            cellCount={4}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View>
                <Text
                  key={index}
                  style={[
                    styling.cell,
                    styling.textInputField,
                    styling.shadowCodeField,
                    isFocused && styling.focusCell,
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <View style={{alignSelf: 'center', padding: 22}}>
            {show ? (
              <Text style={[styling.textResend]}>{time}</Text>
            ) : (
              <>
                <Text style={[styling.didReceived]}>
                  {labels.didNt}
                  <Text
                    onPress={() => {
                      !show &&
                        // resendCode(),
                        setShow(true);
                    }}
                    style={[styling.didReceived]}>
                    {labels.resend}
                  </Text>
                </Text>
              </>
            )}
          </View>

          <View style={styling.textSignup}>
            <Buton
              title={labels.continue}
              onPress={() => {
                navigation.navigate('SetPassword');
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpLogin');
            }}
            style={styling.touch}>
            <Text style={styling.textBackToLogin}>{labels.backToLogin}</Text>
          </TouchableOpacity>
          <View style={[styling.marginTop]} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Verification;
