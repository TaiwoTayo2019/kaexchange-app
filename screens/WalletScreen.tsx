import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WalletScreen() {
  const [selectedCurrency, setSelectedCurrency] = useState('NGN');
  const [showDropdown, setShowDropdown] = useState(false);
  const [rates, setRates] = useState<any>(null);
  const [balanceNGN, setBalanceNGN] = useState<number | null>(null); // ← Real balance from API
  const [loadingBalance, setLoadingBalance] = useState(true);

  // Simulate fetching real balance from backend
  useEffect(() => {
    setLoadingBalance(true);

    // Simulate API call delay (replace this with real fetch later)
    setTimeout(() => {
      setBalanceNGN(20000000); // ← This will come from your backend in production
      setLoadingBalance(false);
    }, 1200);
  }, []);

  // Fetch live exchange rates
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(err => console.error(err));
  }, []);

  if (loadingBalance || !balanceNGN) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00d4a0" />
        <Text style={{ marginTop: 20, color: '#6b6b8a' }}>Fetching your balance...</Text>
      </View>
    );
  }

  const currentRate = rates ? rates[selectedCurrency] || 1 : 1;
  const convertedBalance = (balanceNGN * currentRate).toLocaleString('en-US');

  const currencies = [
    { code: 'NGN', symbol: '₦', flag: '🇳🇬' },
    { code: 'USD', symbol: '$', flag: '🇺🇸' },
    { code: 'GBP', symbol: '£', flag: '🇬🇧' },
    { code: 'CAD', symbol: 'C$', flag: '🇨🇦' },
  ];

  const current = currencies.find(c => c.code === selectedCurrency) || currencies[0];

  const otherCurrencies = currencies.filter(c => c.code !== selectedCurrency);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>

      {/* Total Balance */}
      <Text style={styles.totalLabel}>Total Balance</Text>
      <Text style={styles.totalBalance}>
        {current.symbol}{convertedBalance}
      </Text>

      {/* Currency Selector */}
      <TouchableOpacity 
        style={styles.currencySelector} 
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <View style={styles.currencyPill}>
          <Text style={styles.currencyFlag}>{current.flag}</Text>
          <Text style={styles.currencyCode}>{selectedCurrency}</Text>
          <Ionicons name={showDropdown ? "chevron-up" : "chevron-down"} size={18} color="#0d0d1a" />
        </View>
      </TouchableOpacity>

      {/* Dropdown */}
      {showDropdown && (
        <View style={styles.dropdown}>
          {currencies.map((cur) => (
            <TouchableOpacity
              key={cur.code}
              style={styles.dropdownItem}
              onPress={() => {
                setSelectedCurrency(cur.code);
                setShowDropdown(false);
              }}
            >
              <Text style={styles.dropdownText}>
                {cur.flag} {cur.code}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-down" size={28} color="#00d4a0" />
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="add" size={28} color="#00d4a0" />
          <Text style={styles.actionText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-up" size={28} color="#00d4a0" />
          <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="swap-horizontal" size={28} color="#00d4a0" />
          <Text style={styles.actionText}>Convert</Text>
        </TouchableOpacity>
      </View>

      {/* Other Currency Balances */}
      <Text style={styles.sectionTitle}>Other Currencies</Text>

      {otherCurrencies.map((cur) => {
        const rate = rates ? rates[cur.code] || 1 : 1;
        const converted = (balanceNGN * rate).toLocaleString('en-US');
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

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>

      <View style={styles.recentRow}>
        <Ionicons name="arrow-up" size={24} color="#ef4444" />
        <View style={styles.recentContent}>
          <Text style={styles.recentTitle}>To Mark Aaron Jacobs</Text>
          <Text style={styles.recentTime}>6:17 PM</Text>
        </View>
        <Text style={styles.recentAmount}>-20,000.00 NGN</Text>
      </View>

      <View style={styles.recentRow}>
        <Ionicons name="logo-apple" size={24} color="#0d0d1a" />
        <View style={styles.recentContent}>
          <Text style={styles.recentTitle}>Topup with Apple Pay</Text>
          <Text style={styles.recentTime}>6:17 PM</Text>
        </View>
        <Text style={[styles.recentAmount, { color: '#00d4a0' }]}>+5,000.00 NGN</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 32, fontWeight: '800', color: '#0d0d1a' },
  totalLabel: { fontSize: 16, color: '#6b6b8a', marginBottom: 8 },
  totalBalance: { fontSize: 42, fontWeight: '800', color: '#0d0d1a', marginBottom: 4 },
  currencySelector: { alignSelf: 'flex-start', marginBottom: 30 },
  currencyPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 999 },
  currencyFlag: { fontSize: 22, marginRight: 8 },
  currencyCode: { fontSize: 17, fontWeight: '700' },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 },
  actionButton: { alignItems: 'center', width: 70 },
  actionText: { marginTop: 8, fontSize: 14, fontWeight: '600', color: '#0d0d1a' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0d0d1a', marginBottom: 16, marginTop: 20 },
  currencyCard: { backgroundColor: '#f4f4f8', borderRadius: 20, padding: 20, marginBottom: 12 },
  currencyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  currencyInfo: { flexDirection: 'row', alignItems: 'center' },
  smallLogoBox: { width: 36, height: 36, backgroundColor: '#00d4a0', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  smallLogoK: { color: '#ffffff', fontSize: 22, fontWeight: '800' },
  currencyName: { fontSize: 18, fontWeight: '700' },
  amountColumn: { alignItems: 'flex-end' },
  amount: { fontSize: 20, fontWeight: '700' },
  recentRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  recentContent: { flex: 1, marginLeft: 16 },
  recentTitle: { fontSize: 16, fontWeight: '600' },
  recentTime: { fontSize: 13, color: '#6b6b8a' },
  recentAmount: { fontSize: 16, fontWeight: '700', color: '#ef4444' },
  dropdown: { backgroundColor: '#f4f4f8', borderRadius: 16, padding: 8, marginBottom: 30, alignSelf: 'flex-start' },
  dropdownItem: { paddingVertical: 12, paddingHorizontal: 20 },
  dropdownText: { fontSize: 17, color: '#0d0d1a' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' },
});