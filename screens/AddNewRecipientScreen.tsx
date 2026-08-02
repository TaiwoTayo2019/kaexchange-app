import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddNewRecipientScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Enter recipient details</Text>
      </View>

      <Text style={styles.label}>Bank name</Text>
      <TouchableOpacity style={styles.input}>
        <Text style={styles.placeholder}>Select bank</Text>
        <Ionicons name="chevron-down" size={20} color="#6b6b8a" />
      </TouchableOpacity>

      <Text style={styles.label}>Account number</Text>
      <TextInput style={styles.input} placeholder="Enter account number" keyboardType="numeric" />

      <View style={styles.toggleRow}>
        <Text style={styles.toggleLabel}>Save beneficiary</Text>
        <TouchableOpacity>
          <View style={styles.toggleActive} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  label: { fontSize: 16, color: '#6b6b8a', marginBottom: 8, marginTop: 24 },
  input: { backgroundColor: '#f4f4f8', borderRadius: 12, padding: 18, fontSize: 17, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  placeholder: { color: '#6b6b8a', fontSize: 17 },
  toggleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 },
  toggleLabel: { fontSize: 17, color: '#0d0d1a' },
  toggleActive: { width: 52, height: 32, backgroundColor: '#00d4a0', borderRadius: 999, position: 'relative' },
  continueButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 'auto', marginBottom: 40 },
  continueText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});