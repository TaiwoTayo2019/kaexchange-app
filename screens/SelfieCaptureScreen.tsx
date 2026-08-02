import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SelfieCaptureScreen() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="flash-outline" size={28} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="close" size={32} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Camera Preview Area with Face Guide */}
      <View style={styles.previewArea}>
        {/* Face circle guide */}
        <View style={styles.faceGuide}>
          <View style={styles.faceCircle} />
        </View>

        {/* Capture Button */}
        <TouchableOpacity style={styles.captureButton}>
          <View style={styles.captureCircle} />
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionTitle}>Take a selfie</Text>
        <Text style={styles.instructionSubtitle}>
          Make sure your face is clearly visible and well-lit.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  previewArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  faceGuide: {
    width: 240,
    height: 240,
    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceCircle: {
    width: 270,
    height: 270,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: '#00d4a0',
  },
  captureButton: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
  },
  instructionContainer: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  instructionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 8,
  },
  instructionSubtitle: {
    fontSize: 15,
    color: '#6b6b8a',
    textAlign: 'center',
  },
});