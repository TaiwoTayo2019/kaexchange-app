import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PhotoPreviewScreen() {
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

      {/* Preview Image Area */}
      <View style={styles.previewContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/394tb7B6/Screenshot-2026-04-02-032030-removebg-preview.png' }}
          style={styles.previewImage}
          resizeMode="contain"
        />
      </View>

      {/* Photo Preview Title */}
      <View style={styles.bottomSheet}>
        <Text style={styles.previewTitle}>Photo preview</Text>
        <Text style={styles.previewSubtitle}>
          Make sure that all the information on the document is visible and easy to read.
        </Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.readableButton}>
          <Text style={styles.readableText}>Document is readable</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.retakeButton}>
          <Text style={styles.retakeText}>Retake photo</Text>
        </TouchableOpacity>
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
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  previewImage: {
    width: '100%',
    height: 420,
    borderRadius: 16,
  },
  bottomSheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    paddingBottom: 40,
  },
  previewTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 8,
  },
  previewSubtitle: {
    fontSize: 15,
    color: '#6b6b8a',
    textAlign: 'center',
    marginBottom: 30,
  },
  readableButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  readableText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
  retakeButton: {
    borderWidth: 2,
    borderColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retakeText: {
    color: '#00d4a0',
    fontSize: 18,
    fontWeight: '700',
  },
});