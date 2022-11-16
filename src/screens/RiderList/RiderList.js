import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import styling from './Styling';
import {Assets} from '../../assets';
import {ScrollView} from 'react-native';
import Buton from '../../components/Buton';
import {labels} from '../../config/Labels';
import CustomHeader from '../../components/CustomHeader';
import NotificationList from '../../components/NotificationList';
import RatingProfile from '../../components/RatingProfile';
import JobList from '../../components/JobList';
const {width, height} = Dimensions.get('window');

const RiderList = ({navigation}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

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
        centerTitle={'Rider List'}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />
      <View style={[styling.paddingHorizontal45]}>
        <ImageBackground
          source={Assets.tripBack}
          style={{
            height: height,
            // padding: 22,
          }}
          resizeMode="contain">
          <View style={[styling.marginTop]} />
          <View style={styling.view}>
            {show ? (
              <>
                <JobList
                  title={'Chris'}
                  Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
                  image={Assets.userAvatar}
                  date={'23 mint'}
                  rating={4.6}
                  onPressDetails={() => {
                    navigation.navigate('Trip');
                  }}
                />
              </>
            ) : (
              <Text style={[styling.textNoRider]}>No Rides Available</Text>
            )}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default RiderList;
