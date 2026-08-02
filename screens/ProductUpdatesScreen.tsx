import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductUpdatesScreen() {
  const [allowNotifications, setAllowNotifications] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Product Updates</Text>
      <Text style={styles.subtitle}>
        Exciting new features and services on the KaExchange app
      </Text>

      {/* Allow these notifications */}
      <View style={styles.optionCard}>
        <View style={styles.optionRow}>
          <Text style={styles.optionTitle}>Allow these notifications</Text>
          <Switch
            value={allowNotifications}
            onValueChange={setAllowNotifications}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      {/* Email */}
      <View style={styles.optionCard}>
        <View style={styles.optionRow}>
          <Ionicons name="mail" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>Email</Text>
          <Switch
            value={emailEnabled}
            onValueChange={setEmailEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      {/* Push */}
      <View style={styles.optionCard}>
        <View style={styles.optionRow}>
          <Ionicons name="notifications" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>Push</Text>
          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneText}>Done</Text>
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
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b6b8a',
    lineHeight: 26,
    marginBottom: 50,
  },
  optionCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 20,
    marginBottom: 16,
    padding: 24,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d0d1a',
  },
  doneButton: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  doneText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});