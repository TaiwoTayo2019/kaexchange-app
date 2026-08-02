import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LocalTransfersLimitScreen() {
  const [selectedCurrency, setSelectedCurrency] = useState('GBP');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const currencies = [
    { code: 'GBP', symbol: '£' },
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'NGN', symbol: '₦' },
  ];

  const [dailyLimit, setDailyLimit] = useState('10000.00');
  const [singleLimit, setSingleLimit] = useState('2000.00');

  const currentCurrency = currencies.find(c => c.code === selectedCurrency) || currencies[0];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Local Transfers</Text>

      {/* Currency Selector */}
      <Text style={styles.label}>Select currency</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setShowCurrencyDropdown(!showCurrencyDropdown)}>
        <Text style={styles.dropdownText}>{currentCurrency.symbol} {currentCurrency.code}</Text>
        <Ionicons name={showCurrencyDropdown ? "chevron-up" : "chevron-down"} size={20} color="#6b6b8a" />
      </TouchableOpacity>

      {showCurrencyDropdown && (
        <View style={styles.dropdownList}>
          {currencies.map((cur) => (
            <TouchableOpacity
              key={cur.code}
              style={styles.dropdownItem}
              onPress={() => {
                setSelectedCurrency(cur.code);
                setShowCurrencyDropdown(false);
              }}
            >
              <Text style={styles.dropdownItemText}>{cur.symbol} {cur.code}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Daily Limit */}
      <View style={styles.limitRow}>
        <Text style={styles.label}>Daily limit</Text>
        <TextInput 
          style={styles.amountInput} 
          value={dailyLimit} 
          onChangeText={setDailyLimit}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.maxText}>Maximum amount {currentCurrency.symbol}{dailyLimit}</Text>

      {/* Single Transaction Limit */}
      <View style={styles.limitRow}>
        <Text style={styles.label}>Single transaction limit</Text>
        <TextInput 
          style={styles.amountInput} 
          value={singleLimit} 
          onChangeText={setSingleLimit}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.maxText}>Maximum amount {currentCurrency.symbol}{singleLimit}</Text>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { alignItems: 'flex-end', marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 50 },
  label: { fontSize: 17, color: '#374151' },
  dropdown: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 16, paddingHorizontal: 20, height: 62, marginBottom: 8 },
  dropdownText: { flex: 1, fontSize: 18, color: '#0d0d1a' },
  dropdownList: { backgroundColor: '#f4f4f8', borderRadius: 16, marginBottom: 28, padding: 8 },
  dropdownItem: { paddingVertical: 16, paddingHorizontal: 20 },
  dropdownItemText: { fontSize: 18, color: '#0d0d1a' },
  limitRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  amountInput: { backgroundColor: '#ffffff', borderRadius: 12, paddingHorizontal: 16, height: 52, width: 160, fontSize: 18, textAlign: 'right' },
  maxText: { fontSize: 14, color: '#6b6b8a', textAlign: 'right', marginBottom: 32 },
  saveButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 60 },
  saveText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});