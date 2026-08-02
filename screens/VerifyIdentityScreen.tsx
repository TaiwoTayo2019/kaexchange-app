import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyIdentityScreen() {
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

      {/* Title */}
      <Text style={styles.title}>Verify your identity</Text>

      {/* Description */}
      <Text style={styles.description}>
        To comply with financial regulations, prevent fraud and identity theft, we require a photo of your ID and selfie to verify your identity.
      </Text>

      {/* Tips for Photo ID */}
      <View style={styles.tipsCard}>
        <Text style={styles.tipsTitle}>Tips for photo ID</Text>
        
        <View style={styles.tipRow}>
          <Ionicons name="camera" size={24} color="#00d4a0" />
          <Text style={styles.tipText}>Ensure all texts in the ID is readable</Text>
        </View>
        
        <View style={styles.tipRow}>
          <Ionicons name="scan" size={24} color="#00d4a0" />
          <Text style={styles.tipText}>Make sure the entire ID is visible and there is no reflection on the ID.</Text>
        </View>
      </View>

      {/* Tips for Selfie */}
      <View style={styles.tipsCard}>
        <Text style={styles.tipsTitle}>Tips for selfie</Text>
        
        <View style={styles.tipRow}>
          <Ionicons name="sunny" size={24} color="#00d4a0" />
          <Text style={styles.tipText}>Use good lighting, keep face clearly visible.</Text>
        </View>
        
        <View style={styles.tipRow}>
          <Ionicons name="ban" size={24} color="#00d4a0" />
          <Text style={styles.tipText}>Remove anything obscuring your face (e.g glasses, hats, scarves).</Text>
        </View>
      </View>

      {/* Privacy Note */}
      <Text style={styles.privacyText}>
        By clicking "Continue", you agree to KaExchange partner to collect and analyze your biometric data for identity verification, and accept our privacy and retention policies.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
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
    marginBottom: 30,
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
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 16,
  },
  description: {
    fontSize: 17,
    lineHeight: 26,
    color: '#374151',
    marginBottom: 30,
  },
  tipsCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0d0d1a',
    marginBottom: 16,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 14,
  },
  tipText: {
    fontSize: 15,
    color: '#6b6b8a',
    flex: 1,
  },
  privacyText: {
    fontSize: 13,
    color: '#6b6b8a',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
    lineHeight: 20,
  },
  continueButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});