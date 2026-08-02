import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerificationApprovedScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Success Illustration */}
      <View style={styles.illustrationContainer}>
        <View style={styles.successCircle}>
          <Ionicons name="checkmark" size={110} color="#ffffff" />
        </View>
      </View>

      {/* Verified Badge */}
      <View style={styles.verifiedBadge}>
        <Text style={styles.verifiedText}>YOU ARE VERIFIED</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>You're fully verified!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your identity has been successfully verified. You can now send and receive money instantly with KaExchange.
      </Text>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Making Transfers</Text>
      </TouchableOpacity>

      {/* Optional secondary link */}
      <TouchableOpacity style={styles.exploreLink}>
        <Text style={styles.exploreText}>Explore all features</Text>
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
  illustrationContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  successCircle: {
    width: 180,
    height: 180,
    backgroundColor: '#00d4a0',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00d4a0',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  verifiedBadge: {
    backgroundColor: '#0d0d1a',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 999,
    marginBottom: 24,
  },
  verifiedText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    fontSize: 32,
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
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
  exploreLink: {
    alignItems: 'center',
  },
  exploreText: {
    color: '#00d4a0',
    fontSize: 16,
    fontWeight: '600',
  },
});