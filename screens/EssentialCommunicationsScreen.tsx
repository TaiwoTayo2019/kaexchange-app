import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EssentialCommunicationsScreen() {
  const [allowNotifications, setAllowNotifications] = useState(true);
  const [accountEmail, setAccountEmail] = useState(true);
  const [accountPush, setAccountPush] = useState(true);
  const [accountSMS, setAccountSMS] = useState(true);
  const [supportEmail, setSupportEmail] = useState(true);
  const [supportPush, setSupportPush] = useState(true);
  const [supportSMS, setSupportSMS] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Essential Communications</Text>
      <Text style={styles.subtitle}>
        Important account activity like deposits, withdrawals and transfer
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

      {/* Account Information */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Account information</Text>

        <View style={styles.optionRow}>
          <Ionicons name="mail" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>Email</Text>
          <Switch value={accountEmail} onValueChange={setAccountEmail} trackColor={{ false: '#e5e5e5', true: '#00d4a0' }} thumbColor="#ffffff" />
        </View>

        <View style={styles.optionRow}>
          <Ionicons name="notifications" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>Push</Text>
          <Switch value={accountPush} onValueChange={setAccountPush} trackColor={{ false: '#e5e5e5', true: '#00d4a0' }} thumbColor="#ffffff" />
        </View>

        <View style={styles.optionRow}>
          <Ionicons name="chatbubble" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>SMS</Text>
          <Switch value={accountSMS} onValueChange={setAccountSMS} trackColor={{ false: '#e5e5e5', true: '#00d4a0' }} thumbColor="#ffffff" />
        </View>
      </View>

      {/* Customer Support */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Customer support</Text>

        <View style={styles.optionRow}>
          <Ionicons name="mail" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>Email</Text>
          <Switch value={supportEmail} onValueChange={setSupportEmail} trackColor={{ false: '#e5e5e5', true: '#00d4a0' }} thumbColor="#ffffff" />
        </View>

        <View style={styles.optionRow}>
          <Ionicons name="notifications" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>Push</Text>
          <Switch value={supportPush} onValueChange={setSupportPush} trackColor={{ false: '#e5e5e5', true: '#00d4a0' }} thumbColor="#ffffff" />
        </View>

        <View style={styles.optionRow}>
          <Ionicons name="chatbubble" size={24} color="#0d0d1a" />
          <Text style={styles.optionTitle}>SMS</Text>
          <Switch value={supportSMS} onValueChange={setSupportSMS} trackColor={{ false: '#e5e5e5', true: '#00d4a0' }} thumbColor="#ffffff" />
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
  sectionCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 20,
    marginBottom: 24,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0d0d1a',
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d0d1a',
    flex: 1,
    marginLeft: 16,
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