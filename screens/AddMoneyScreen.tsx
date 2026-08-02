import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AddMoneyScreenProps {
  amount?: string;
  currency?: 'GBP' | 'USD' | 'CAD' | 'NGN';
}

export default function AddMoneyScreen({
  amount = '50,000.00',
  currency = 'NGN',
}: AddMoneyScreenProps) {
  const currencyMap = {
    GBP: { symbol: '£' },
    USD: { symbol: '$' },
    CAD: { symbol: 'C$' },
    NGN: { symbol: '₦' },
  };

  const current = currencyMap[currency];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="checkmark-circle" size={110} color="#00d4a0" />

        <Text style={styles.title}>Money added successfully</Text>

        <Text style={styles.amount}>
          {current.symbol}{amount}
        </Text>

        <Text style={styles.subtitle}>
          Your {currency} wallet has been credited
        </Text>
      </View>

      {/* Done button moved way up and clearly visible */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 90,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0d0d1a',
    marginTop: 24,
    marginBottom: 8,
  },
  amount: {
    fontSize: 48,
    fontWeight: '700',
    color: '#00d4a0',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 17,
    color: '#6b6b8a',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  buttonText: {
    color: '#f4e9e8',
    fontSize: 25,
    fontWeight: '700',
  },
});