import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styling from './Styling';
import CustomHeader from '../../components/CustomHeader';
import {Assets} from '../../assets';
import {labels} from '../../config/Labels';
import * as Progress from 'react-native-progress';
import {Rating} from 'react-native-ratings';
import RatingProfile from '../../components/RatingProfile';

const {width, height} = Dimensions.get('window');

const RatingsReviews = ({navigation}) => {
  const ratingCompleted = rating => {
    alert(rating);
  };

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
        centerTitle={labels.ratingsReviews}
      />
      <View style={styling.viewBorder} />
      <View style={styling.view1}>
        <Text style={styling.textPasswordRecovery}>{'4.5'}</Text>

        <View>
          <Rating
            readonly={true}
            ratingColor="#3498db"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            imageSize={30}
            onFinishRating={e => ratingCompleted(e)}
          />
        </View>
        <Text style={[styling.textView]}>{'40 Reviews'}</Text>
        <View style={styling.viewRating}>
          <Text style={[styling.textPercentage]}>{'5 Star'}</Text>
          <View>
            <Progress.Bar
              progress={0.3}
              width={height / 3.5}
              color="#C9811F"
              height={10}
            />
          </View>

          <Text style={[styling.textPercentage]}>{'50 %'}</Text>
        </View>
        <View style={styling.padding12} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styling.padding12} />
          <RatingProfile
            title={'Chris'}
            Description="Lorem Ipsum is simply dummy text of the printing and                 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
            image={Assets.dummyImageSquare}
            date={'23/23/2021'}
          />
          <View style={styling.padding12} />
          <RatingProfile
            title={'Chris'}
            Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
            image={Assets.dummyImageSquare}
            date={'23/23/2021'}
          />
          <View style={styling.padding12} />
          <RatingProfile
            title={'Chris'}
            Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
            image={Assets.dummyImageSquare}
            date={'23/23/2021'}
          />
          <View style={styling.padding12} />
          <RatingProfile
            title={'Chris'}
            Description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
            image={Assets.dummyImageSquare}
            date={'23/23/2021'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default RatingsReviews;
