import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DocumentSuccessScreen() {
  return (
    <View style={styles.container}>
      {/* Top close button */}
      <TouchableOpacity style={styles.closeButton}>
        <Ionicons name="close" size={40} color="#0d0d1a" />
      </TouchableOpacity>

      {/* Success Illustration */}
      <View style={styles.illustrationContainer}>
        <View style={styles.successCircle}>
          <Ionicons name="checkmark" size={80} color="#ffffff" />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Document successfully uploaded</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Document meets all criteria for verification, you will be notified soon.
      </Text>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedText}>Proceed to selfie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 24,
  },
  illustrationContainer: {
    marginTop: 60,
    marginBottom: 40,
  },
  successCircle: {
    width: 160,
    height: 160,
    backgroundColor: '#00d4a0',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00d4a0',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    color: '#6b6b8a',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  proceedButton: {
    backgroundColor: '#00d4a0',
    width: '100%',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedText: {
    color: '#0d0d1a',
    fontSize: 20,
    fontWeight: '700',
  },
});