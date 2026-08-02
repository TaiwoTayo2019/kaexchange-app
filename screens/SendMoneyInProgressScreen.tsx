import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyInProgressScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.illustration}>
        <Ionicons name="paper-plane" size={120} color="#00d4a0" />
      </View>

      <Text style={styles.title}>Transfer in progress</Text>
      <Text style={styles.subtitle}>
        Your 5.00 GBP transfer to Mark Ojo is in progress.{'\n'}
        We'll notify you once it's successful.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80, alignItems: 'center' },
  header: { alignSelf: 'flex-start', marginBottom: 60 },
  illustration: { marginBottom: 40 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', textAlign: 'center', marginBottom: 16 },
  subtitle: { fontSize: 16, color: '#6b6b8a', textAlign: 'center', lineHeight: 26, marginBottom: 80 },
  button: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, width: '100%', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});