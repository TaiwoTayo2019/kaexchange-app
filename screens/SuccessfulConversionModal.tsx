import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SuccessfulConversionModal({ visible, onClose, amountGBP, amountNGN }: any) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={28} color="#0d0d1a" />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <View style={styles.successIcon}>
            <Ionicons name="checkmark" size={80} color="#ffffff" />
          </View>
        </View>

        <Text style={styles.title}>Conversion Successful</Text>
        <Text style={styles.subtitle}>
          You have successfully converted {amountGBP} GBP to {amountNGN} NGN, which has been deposited into your Naira account.
        </Text>

        <TouchableOpacity style={styles.doneButton} onPress={onClose}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#ffffff', borderRadius: 24, padding: 40, width: '90%', alignItems: 'center' },
  closeButton: { position: 'absolute', top: 20, right: 20 },
  iconContainer: { marginBottom: 30 },
  successIcon: { width: 140, height: 140, backgroundColor: '#00d4a0', borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', textAlign: 'center', marginBottom: 16 },
  subtitle: { fontSize: 16, color: '#6b6b8a', textAlign: 'center', lineHeight: 26 },
  doneButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 40 },
  doneText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});