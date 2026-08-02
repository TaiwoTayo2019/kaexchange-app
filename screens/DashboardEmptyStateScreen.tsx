import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardEmptyStateScreen() {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const corridors = [
    { flag: '🇬🇧', code: 'GBP', rate: rates ? (rates.NGN / rates.GBP).toFixed(0) : '1974' },
    { flag: '🇺🇸', code: 'USD', rate: rates ? (rates.NGN / rates.USD).toFixed(0) : '1450' },
    { flag: '🇨🇦', code: 'CAD', rate: rates ? (rates.NGN / rates.CAD).toFixed(0) : '1050' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header / Greeting */}
      <View style={styles.header}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Hi, Mark</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>My Accounts</Text>

      <View style={styles.accountsRow}>
        <View style={styles.ngnCard}>
          <Text style={styles.flag}>🇳🇬</Text>
          <Text style={styles.accountType}>NGN Accounts</Text>
          <Text style={styles.balance}>0.00</Text>
        </View>

        <View style={styles.addCard}>
          <Ionicons name="add" size={40} color="#6b6b8a" />
          <Text style={styles.addText}>Tap to add account</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionBtnText}>Add money</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionBtnText}>Send money</Text></TouchableOpacity>
      </View>

      <Text style={styles.transactionsTitle}>Transactions</Text>
      <Text style={styles.emptyTitle}>No transaction activity</Text>
      <Text style={styles.emptySubtitle}>Your recent transaction activity will show here when you send, receive or deposit money.</Text>

      {/* Account Information with 3 Corridors */}
      <Text style={styles.sectionTitle}>Account information</Text>

      <View style={styles.corridorsContainer}>
        {corridors.map((item, index) => (
          <View key={index} style={styles.corridorCard}>
            <View style={styles.corridorRow}>
              <Text style={styles.flag}>{item.flag}</Text>
              <Text style={styles.arrow}>→</Text>
              <Text style={styles.flag}>🇳🇬</Text>
            </View>
            <Text style={styles.corridorRate}>1 {item.code} = {item.rate} NGN</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  greetingBox: { backgroundColor: '#f4f4f8', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 999 },
  greeting: { fontSize: 18, fontWeight: '700', color: '#0d0d1a' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0d0d1a', marginTop: 40, marginBottom: 16 },
  accountsRow: { flexDirection: 'row', gap: 16 },
  ngnCard: { flex: 1, backgroundColor: '#e0f7f0', borderRadius: 20, padding: 20 },
  flag: { fontSize: 32 },
  accountType: { fontSize: 16, marginTop: 12, color: '#0d0d1a' },
  balance: { fontSize: 32, fontWeight: '800', marginTop: 8 },
  addCard: { flex: 1, backgroundColor: '#f4f4f8', borderRadius: 20, alignItems: 'center', justifyContent: 'center', padding: 20 },
  addText: { marginTop: 12, color: '#6b6b8a', textAlign: 'center' },
  actionButtons: { flexDirection: 'row', gap: 12, marginTop: 20 },
  actionBtn: { flex: 1, backgroundColor: '#f4f4f8', paddingVertical: 16, borderRadius: 999, alignItems: 'center' },
  actionBtnText: { fontWeight: '700', color: '#0d0d1a' },
  transactionsTitle: { fontSize: 18, fontWeight: '700', marginTop: 40 },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: '#0d0d1a', marginTop: 30, textAlign: 'center' },
  emptySubtitle: { fontSize: 15, color: '#6b6b8a', textAlign: 'center', lineHeight: 24, marginTop: 8 },

  /* New Corridors Section */
  corridorsContainer: { flexDirection: 'row', gap: 12 },
  corridorCard: { 
    flex: 1, 
    backgroundColor: '#f4f4f8', 
    borderRadius: 16, 
    padding: 16, 
    alignItems: 'center' 
  },
  corridorRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  arrow: { fontSize: 18, color: '#6b6b8a', marginHorizontal: 8 },
  corridorRate: { fontSize: 15, fontWeight: '700', color: '#0d0d1a', textAlign: 'center' },
});