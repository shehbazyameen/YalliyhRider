import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styling from './Styling';
import {InputFeild} from '../../components/InputField';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import Modal from '../../components/CustomModal';
import CustomModal from '../../components/CustomModal';

const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  //

  const renderModal = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            padding: 22,
          }}>
          <Text>ddd</Text>
        </View>
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
