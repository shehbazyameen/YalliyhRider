import React, {useState} from 'react';
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
import {colors} from '../../config/Colors';
import CustomModal from '../../components/CustomModal';
import StartModal from '../../components/StartModal';
const {width, height} = Dimensions.get('window');

const MyVehicles = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //
  const renderModal = () => {
    return (
      <>
        <View style={styling.viewMain}>
          <View style={styling.view1}>
            <View style={styling.viewLine} />
            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop4]} />
            <Image source={Assets.alert} resizeMode="contain" />
            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop4]} />
            <Text style={styling.txtAlert}>{'Alert'}</Text>
            <View style={[styling.marginTop4]} />
            <Text style={styling.txtAreYouSure}>
              {labels.areYouDeleteVehicle}
            </Text>
            <View style={styling.viewBtn}>
              <Buton
                title={labels.yes}
                // onPress={toggleModal}
              />
              <View style={styling.width12} />
              <Buton
                backgroundColor={colors.colorWhite}
                title={labels.no}
                color={colors.black}
                borderWidth={1}
                onPress={toggleModal}
              />
            </View>
          </View>
        </View>
      </>
    );
  };
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
        centerTitle={labels.myVehicle}
        rightIcon1Onpress={() => {}}
      />
      <View style={styling.viewBorder} />
      <View style={[styling.paddingHorizontal45]}>
        <ImageBackground
          source={Assets.backImageProfile}
          style={{
            height: height,
            // padding: 22,
          }}
          resizeMode="contain">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styling.viewFlexDirection}>
              <View style={styling.width48Perc}>
                <View>
                  <Text style={styling.textName}>{labels.vehicleType}</Text>
                  <Text style={styling.textPlaceHolderEdit}>{'Mini'}</Text>
                </View>
              </View>
              <View style={styling.width48Perc}>
                <View>
                  <Text style={styling.textName}>{'Brand Name'}</Text>
                  <Text style={styling.textPlaceHolderEdit}>{'Mini'}</Text>
                </View>
              </View>
            </View>

            <View style={[styling.marginTop]} />

            <View style={styling.viewFlexDirection}>
              <View style={styling.width48Perc}>
                <View>
                  <Text style={styling.textName}>{'Vehicle Name'}</Text>
                  <Text style={styling.textPlaceHolderEdit}>{'Grey'}</Text>
                </View>
              </View>

              <View style={styling.width48Perc}>
                <View>
                  <Text style={styling.textName}>{'Vehicle Color'}</Text>
                  <Text style={styling.textPlaceHolderEdit}>{'Carson'}</Text>
                </View>
              </View>
            </View>
            <View style={[styling.marginTop]} />
            <View style={styling.viewFlexDirection}>
              <View>
                <Text style={styling.textName}>{'License plate Number'}</Text>
                <Text style={styling.textPlaceHolderEdit}>{'23-dsd'}</Text>
              </View>
            </View>

            <View style={[styling.marginTop]} />
            <View style={[styling.marginTop]} />
            <View style={styling.textSignup}>
              <Buton title={labels.editDetails} onPress={toggleModal} />
              <View style={styling.width12} />
              <Buton
                backgroundColor={colors.colorWhite}
                title={labels.deleteVehicle}
                color={colors.black}
                borderWidth={1}
                // onPress={onPressCancel}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      <CustomModal
        // backdropColor={colors.transparent}
        Children={renderModal()}
        isModalVisible={isModalVisible}
        onBackdropPress={() => {
          toggleModal();
        }}
      />
    </View>
  );
};

export default MyVehicles;
