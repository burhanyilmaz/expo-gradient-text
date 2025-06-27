import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export interface GradientTextProps extends Omit<TextProps, 'style'> {
  children: React.ReactNode;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<TextStyle>;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  colors = ['#FF6B6B', '#4ECDC4'], 
  start = { x: 0, y: 0 }, 
  end = { x: 1, y: 0 },
  style = {},
  ...textProps 
}) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[{ backgroundColor: 'transparent' }, style]} {...textProps}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={colors as any}
        start={start}
        end={end}
        style={style}
      >
        <Text style={[style, { opacity: 0 }]} {...textProps}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText; 