import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConvertScreen() {
  const [fromAmount, setFromAmount] = useState('10000'); // default 10,000 for easy testing
  const [fromCurrency, setFromCurrency] = useState('USD'); // start with USD so you can test immediately
  const [toCurrency, setToCurrency] = useState('NGN');
  const [rates, setRates] = useState<any>(null);
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const currencies = [
    { code: 'NGN', symbol: '₦', flag: '🇳🇬' },
    { code: 'USD', symbol: '$', flag: '🇺🇸' },
    { code: 'GBP', symbol: '£', flag: '🇬🇧' },
    { code: 'CAD', symbol: 'C$', flag: '🇨🇦' },
  ];

  // Fetch live rates
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(() => {
        // Fallback rates if API fails
        setRates({
          NGN: 1,
          USD: 0.00069,
          GBP: 0.00052,
          CAD: 0.00095,
        });
      });
  }, []);

  // Correct live conversion
  const convertedAmount = useMemo(() => {
    if (!rates || !fromAmount) return 0;
    const fromRate = rates[fromCurrency] || 1;
    const toRate = rates[toCurrency] || 1;
    return parseFloat(fromAmount) * (toRate / fromRate);
  }, [fromAmount, fromCurrency, toCurrency, rates]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleConvert = () => {
    if (!fromAmount || parseFloat(fromAmount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }
    setShowSuccessModal(true);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Convert</Text>
      </View>

      {/* From */}
      <View style={styles.card}>
        <Text style={styles.label}>From</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.amountInput}
            value={fromAmount}
            onChangeText={setFromAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.currencySelector} onPress={() => setShowFromModal(true)}>
            <Text style={styles.flag}>{currencies.find(c => c.code === fromCurrency)?.flag}</Text>
            <Text style={styles.currencyCode}>{fromCurrency}</Text>
            <Ionicons name="chevron-down" size={18} color="#0d0d1a" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Swap */}
      <TouchableOpacity style={styles.swapButton} onPress={swapCurrencies}>
        <Ionicons name="swap-vertical" size={32} color="#00d4a0" />
      </TouchableOpacity>

      {/* To */}
      <View style={styles.card}>
        <Text style={styles.label}>To</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.amountInput}
            value={convertedAmount.toFixed(2)}
            editable={false}
          />
          <TouchableOpacity style={styles.currencySelector} onPress={() => setShowToModal(true)}>
            <Text style={styles.flag}>{currencies.find(c => c.code === toCurrency)?.flag}</Text>
            <Text style={styles.currencyCode}>{toCurrency}</Text>
            <Ionicons name="chevron-down" size={18} color="#0d0d1a" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Debug + Live Rate */}
      <View style={styles.rateInfo}>
        <Text style={styles.rateText}>
          1 {fromCurrency} = {(rates ? rates[toCurrency] / rates[fromCurrency] : 1).toFixed(4)} {toCurrency}
        </Text>
      </View>

      {/* Convert Button */}
      <TouchableOpacity style={styles.convertButton} onPress={handleConvert}>
        <Text style={styles.convertButtonText}>Convert Now</Text>
      </TouchableOpacity>

      {/* Success Modal */}
      <Modal visible={showSuccessModal} transparent animationType="fade">
        <View style={styles.successOverlay}>
          <View style={styles.successModal}>
            <Ionicons name="checkmark-circle" size={80} color="#00d4a0" />
            <Text style={styles.successTitle}>Conversion Successful!</Text>
            <Text style={styles.successAmount}>
              {fromAmount} {fromCurrency} → {convertedAmount.toFixed(2)} {toCurrency}
            </Text>
            <TouchableOpacity style={styles.successButton} onPress={() => setShowSuccessModal(false)}>
              <Text style={styles.successButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Currency Modals */}
      <Modal visible={showFromModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>From Currency</Text>
            {currencies.map((cur) => (
              <TouchableOpacity
                key={cur.code}
                style={styles.modalItem}
                onPress={() => { setFromCurrency(cur.code); setShowFromModal(false); }}
              >
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
            <Text style={styles.modalTitle}>To Currency</Text>
            {currencies.map((cur) => (
              <TouchableOpacity
                key={cur.code}
                style={styles.modalItem}
                onPress={() => { setToCurrency(cur.code); setShowToModal(false); }}
              >
                <Text style={styles.modalFlag}>{cur.flag}</Text>
                <Text style={styles.modalCurrency}>{cur.code}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 40 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a' },
  card: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 24, marginBottom: 12 },
  label: { fontSize: 16, color: '#6b6b8a', marginBottom: 8 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  amountInput: { flex: 1, fontSize: 32, fontWeight: '700', color: '#0d0d1a' },
  currencySelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 999 },
  flag: { fontSize: 24, marginRight: 8 },
  currencyCode: { fontSize: 18, fontWeight: '700' },
  swapButton: { alignSelf: 'center', backgroundColor: '#f4f4f8', width: 60, height: 60, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
  rateInfo: { alignItems: 'center', marginVertical: 20 },
  rateText: { fontSize: 15, color: '#6b6b8a' },
  convertButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 30 },
  convertButtonText: { fontSize: 18, fontWeight: '700', color: '#0d0d1a' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginBottom: 24, textAlign: 'center' },
  modalItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  modalFlag: { fontSize: 28, marginRight: 16 },
  modalCurrency: { fontSize: 18, fontWeight: '600', color: '#0d0d1a' },

  successOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  successModal: { backgroundColor: '#ffffff', borderRadius: 24, padding: 40, alignItems: 'center', width: '85%' },
  successTitle: { fontSize: 24, fontWeight: '700', color: '#0d0d1a', marginTop: 20, marginBottom: 8 },
  successAmount: { fontSize: 18, color: '#00d4a0', fontWeight: '600', marginBottom: 30 },
  successButton: { backgroundColor: '#00d4a0', height: 58, borderRadius: 999, width: '100%', alignItems: 'center', justifyContent: 'center' },
  successButtonText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});