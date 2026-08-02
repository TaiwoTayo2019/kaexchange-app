import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddMoneyDetailedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Transaction details</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Amount added</Text>
            <Text style={styles.value}>₦50,000.00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Payment method</Text>
            <Text style={styles.value}>Debit Card •••• 4242</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>April 5, 2026 • 10:42 AM</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Reference</Text>
            <Text style={styles.value}>KAE-7843921</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.downloadButton}>
          <Ionicons name="download-outline" size={20} color="#00d4a0" />
          <Text style={styles.downloadText}>Download receipt</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24, paddingTop: 60 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  detailCard: { backgroundColor: '#f4f4f8', borderRadius: 20, padding: 24 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  label: { fontSize: 16, color: '#6b6b8a' },
  value: { fontSize: 16, fontWeight: '600', color: '#0d0d1a' },
  downloadButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 18, marginTop: 40 },
  downloadText: { color: '#00d4a0', fontWeight: '700', marginLeft: 8 },
});