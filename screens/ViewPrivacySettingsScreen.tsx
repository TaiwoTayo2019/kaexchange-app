import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ViewPrivacySettingsScreen() {
  const [consentEnabled, setConsentEnabled] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>View privacy settings</Text>

      {/* Privacy Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="share-social" size={26} color="#0d0d1a" />
          <Text style={styles.cardTitle}>Social media and advertising platforms</Text>
          <Switch
            value={consentEnabled}
            onValueChange={setConsentEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>

        <Text style={styles.cardDescription}>
          I give consent to allow KaExchange to share my name, email address, and app events with social media platforms to allow KaExchange to advertise its services.
        </Text>
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 28,
    marginBottom: 60,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d0d1a',
    flex: 1,
    marginLeft: 16,
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 26,
    color: '#6b6b8a',
  },
  updateButton: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});