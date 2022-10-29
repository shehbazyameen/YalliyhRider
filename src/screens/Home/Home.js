import React, {useState} from 'react';
import {View, Button} from 'react-native';
import styling from './Styling';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import CustomModal from '../../components/CustomModal';
import {colors} from '../../config/Colors';
import StartModal from '../../components/StartModal';

const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  //

  const renderModal = () => {
    return (
      <>
        <StartModal
          image={Assets.dummyImageSquare}
          userName={'User Name'}
          userNameNo={'123456789'}
          tripId={'Trip ID: AB_001'}
          pickUpLocationTitle={'Drop off Location:'}
          pickUpLocation={'A-15, block 2, Street XYZ'}
          dropLocationTitle={'Drop off Location:'}
          dropLocation={'A-15, block 2, Street XYZ'}
          price={'10000'}
          date={'12/12/2022'}
          time={'12:12'}
          onPressPick={() => {
            alert('hi');
          }}
          onPressDrop={() => {
            alert('hi');
          }}
          onPressStartRide={() => {
            alert('hi');
          }}
          onPressCancel={() => {
            alert('hi');
          }}
        />
      </>
    );
  };

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
      <Button title="Show modal" onPress={toggleModal} />

      <CustomModal
        backdropColor={colors.transparent}
        Children={renderModal()}
        isModalVisible={isModalVisible}
        onBackdropPress={() => {
          toggleModal();
        }}
      />
    </View>
  );
};

export default Home;
