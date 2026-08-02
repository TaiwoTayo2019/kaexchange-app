import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyPINCompleteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.successContainer}>
        <Ionicons name="checkmark-circle" size={120} color="#00d4a0" />
        <Text style={styles.successTitle}>Transfer Completed!</Text>
        <Text style={styles.successSubtitle}>Your money has been sent successfully</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Transaction</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 100 },
  successContainer: { alignItems: 'center', marginBottom: 80 },
  successTitle: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginTop: 30 },
  successSubtitle: { fontSize: 16, color: '#6b6b8a', textAlign: 'center', marginTop: 12 },
  button: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  buttonText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
  secondaryButton: { borderWidth: 2, borderColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  secondaryButtonText: { color: '#00d4a0', fontSize: 18, fontWeight: '700' },
});