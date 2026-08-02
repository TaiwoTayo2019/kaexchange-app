import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChooseAccountProviderScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Choose account provider</Text>
      </View>

      <Text style={styles.subtitle}>Choose a bank or merchant for local issuance of the selected currency.</Text>

      <ScrollView>
        <TouchableOpacity style={styles.providerRow}>
          <View style={styles.providerLogo}>
            <Text style={{ fontSize: 24 }}>🔵</Text>
          </View>
          <Text style={styles.providerName}>Merchant 1</Text>
          <Ionicons name="checkmark" size={24} color="#00d4a0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.providerRow}>
          <View style={styles.providerLogo}>
            <Text style={{ fontSize: 24 }}>🔵</Text>
          </View>
          <Text style={styles.providerName}>Merchant 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.providerRow}>
          <View style={styles.providerLogo}>
            <Text style={{ fontSize: 24 }}>🏦</Text>
          </View>
          <Text style={styles.providerName}>Chase Bank</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.providerRow}>
          <View style={styles.providerLogo}>
            <Text style={{ fontSize: 24 }}>🏦</Text>
          </View>
          <Text style={styles.providerName}>Access Bank</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  subtitle: { fontSize: 15, color: '#6b6b8a', marginBottom: 30 },
  providerRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 16, padding: 20, marginBottom: 12 },
  providerLogo: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  providerName: { flex: 1, fontSize: 18, fontWeight: '600' },
  doneButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 'auto', marginBottom: 40 },
  doneText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});