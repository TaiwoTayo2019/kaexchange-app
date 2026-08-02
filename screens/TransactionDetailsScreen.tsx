import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TransactionDetailsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Transaction Details</Text>

      <View style={styles.mainCard}>
        <View style={styles.logoBox}>
          <Text style={styles.logoK}>K</Text>
        </View>
        <Text style={styles.amount}>$15.00</Text>
        <Text style={styles.description}>
          Credit transaction from MARK AARON JACOBS
        </Text>
        <View style={styles.status}>
          <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
          <Text style={styles.statusText}>Successful</Text>
        </View>
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Credited to</Text>
          <Text style={styles.detailValue}>Dollar Account</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Transaction No.</Text>
          <Text style={styles.detailValue}>25643698767545454433</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Sender Details</Text>
          <Text style={styles.detailValue}>MARK AARON JACOBS via Apple Pay</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Transaction Date</Text>
          <Text style={styles.detailValue}>Feb 24th, 2026 2:24:56PM</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 40 },
  mainCard: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 40, alignItems: 'center', marginBottom: 24 },
  logoBox: {
    width: 72,
    height: 72,
    backgroundColor: '#00d4a0',   // ← Green background
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoK: {
    color: '#ffffff',
    fontSize: 45,
    fontWeight: '800',
  },
  amount: { fontSize: 42, fontWeight: '800', color: '#0d0d1a', marginBottom: 8 },
  description: { fontSize: 17, color: '#374151', textAlign: 'center', marginBottom: 24 },
  status: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  statusText: { color: '#00d4a0', fontWeight: '700', fontSize: 18 },
  detailsCard: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 24 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#e5e5e5' },
  detailLabel: { fontSize: 16, color: '#6b6b8a' },
  detailValue: { fontSize: 16, fontWeight: '600', color: '#0d0d1a', textAlign: 'right', maxWidth: '55%' },
});