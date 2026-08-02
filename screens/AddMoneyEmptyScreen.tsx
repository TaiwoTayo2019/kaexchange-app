import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddMoneyEmptyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.emptyContent}>
        <Ionicons name="wallet-outline" size={110} color="#e5e5ea" />
        <Text style={styles.title}>No add money history yet</Text>
        <Text style={styles.subtitle}>Your previous top-ups will appear here</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add money now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24, paddingTop: 140, justifyContent: 'space-between' },
  emptyContent: { alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: '#0d0d1a', marginTop: 30, marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#6b6b8a', textAlign: 'center', maxWidth: 260 },
  button: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginBottom: 50 },
  buttonText: { color: '#ededf0', fontSize: 25, fontWeight: '700' },
});