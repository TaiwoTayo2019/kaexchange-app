import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyErrorScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Send money</Text>
      </View>

      {/* ... rest of the send money form ... */}

      <View style={styles.errorBox}>
        <Text style={styles.errorText}>
          You don't have enough money to perform this transaction using this payment method, please choose different method.
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  errorBox: { backgroundColor: '#fff1f0', padding: 16, borderRadius: 16, marginVertical: 20 },
  errorText: { color: '#ef4444', fontSize: 15, lineHeight: 22 },
  continueButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 'auto', marginBottom: 40 },
  continueText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});