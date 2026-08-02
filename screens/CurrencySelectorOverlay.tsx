import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CurrencySelectorOverlay({ onClose, onSelect }: any) {
  const currencies = [
    { flag: '🇬🇧', code: 'GBP' },
    { flag: '🇺🇸', code: 'USD' },
    { flag: '🇨🇦', code: 'CAD' },
    { flag: '🇪🇺', code: 'EUR' },
    { flag: '🇳🇴', code: 'NOK' },
    { flag: '🇦🇪', code: 'AED' },
    { flag: '🇳🇬', code: 'NGN' },
    { flag: '🇸🇪', code: 'SEK' },
  ];

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.dragHandle} />
        <Text style={styles.title}>Select currency</Text>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#6b6b8a" />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>

        <ScrollView>
          {currencies.map((cur) => (
            <TouchableOpacity 
              key={cur.code} 
              style={styles.currencyRow}
              onPress={() => onSelect(cur)}
            >
              <Text style={styles.flag}>{cur.flag}</Text>
              <Text style={styles.currencyCode}>{cur.code}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modal: { backgroundColor: '#ffffff', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingTop: 12, paddingHorizontal: 24, height: '75%' },
  dragHandle: { width: 40, height: 5, backgroundColor: '#d1d1d6', alignSelf: 'center', borderRadius: 999, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginBottom: 20, textAlign: 'center' },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 12, paddingHorizontal: 16, marginBottom: 24 },
  searchInput: { flex: 1, marginLeft: 12, fontSize: 17 },
  currencyRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  flag: { fontSize: 28, marginRight: 16 },
  currencyCode: { fontSize: 18, fontWeight: '600', color: '#0d0d1a' },
});