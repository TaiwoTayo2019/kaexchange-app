import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CurrencyConverterScreen() {
  const [fromAmount, setFromAmount] = useState('100.00');
  const [fromCurrency, setFromCurrency] = useState('GBP');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [rates, setRates] = useState<any>(null);
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);

  const currencies = [
    { code: 'GBP', symbol: '£', flag: '🇬🇧' },
    { code: 'USD', symbol: '$', flag: '🇺🇸' },
    { code: 'CAD', symbol: 'C$', flag: '🇨🇦' },
    { code: 'NGN', symbol: '₦', flag: '🇳🇬' },
  ];

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(() => {});
  }, []);

  const convertedAmount = rates && fromAmount
    ? (parseFloat(fromAmount) * (rates[toCurrency] / rates[fromCurrency])).toLocaleString('en-US', { minimumFractionDigits: 2 })
    : '0.00';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Convert</Text>
        <Text style={styles.subtitle}>Convert money from one currency to the other</Text>
      </View>

      {/* From */}
      <View style={styles.card}>
        <Text style={styles.label}>You are converting</Text>
        <View style={styles.amountRow}>
          <TextInput
            style={styles.amountInput}
            value={fromAmount}
            onChangeText={setFromAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.currencyPill} onPress={() => setShowFromModal(true)}>
            <Text style={styles.flag}>{currencies.find(c => c.code === fromCurrency)?.flag}</Text>
            <Text style={styles.currencyCode}>{fromCurrency}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.rateLine}>1 {fromCurrency} = {rates ? (rates.NGN / rates[fromCurrency]).toFixed(2) : '0.00'} NGN</Text>
      </View>

      {/* To */}
      <View style={styles.card}>
        <Text style={styles.label}>To</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amountInput}>{convertedAmount}</Text>
          <TouchableOpacity style={styles.currencyPill} onPress={() => setShowToModal(true)}>
            <Text style={styles.flag}>{currencies.find(c => c.code === toCurrency)?.flag}</Text>
            <Text style={styles.currencyCode}>{toCurrency}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.convertButton}>
        <Text style={styles.convertButtonText}>Convert</Text>
      </TouchableOpacity>

      {/* Modals */}
      <Modal visible={showFromModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>From</Text>
            {currencies.map(cur => (
              <TouchableOpacity key={cur.code} style={styles.modalItem} onPress={() => { setFromCurrency(cur.code); setShowFromModal(false); }}>
                <Text style={styles.modalFlag}>{cur.flag}</Text>
                <Text style={styles.modalCurrency}>{cur.code}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <Modal visible={showToModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>To</Text>
            {currencies.map(cur => (
              <TouchableOpacity key={cur.code} style={styles.modalItem} onPress={() => { setToCurrency(cur.code); setShowToModal(false); }}>
                <Text style={styles.modalFlag}>{cur.flag}</Text>
                <Text style={styles.modalCurrency}>{cur.code}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 40 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a' },
  subtitle: { fontSize: 16, color: '#6b6b8a', marginTop: 4 },
  card: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 24, marginBottom: 16 },
  label: { fontSize: 16, color: '#6b6b8a', marginBottom: 8 },
  amountRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  amountInput: { flex: 1, fontSize: 36, fontWeight: '700', color: '#0d0d1a' },
  currencyPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 999 },
  flag: { fontSize: 28, marginRight: 12 },
  currencyCode: { fontSize: 20, fontWeight: '700' },
  rateLine: { fontSize: 15, color: '#6b6b8a', marginTop: 12 },
  convertButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 30 },
  convertButtonText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginBottom: 24, textAlign: 'center' },
  modalItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  modalFlag: { fontSize: 28, marginRight: 16 },
  modalCurrency: { fontSize: 18, fontWeight: '600', color: '#0d0d1a' },
});