import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UnsupportedDocumentScreen() {
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

      {/* Preview Area */}
      <View style={styles.previewContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/394tb7B6/Screenshot-2026-04-02-032030-removebg-preview.png' }}
          style={styles.previewImage}
          resizeMode="contain"
        />
      </View>

      {/* Content */}
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>Photo preview</Text>
        
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={28} color="#ef4444" />
          <Text style={styles.errorText}>
            This document type is not accepted for verification.
          </Text>
        </View>

        {/* Try Again Button */}
        <TouchableOpacity style={styles.tryAgainButton}>
          <Text style={styles.tryAgainText}>Try again</Text>
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 20,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
    gap: 12,
  },
  errorText: {
    fontSize: 16,
    color: '#ef4444',
    flex: 1,
  },
  tryAgainButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tryAgainText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});