import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyReviewScreen() {
  const [rates, setRates] = useState<any>(null);

  // Fetch live exchange rate
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(() => {});
  }, []);

  // Live rate: 1 GBP to NGN
  const liveRate = rates ? Math.round(rates.NGN / rates.GBP).toLocaleString('en-US') : '1,915';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Review details</Text>
      </View>

      <View style={styles.transferInfo}>
        <Text style={styles.transferLabel}>You are sending</Text>
        <Text style={styles.transferAmount}>5.00 GBP</Text>
        <Text style={styles.transferTo}>To Mark Aaron Jacobs</Text>
      </View>

      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Paying with</Text>
          <View style={styles.paymentRow}>
            <Text style={styles.flag}>🇬🇧</Text>
            <Text style={styles.paymentText}>GBP balance</Text>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Recipient Details</Text>
          <Text style={styles.detailValue}>Mark Aaron Jacobs</Text>
          <Text style={styles.detailSub}>Gtbank Plc • 0551234009</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>You will pay</Text>
          <Text style={styles.detailValue}>5.00 GBP</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Transfer fees</Text>
          <Text style={styles.detailValue}>0.00 GBP</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Recipient will receive</Text>
          <Text style={styles.detailValue}>9,575.00 NGN</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Exchange rate</Text>
          <Text style={styles.detailValue}>1 GBP = {liveRate} NGN</Text>
        </View>
      </View>

      <Text style={styles.narrationLabel}>Narration (optional)</Text>
      <TextInput 
        style={styles.narrationInput} 
        placeholder="Add a note for the recipient" 
        multiline 
      />

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.note}>Typically delivers within 2 minutes</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  transferInfo: { alignItems: 'center', marginBottom: 40 },
  transferLabel: { fontSize: 16, color: '#6b6b8a' },
  transferAmount: { fontSize: 42, fontWeight: '800', color: '#0d0d1a', marginVertical: 8 },
  transferTo: { fontSize: 18, color: '#6b6b8a' },
  detailsCard: { backgroundColor: '#f4f4f8', borderRadius: 24, padding: 24, marginBottom: 30 },
  detailRow: { paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#e5e5e5' },
  detailLabel: { fontSize: 15, color: '#6b6b8a' },
  detailValue: { fontSize: 17, fontWeight: '600', color: '#0d0d1a', marginTop: 4 },
  detailSub: { fontSize: 14, color: '#6b6b8a' },
  paymentRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  flag: { fontSize: 24, marginRight: 12 },
  paymentText: { fontSize: 17, fontWeight: '600' },
  changeBtn: { marginLeft: 'auto', backgroundColor: '#00d4a0', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 999 },
  changeText: { color: '#0d0d1a', fontWeight: '700' },
  narrationLabel: { fontSize: 16, color: '#6b6b8a', marginBottom: 8 },
  narrationInput: { backgroundColor: '#f4f4f8', borderRadius: 16, padding: 20, fontSize: 17, minHeight: 100, marginBottom: 30 },
  continueButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  continueText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
  note: { textAlign: 'center', color: '#6b6b8a', fontSize: 14, marginTop: 20, marginBottom: 40 },
});