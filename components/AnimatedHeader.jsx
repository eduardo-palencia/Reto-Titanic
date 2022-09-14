import React from 'react';
import { Animated, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 200;

const AnimatedHeader = ({ animatedValue, headerTitle, headerImage }) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View
      className='absolute z-10 top-0 left-0 right-0 bg-black'
      style={{
        height: headerHeight
      }}
    >
      <Image source={headerImage} className='absolute w-full h-full opacity-60' />
      <Text className='text-white text-2xl font-bold text-center py-4'> {headerTitle} </Text>
    </Animated.View>
  );
};

export default AnimatedHeader;
