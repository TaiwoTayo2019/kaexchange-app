import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PhotoIDCaptureScreen() {
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

      {/* Camera Preview Area */}
      <View style={styles.previewArea}>
        {/* Example ID Card */}
        <View style={styles.idCardContainer}>
          <View style={styles.idCard}>

          </View>
        </View>

        {/* Capture Button */}
        <TouchableOpacity style={styles.captureButton}>
          <View style={styles.captureCircle} />
        </TouchableOpacity>
      </View>

      {/* Instruction Text */}
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionTitle}>Click to capture</Text>
        <Text style={styles.instructionSubtitle}>
          Take a picture of your passport data page, driver's license or National Identity Number data page with your camera.
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
  idCardContainer: {
    width: 280,
    height: 180,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  idCard: {
    width: '90%',
    height: '80%',
    backgroundColor: '#6b3aed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idCardText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 4,
  },
  idCardSubText: {
    color: '#ffffff',
    fontSize: 10,
    marginTop: 8,
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
    fontSize: 20,
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