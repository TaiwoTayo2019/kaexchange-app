import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordSuccessScreen() {
  return (
    <View style={styles.container}>
      {/* Success Illustration */}
      <View style={styles.illustration}>
        <View style={styles.successCircle}>
          <Ionicons name="checkmark" size={100} color="#ffffff" />
        </View>
      </View>

      <Text style={styles.title}>Password updated successfully!</Text>
      <Text style={styles.subtitle}>
        Your password has been changed. You can now log in with your new password.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Back to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 120,
    alignItems: 'center',
  },
  illustration: {
    marginBottom: 50,
  },
  successCircle: {
    width: 180,
    height: 180,
    backgroundColor: '#00d4a0',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 17,
    color: '#6b6b8a',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#00d4a0',
    width: '100%',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});