import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyFormScreen() {
  const [youSendAmount, setYouSendAmount] = useState('5000');
  const [youSendCurrency, setYouSendCurrency] = useState('GBP');
  const [receiverGetsCurrency, setReceiverGetsCurrency] = useState('NGN');
  const [rates, setRates] = useState<any>(null);
  const [showYouSendModal, setShowYouSendModal] = useState(false);
  const [showReceiverModal, setShowReceiverModal] = useState(false);

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

  const convertedAmount = rates && youSendAmount
    ? (parseFloat(youSendAmount) * (rates[receiverGetsCurrency] / rates[youSendCurrency])).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : '0.00';

  // Get current currency data for "Paying with" section
  const currentCurrency = currencies.find(c => c.code === youSendCurrency);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Send money</Text>
      </View>

      {/* You Send */}
      <View style={styles.formCard}>
        <Text style={styles.label}>You send</Text>
        <View style={styles.amountRow}>
          <TextInput
            style={styles.amountInput}
            value={youSendAmount}
            onChangeText={setYouSendAmount}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.currencyPill} onPress={() => setShowYouSendModal(true)}>
            <Text style={styles.flag}>{currentCurrency?.flag}</Text>
            <Text style={styles.currencyCode}>{youSendCurrency}</Text>
            <Ionicons name="chevron-down" size={18} color="#0d0d1a" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Receiver gets</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amountInput}>{convertedAmount}</Text>
          <TouchableOpacity style={styles.currencyPill} onPress={() => setShowReceiverModal(true)}>
            <Text style={styles.flag}>{currencies.find(c => c.code === receiverGetsCurrency)?.flag}</Text>
            <Text style={styles.currencyCode}>{receiverGetsCurrency}</Text>
            <Ionicons name="chevron-down" size={18} color="#0d0d1a" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Paying with - Now Dynamic */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentLabel}>Paying with</Text>
        <View style={styles.paymentRow}>
          <View style={styles.paymentInfo}>
            <Text style={styles.flag}>{currentCurrency?.flag}</Text>
            <Text style={styles.paymentText}>{youSendCurrency} balance</Text>
            <Text style={styles.available}>
              200.00 {youSendCurrency} available
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      {/* Modals */}
      <Modal visible={showYouSendModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>You send</Text>
            {currencies.map((cur) => (
              <TouchableOpacity
                key={cur.code}
                style={styles.modalItem}
                onPress={() => {
                  setYouSendCurrency(cur.code);
                  setShowYouSendModal(false);
                }}
              >
                <Text style={styles.modalFlag}>{cur.flag}</Text>
                <Text style={styles.modalCurrency}>{cur.code}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <Modal visible={showReceiverModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Receiver gets</Text>
            {currencies.map((cur) => (
              <TouchableOpacity
                key={cur.code}
                style={styles.modalItem}
                onPress={() => {
                  setReceiverGetsCurrency(cur.code);
                  setShowReceiverModal(false);
                }}
              >
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
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  formCard: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 24, marginBottom: 24 },
  label: { fontSize: 16, color: '#6b6b8a', marginBottom: 8 },
  amountRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  amountInput: { flex: 1, fontSize: 28, fontWeight: '700', color: '#0d0d1a' },
  currencyPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 999 },
  flag: { fontSize: 24, marginRight: 8 },
  currencyCode: { fontSize: 18, fontWeight: '700' },
  paymentSection: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 24, marginBottom: 40 },
  paymentLabel: { fontSize: 16, color: '#6b6b8a', marginBottom: 12 },
  paymentRow: { flexDirection: 'row', alignItems: 'center' },
  paymentInfo: { flexDirection: 'row', alignItems: 'center' },
  paymentText: { fontSize: 17, marginLeft: 12, fontWeight: '600' },
  available: { fontSize: 14, color: '#6b6b8a', marginLeft: 12 },
  continueButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 'auto' },
  continueText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginBottom: 24, textAlign: 'center' },
  modalItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  modalFlag: { fontSize: 28, marginRight: 16 },
  modalCurrency: { fontSize: 18, fontWeight: '600', color: '#0d0d1a' },
});