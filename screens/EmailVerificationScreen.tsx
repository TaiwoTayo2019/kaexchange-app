import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function EmailVerificationScreen() {
  const openEmailApp = async () => {
    try {
      await Linking.openURL('mailto:'); // Opens the user's default email app (Gmail, Outlook, etc.)
    } catch (error) {
      Alert.alert('Could not open email', 'Please open your email app manually.');
    }
  };

  const resendEmail = () => {
    Alert.alert('Email Resent', 'A new verification email has been sent to youremail@mail.com');
    // In production this will call your backend to resend the email
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Get Help</Text>
        </TouchableOpacity>
      </View>

      {/* Envelope Icon */}
      <View style={styles.iconContainer}>
        <Ionicons name="mail" size={110} color="#00d4a0" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Check your email</Text>

      {/* Message */}
      <Text style={styles.message}>
        We sent a verification mail to{' '}
        <Text style={styles.email}>youremail@mail.com</Text>, click the link inside the email to verify your email address. Make sure to check your spam folder if you don't see it in your inbox.
      </Text>

      {/* Change email link */}
      <TouchableOpacity style={styles.changeLink}>
        <Text style={styles.changeText}>Not you? Change email</Text>
      </TouchableOpacity>

      {/* Open my email Button – NOW FUNCTIONAL */}
      <TouchableOpacity style={styles.openButton} onPress={openEmailApp}>
        <Text style={styles.openText}>Open my email</Text>
      </TouchableOpacity>

      {/* Resend email Button */}
      <TouchableOpacity style={styles.resendButton} onPress={resendEmail}>
        <Text style={styles.resendText}>Resend email</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  helpButton: {
    backgroundColor: '#00d4a0',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
  },
  helpText: {
    color: '#0d0d1a',
    fontWeight: '700',
    fontSize: 14,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6b6b8a',
    textAlign: 'center',
    marginBottom: 30,
  },
  email: {
    fontWeight: '700',
    color: '#0d0d1a',
  },
  changeLink: {
    alignItems: 'center',
    marginBottom: 50,
  },
  changeText: {
    color: '#00d4a0',
    fontSize: 16,
    fontWeight: '600',
  },
  openButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  openText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
  resendButton: {
    borderWidth: 2,
    borderColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendText: {
    color: '#00d4a0',
    fontSize: 18,
    fontWeight: '700',
  },
});