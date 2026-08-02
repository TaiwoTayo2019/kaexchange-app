import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';

export default function FaceVerificationAnimationScreen() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {/* Face with rotating ring */}
      <View style={styles.faceContainer}>
        <Image
          source={{ 
            uri: 'https://i.pravatar.cc/300?img=68'   // Realistic passport/selfie style face
          }}
          style={styles.faceImage}
        />

        {/* Rotating verification ring */}
        <Animated.View
          style={[
            styles.rotatingRing,
            { transform: [{ rotate: rotation }] },
          ]}
        />
      </View>

      {/* Processing Text */}
      <Text style={styles.processingText}>Processing....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  faceContainer: {
    position: 'relative',
    width: 260,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  faceImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: '#f4f4f8',
  },
  rotatingRing: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 10,
    borderColor: '#00d4a0',
    borderTopColor: 'transparent',
  },
  processingText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0d0d1a',
    letterSpacing: 1,
  },
});