import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EnterAmountScreen() {
  const [rawAmount, setRawAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('NGN');
  const [paymentMethod, setPaymentMethod] = useState('Debit Card');
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const currencies = [
    { code: 'GBP', symbol: '£', flag: '🇬🇧' },
    { code: 'USD', symbol: '$', flag: '🇺🇸' },
    { code: 'CAD', symbol: 'C$', flag: '🇨🇦' },
    { code: 'NGN', symbol: '₦', flag: '🇳🇬' },
  ];

  const paymentOptions = [
    { name: 'Debit Card', icon: 'card-outline', recommended: true },
    { name: 'Apple Pay', icon: 'logo-apple' },
    { name: 'Bank transfer', icon: 'business-outline' },
  ];

  // ✅ Automatic commas (works perfectly at 1,000 and 1,000,000+)
  const formattedAmount = rawAmount 
    ? Number(rawAmount).toLocaleString('en-US') 
    : '';

  const handlePay = () => {
    Keyboard.dismiss();
    if (!rawAmount) {
      alert('Please enter an amount');
      return;
    }
    console.log(`Paying ${rawAmount} ${selectedCurrency} with ${paymentMethod}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
          </TouchableOpacity>
          <Text style={styles.title}>Enter amount</Text>
        </View>

        {/* Amount Input – commas appear automatically */}
        <View style={styles.amountContainer}>
          <TextInput
            ref={inputRef}
            style={styles.amountInput}
            value={formattedAmount}
            onChangeText={(text) => {
              const cleaned = text.replace(/,/g, ''); // remove commas for storage
              setRawAmount(cleaned);
            }}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#9ca3af"
            autoFocus
          />

          <TouchableOpacity 
            style={styles.currencySelector} 
            onPress={() => setShowCurrencyModal(true)}
          >
            <Text style={styles.flag}>{currencies.find(c => c.code === selectedCurrency)?.flag}</Text>
            <Text style={styles.currencyCode}>{selectedCurrency}</Text>
            <Ionicons name="chevron-down" size={18} color="#0d0d1a" />
          </TouchableOpacity>
        </View>

        {/* Paying with */}
        <View style={styles.paymentMethod}>
          <Text style={styles.paymentLabel}>You are paying with</Text>
          <View style={styles.paymentRow}>
            <View style={styles.paymentInfo}>
              <Ionicons 
                name={paymentOptions.find(p => p.name === paymentMethod)?.icon || 'card-outline'} 
                size={28} 
                color="#0d0d1a" 
              />
              <Text style={styles.paymentText}>{paymentMethod}</Text>
              {paymentMethod === 'Debit Card' && <Text style={styles.recommended}>Recommended</Text>}
            </View>
            <TouchableOpacity style={styles.changeButton} onPress={() => setShowPaymentModal(true)}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payText}>Pay</Text>
        </TouchableOpacity>

        {/* Currency Modal */}
        <Modal visible={showCurrencyModal} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Currency</Text>
              {currencies.map((cur) => (
                <TouchableOpacity
                  key={cur.code}
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedCurrency(cur.code);
                    setShowCurrencyModal(false);
                  }}
                >
                  <Text style={styles.modalFlag}>{cur.flag}</Text>
                  <Text style={styles.modalCurrency}>{cur.code}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>

        {/* Payment Method Modal */}
        <Modal visible={showPaymentModal} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select funding method</Text>
              {paymentOptions.map((method) => (
                <TouchableOpacity
                  key={method.name}
                  style={styles.modalItem}
                  onPress={() => {
                    setPaymentMethod(method.name);
                    setShowPaymentModal(false);
                  }}
                >
                  <Ionicons name={method.icon} size={28} color="#0d0d1a" />
                  <Text style={styles.modalCurrency}>{method.name}</Text>
                  {method.recommended && <Text style={styles.recommendedTag}>Recommended</Text>}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  amountContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 60 },
  amountInput: { fontSize: 40, fontWeight: '700', color: '#0d0d1a', textAlign: 'center', minWidth: 200 },
  currencySelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', paddingHorizontal: 20, paddingVertical: 14, borderRadius: 999, marginLeft: 16 },
  flag: { fontSize: 32, marginRight: 8 },
  currencyCode: { fontSize: 22, fontWeight: '700' },
  paymentMethod: { backgroundColor: '#f4f4f8', borderRadius: 16, padding: 20, marginBottom: 60 },
  paymentLabel: { fontSize: 16, color: '#6b6b8a', marginBottom: 12 },
  paymentRow: { flexDirection: 'row', alignItems: 'center' },
  paymentInfo: { flexDirection: 'row', alignItems: 'center' },
  paymentText: { fontSize: 18, fontWeight: '600', marginLeft: 12 },
  recommended: { fontSize: 13, color: '#00d4a0', fontWeight: '700', marginLeft: 8 },
  changeButton: { marginLeft: 'auto', backgroundColor: '#00d4a0', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 999 },
  changeText: { color: '#0d0d1a', fontWeight: '700' },
  payButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  payText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24 },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginBottom: 24, textAlign: 'center' },
  modalItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  modalFlag: { fontSize: 28, marginRight: 16 },
  modalCurrency: { fontSize: 18, fontWeight: '600', color: '#0d0d1a', flex: 1 },
  recommendedTag: { color: '#00d4a0', fontSize: 13, fontWeight: '700' },
});