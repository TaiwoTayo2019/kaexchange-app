import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IdentityVerificationInfoScreen() {
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
        To comply with financial regulations and prevent fraud and identity theft, we require both a photo of your ID and a selfie to verify your identity.
      </Text>

      {/* Tips Section (optional but useful) */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>What you need to provide:</Text>
        
        <View style={styles.tipRow}>
          <Ionicons name="card-outline" size={30} color="#00d4a0" />
          <Text style={styles.tipText}>A clear photo of your government-issued ID</Text>
        </View>

        <View style={styles.tipRow}>
          <Ionicons name="camera-outline" size={30} color="#00d4a0" />
          <Text style={styles.tipText}>A clear selfie of your face</Text>
        </View>
      </View>

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
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 24,
  },
  description: {
    fontSize: 17,
    lineHeight: 26,
    color: '#374151',
    marginBottom: 40,
  },
  tipsContainer: {
    marginBottom: 60,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0d0d1a',
    marginBottom: 16,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 16,
  },
  tipText: {
    fontSize: 16,
    color: '#6b6b8a',
    flex: 1,
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