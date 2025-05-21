import React, { useEffect, useRef } from 'react';
import { Pressable, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type Props = {
  value: boolean;
  onValueChange: (val: boolean) => void;
};

export const ThemeToggleSwitch = ({ value, onValueChange }: Props) => {
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [anim, value]);

  const trackColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#CECECE', '#3A3A3A'],
  });

  return (
    <Pressable onPress={() => onValueChange(!value)}>
      <TrackContainer style={{ backgroundColor: trackColor }}>
        <IconWrapper>
          <Feather name="moon" size={16} color="#3A3A3A" />
        </IconWrapper>
        <IconWrapper>
          <Feather name="sun" size={16} color="#CECECE" />
        </IconWrapper>

        <AnimatedKnob />
      </TrackContainer>
    </Pressable>
  );
};

const TrackContainer = styled(Animated.View)`
  width: 64px;
  height: 32px;
  border-radius: 16px;
  padding: 0 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const AnimatedKnob = styled(Animated.View)`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  top: 4px;
`;

const IconWrapper = styled.View`
  z-index: 1;
`;
