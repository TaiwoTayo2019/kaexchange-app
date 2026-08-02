import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CompleteSetupScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Title */}
      <Text style={styles.title}>Complete your setup</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        The following information is required to activate your international account.
      </Text>

      {/* DONE Section */}
      <Text style={styles.sectionHeader}>DONE</Text>

      <View style={styles.doneItem}>
        <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
        <Text style={styles.doneText}>Your email has been verified</Text>
      </View>

      <View style={styles.doneItem}>
        <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
        <Text style={styles.doneText}>Your address information</Text>
      </View>

      <View style={styles.doneItem}>
        <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
        <Text style={styles.doneText}>Submit your BVN</Text>
      </View>

      {/* NEXT Section */}
      <Text style={styles.sectionHeader}>NEXT</Text>

      <View style={styles.nextCard}>
        <Text style={styles.nextTitle}>Verify your identity</Text>
        <Text style={styles.nextDescription}>
          Verify your identity and comply with regulations.{'\n'}
          Your information is processed securely.
        </Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,        // ← more side padding
    paddingTop: 80,               // ← more top space
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b6b8a',
    lineHeight: 28,               // ← better readability
    marginBottom: 50,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 24,
    letterSpacing: 1,
  },
  doneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,             // ← more space between done items
    gap: 16,
  },
  doneText: {
    fontSize: 17,
    color: '#374151',
    flex: 1,
  },
  nextCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 32,                  // ← much more internal padding
    marginTop: 8,
  },
  nextTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0d0d1a',
    marginBottom: 16,
  },
  nextDescription: {
    fontSize: 16,
    color: '#6b6b8a',
    lineHeight: 28,
    marginBottom: 40,
  },
  continueButton: {
    backgroundColor: '#00d4a0',
    height: 62,                   // ← slightly taller button
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