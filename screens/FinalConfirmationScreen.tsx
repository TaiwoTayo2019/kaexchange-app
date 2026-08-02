import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function FinalConfirmationScreen() {
  return (
    <View style={styles.container}>
      {/* Close button */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Protect Your Account</Text>

      {/* Your real uploaded illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/394tb7B6/Screenshot-2026-04-02-032030-removebg-preview.png' }}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Message */}
      <Text style={styles.message}>
        Your bank or other financial institutions will never call you and ask you to send personal details
      </Text>

      {/* Main Button */}
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedText}>I understand, proceed</Text>
      </TouchableOpacity>

      {/* Learn more link */}
      <TouchableOpacity>
        <Text style={styles.learnLink}>Learn about KaExchange</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 24,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 28,
    color: '#0d0d1a',
    fontWeight: '300',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    width: 240,
    height: 240,
    marginBottom: 40,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  message: {
    fontSize: 17,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  proceedButton: {
    backgroundColor: '#00d4a0',
    width: '100%',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  proceedText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
  learnLink: {
    color: '#00d4a0',
    fontSize: 16,
    fontWeight: '600',
  },
});