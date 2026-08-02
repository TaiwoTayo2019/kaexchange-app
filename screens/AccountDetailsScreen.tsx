import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccountDetailsScreen() {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAccountVisible, setIsAccountVisible] = useState(true);

  const baseBalanceNGN = 20000000;
  const accountNumber = "0123456789";

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00d4a0" />
        <Text style={{ marginTop: 20, color: '#6b6b8a' }}>Loading balances...</Text>
      </View>
    );
  }

  const currencies = [
    { code: 'GBP', symbol: '£', flag: '🇬🇧' },
    { code: 'USD', symbol: '$', flag: '🇺🇸' },
    { code: 'CAD', symbol: 'C$', flag: '🇨🇦' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Account Details</Text>

      {/* Main NGN Account Card */}
      <View style={styles.mainCard}>
        <View style={styles.cardHeader}>
          <View style={styles.smallLogoBox}>
            <Text style={styles.smallLogoK}>K</Text>
          </View>
          
        </View>

        <Text style={styles.balance}>₦20,000,000</Text>
        <Text style={styles.balanceSub}>20,000,000 Naira</Text>

        {/* Account Number with Hide/Unhide */}
        <View style={styles.accountRow}>
          <Text style={styles.accountLabel}>Account Number</Text>
          
          <View style={styles.accountNumberRow}>
            <Text style={styles.accountNumber}>
              {isAccountVisible ? accountNumber : '••••••••••'}
            </Text>

            <TouchableOpacity 
              onPress={() => setIsAccountVisible(!isAccountVisible)}
              style={styles.eyeButton}
            >
              <Ionicons 
                name={isAccountVisible ? "eye-off-outline" : "eye-outline"} 
                size={24} 
                color="#6b6b8a" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.copyButton}
          onPress={() => Alert.alert('Copied!', `Account number ${accountNumber} copied to clipboard`)}
        >
          <Ionicons name="copy-outline" size={20} color="#00d4a0" />
          <Text style={styles.copyText}>Copy account number</Text>
        </TouchableOpacity>
      </View>

      {/* Other Currencies */}
      <Text style={styles.sectionTitle}>Other Currencies</Text>

      {currencies.map((cur) => {
        const rate = rates ? rates[cur.code] || 1 : 1;
        const converted = (baseBalanceNGN * rate).toLocaleString('en-US');
        return (
          <View key={cur.code} style={styles.currencyCard}>
            <View style={styles.currencyRow}>
              <View style={styles.currencyInfo}>
                <Text style={styles.flag}>{cur.flag}</Text>
                <View>
                  <Text style={styles.currencyName}>{cur.code}</Text>
                </View>
              </View>
              <View style={styles.amountColumn}>
                <Text style={styles.amount}>{cur.symbol}{converted}</Text>
              </View>
            </View>
          </View>
        );
      })}

      {/* Security Note - Moved higher up with tighter spacing */}
      <Text style={styles.note}>
        Your account details are secured and only visible to you.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 40 },
  mainCard: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 28, marginBottom: 40 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  smallLogoBox: { width: 44, height: 44, backgroundColor: '#00d4a0', borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  smallLogoK: { color: '#ffffff', fontSize: 28, fontWeight: '800' },
  currencyName: { fontSize: 22, fontWeight: '700', color: '#0d0d1a' },
  balance: { fontSize: 42, fontWeight: '800', color: '#0d0d1a', marginBottom: 4 },
  balanceSub: { fontSize: 17, color: '#6b6b8a' },
  accountRow: { marginTop: 24, marginBottom: 16 },
  accountLabel: { fontSize: 14, color: '#6b6b8a', marginBottom: 4 },
  accountNumberRow: { flexDirection: 'row', alignItems: 'center' },
  accountNumber: { fontSize: 20, fontWeight: '700', color: '#0d0d1a', letterSpacing: 1, flex: 1 },
  eyeButton: { padding: 8 },
  copyButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 999, alignSelf: 'flex-start' },
  copyText: { marginLeft: 8, fontSize: 16, fontWeight: '700', color: '#00d4a0' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0d0d1a', marginBottom: 16 },
  currencyCard: { backgroundColor: '#f4f4f8', borderRadius: 20, padding: 20, marginBottom: 12 },
  currencyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  currencyInfo: { flexDirection: 'row', alignItems: 'center' },
  flag: { fontSize: 28, marginRight: 12 },
  amountColumn: { alignItems: 'flex-end' },
  amount: { fontSize: 20, fontWeight: '700', color: '#0d0d1a' },
  note: { 
    fontSize: 14, 
    color: '#6b6b8a', 
    textAlign: 'center', 
    marginTop: 24,     // ← Reduced from 40 to 24
    lineHeight: 22,
    marginBottom: 40 
  },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' },
});