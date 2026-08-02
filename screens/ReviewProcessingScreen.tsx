import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewProcessingScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <View style={styles.documentsStack}>
          <Ionicons name="document-text" size={120} color="#e6f0ff" style={styles.document1} />
          <Ionicons name="document-text" size={120} color="#d1e3ff" style={styles.document2} />
        </View>
        <View style={styles.magnifierContainer}>
          <Ionicons name="search" size={95} color="#7c3aed" />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>We are verifying and processing your identity</Text>

      {/* Description */}
      <Text style={styles.description}>
        We are reviewing your documents. This typically takes a few seconds but can take up to 24 hours in rare cases, feel free to close the app and we'll notify you once the review is complete.
      </Text>

      {/* Check items */}
      <View style={styles.checkContainer}>
        <View style={styles.checkRow}>
          <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
          <Text style={styles.checkText}>
            Your personal details including legal name, home address and date of birth.
          </Text>
        </View>

        <View style={styles.checkRow}>
          <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
          <Text style={styles.checkText}>
            The validity and legitimacy of your ID document.
          </Text>
        </View>
      </View>
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
    justifyContent: 'center',
    height: 280,
    marginTop: 60,
    marginBottom: 40,
    position: 'relative',
  },
  documentsStack: {
    position: 'relative',
  },
  document1: {
    transform: [{ rotate: '-12deg' }],
  },
  document2: {
    position: 'absolute',
    top: 25,
    left: 30,
    transform: [{ rotate: '8deg' }],
  },
  magnifierContainer: {
    position: 'absolute',
    bottom: 40,
    right: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0d0d1a',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6b6b8a',
    textAlign: 'center',
    marginBottom: 40,
  },
  checkContainer: {
    marginTop: 10,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    gap: 14,
  },
  checkText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
    lineHeight: 24,
  },
});