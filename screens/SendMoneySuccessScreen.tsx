import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneySuccessScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.successIcon}>
        <Ionicons name="checkmark-circle" size={120} color="#00d4a0" />
      </View>

      <Text style={styles.title}>You sent</Text>
      <Text style={styles.amount}>-5.00 GBP</Text>
      <Text style={styles.date}>26 Dec 2025, 6:15 PM</Text>

      <View style={styles.tabs}>
        
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Send Again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Report a problem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  successIcon: { alignItems: 'center', marginTop: 40, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', color: '#0d0d1a' },
  amount: { fontSize: 42, fontWeight: '800', textAlign: 'center', color: '#ef4444', marginVertical: 8 },
  date: { fontSize: 16, color: '#6b6b8a', textAlign: 'center' },
  tabs: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 6, marginTop: 50, marginBottom: 40 },
  tab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 999 },
  activeTab: { backgroundColor: '#ffffff' },
  activeTabText: { fontWeight: '700', color: '#0d0d1a' },
  tabText: { color: '#6b6b8a' },
  actionButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  actionButtonText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
  secondaryButton: { borderWidth: 2, borderColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  secondaryButtonText: { color: '#00d4a0', fontSize: 18, fontWeight: '700' },
});