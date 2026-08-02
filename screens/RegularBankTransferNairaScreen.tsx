import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegularBankTransferNairaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Regular bank transfer</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Send money to this account</Text>

        <View style={styles.detailCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Bank name</Text>
            <Text style={styles.value}>Kuda Bank</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Account number</Text>
            <Text style={styles.value}>0123456789</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Account name</Text>
            <Text style={styles.value}>Ka Exchange Limited</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.copyButton}>
          <Ionicons name="copy-outline" size={20} color="#00d4a0" />
          <Text style={styles.copyText}>Copy account details</Text>
        </TouchableOpacity>

        <Text style={styles.note}>Transfer will reflect in your wallet instantly</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24, paddingTop: 60 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  subtitle: { fontSize: 17, color: '#6b6b8a', marginBottom: 16 },
  detailCard: { backgroundColor: '#f4f4f8', borderRadius: 20, padding: 24 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  label: { fontSize: 16, color: '#6b6b8a' },
  value: { fontSize: 16, fontWeight: '600', color: '#0d0d1a' },
  copyButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 16, marginTop: 30 },
  copyText: { color: '#00d4a0', fontWeight: '700', marginLeft: 8 },
  note: { textAlign: 'center', marginTop: 40, color: '#6b6b8a', fontSize: 15 },
});