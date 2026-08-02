import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationPreferencesScreen() {
  const [essentialEnabled, setEssentialEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);
  const [productEnabled, setProductEnabled] = useState(true);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Notification preferences</Text>

      {/* Essential Communications */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="mail" size={26} color="#0d0d1a" />
          <Text style={styles.sectionTitle}>Essential Communications</Text>
          <Switch
            value={essentialEnabled}
            onValueChange={setEssentialEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>
        <Text style={styles.sectionDescription}>
          Important account activity like deposits, withdrawals and transfer
        </Text>
        <Text style={styles.channels}>Email • Push • SMS</Text>
      </View>

      {/* Marketing Consent */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="megaphone" size={26} color="#0d0d1a" />
          <Text style={styles.sectionTitle}>Marketing Consent</Text>
          <Switch
            value={marketingEnabled}
            onValueChange={setMarketingEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>
        <Text style={styles.sectionDescription}>
          Latest promotions and offers from KaExchange that may interest you
        </Text>
        <Text style={styles.channels}>Email • Push</Text>
      </View>

      {/* Product Updates */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="rocket" size={26} color="#0d0d1a" />
          <Text style={styles.sectionTitle}>Product Updates</Text>
          <Switch
            value={productEnabled}
            onValueChange={setProductEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>
        <Text style={styles.sectionDescription}>
          Exciting new features and services on the KaExchange app
        </Text>
        <Text style={styles.channels}>Email • Push</Text>
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
    marginBottom: 50,
  },
  sectionCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 28,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0d0d1a',
    flex: 1,
    marginLeft: 16,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#6b6b8a',
    lineHeight: 24,
    marginBottom: 12,
  },
  channels: {
    fontSize: 15,
    color: '#00d4a0',
    fontWeight: '600',
  },
  updateButton: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  updateText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});