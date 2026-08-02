import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardActiveScreen() {
  const [rates, setRates] = useState<any>(null);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(() => {});
  }, []);

  const gbpAmount = 10000;

  // Live conversion with proper commas
  const usdAmount = rates 
    ? (gbpAmount * (rates.USD / rates.GBP)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
    : '13,100.00';

  const cadAmount = rates 
    ? (gbpAmount * (rates.CAD / rates.GBP)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
    : '17,900.00';

  const ngnAmount = rates 
    ? Math.round(gbpAmount * (rates.NGN / rates.GBP)).toLocaleString('en-US') 
    : '19,150,000';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Hi, Mark</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>My Accounts</Text>

      {/* Primary GBP Account */}
      <View style={styles.primaryCard}>
        <Text style={styles.flag}>🇬🇧</Text>
        <Text style={styles.accountType}>GBP Balance</Text>
        <Text style={styles.primaryBalance}>10,000</Text>
      </View>

      {/* Other Currencies - Now with commas */}
      <View style={styles.otherCurrencies}>
        <View style={styles.currencyLine}>
          <Text style={styles.smallFlag}>🇺🇸</Text>
          <Text style={styles.currencyName}>USD</Text>
          <Text style={styles.currencyBalance}>${usdAmount}</Text>
        </View>

        <View style={styles.currencyLine}>
          <Text style={styles.smallFlag}>🇨🇦</Text>
          <Text style={styles.currencyName}>CAD</Text>
          <Text style={styles.currencyBalance}>C${cadAmount}</Text>
        </View>

        <View style={styles.currencyLine}>
          <Text style={styles.smallFlag}>🇳🇬</Text>
          <Text style={styles.currencyName}>NGN</Text>
          <Text style={styles.currencyBalance}>{ngnAmount}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Send money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Add money</Text>
        </TouchableOpacity>
      </View>

      {/* Send again to */}
      <Text style={styles.subTitle}>Send again to</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentRow}>
        {['Mark J', 'Mark J', 'Mark J'].map((name, i) => (
          <View key={i} style={styles.recipientCard}>
            <View style={styles.recipientAvatar}>
              <Text style={styles.recipientInitial}>MJ</Text>
            </View>
            <Text style={styles.recipientName}>{name}</Text>
            <Text style={styles.bankName}>Gtbank Plc</Text>
          </View>
        ))}
      </ScrollView>

      {/* Transactions */}
      <View style={styles.transactionsHeader}>
        <Text style={styles.sectionTitle}>Transactions</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.transactionItem}>
        <Ionicons name="arrow-up" size={24} color="#ef4444" />
        <View style={styles.transactionContent}>
          <Text style={styles.transactionTitle}>To Mark Aaron Jacobs</Text>
          <Text style={styles.transactionTime}>25 Dec 2025, 6:17 PM</Text>
        </View>
        <Text style={styles.negativeAmount}>-120.00 GBP</Text>
      </View>

      <View style={styles.transactionItem}>
        <Ionicons name="arrow-down" size={24} color="#00d4a0" />
        <View style={styles.transactionContent}>
          <Text style={styles.transactionTitle}>From Mark Aaron Jacobs</Text>
          <Text style={styles.transactionTime}>25 Dec 2025, 6:17 PM</Text>
        </View>
        <Text style={styles.positiveAmount}>+120.00 GBP</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  greetingBox: { backgroundColor: '#f4f4f8', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 999 },
  greeting: { fontSize: 18, fontWeight: '700', color: '#0d0d1a' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0d0d1a', marginTop: 30, marginBottom: 16 },
  
  primaryCard: { 
    backgroundColor: '#e0f7f0', 
    borderRadius: 24, 
    padding: 28, 
    marginBottom: 24,
    alignItems: 'center' 
  },
  flag: { fontSize: 48, marginBottom: 8 },
  accountType: { fontSize: 17, color: '#0d0d1a', marginBottom: 8 },
  primaryBalance: { fontSize: 42, fontWeight: '800', color: '#0d0d1a' },

  otherCurrencies: { marginBottom: 30 },
  currencyLine: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f4f4f8', 
    borderRadius: 16, 
    padding: 18, 
    marginBottom: 12 
  },
  smallFlag: { fontSize: 28, marginRight: 16 },
  currencyName: { fontSize: 18, fontWeight: '600', flex: 1 },
  currencyBalance: { fontSize: 18, fontWeight: '700' },

  actionRow: { flexDirection: 'row', gap: 12, marginBottom: 40 },
  actionButton: { flex: 1, backgroundColor: '#f4f4f8', paddingVertical: 18, borderRadius: 999, alignItems: 'center' },
  actionText: { fontWeight: '700', color: '#0d0d1a', fontSize: 17 },

  subTitle: { fontSize: 17, fontWeight: '700', marginBottom: 16 },
  recentRow: { flexDirection: 'row', gap: 16, marginBottom: 40 },
  recipientCard: { alignItems: 'center', width: 90 },
  recipientAvatar: { width: 56, height: 56, backgroundColor: '#00d4a0', borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  recipientInitial: { color: '#ffffff', fontSize: 22, fontWeight: '700' },
  recipientName: { marginTop: 8, fontSize: 14, fontWeight: '600' },
  bankName: { fontSize: 12, color: '#6b6b8a' },

  transactionsHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 },
  seeAll: { color: '#00d4a0', fontWeight: '600' },
  transactionItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 20, padding: 18, marginBottom: 12 },
  transactionContent: { flex: 1, marginLeft: 16 },
  transactionTitle: { fontSize: 16, fontWeight: '600' },
  transactionTime: { fontSize: 13, color: '#6b6b8a' },
  negativeAmount: { color: '#ef4444', fontWeight: '700' },
  positiveAmount: { color: '#00d4a0', fontWeight: '700' },
});