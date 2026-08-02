import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExchangeRatesScreen() {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/NGN')
      .then(res => res.json())
      .then(data => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const corridors = [
    { fromFlag: '🇬🇧', fromCode: 'GBP', rate: rates ? (rates.NGN / rates.GBP).toFixed(0) : '1974' },
    { fromFlag: '🇺🇸', fromCode: 'USD', rate: rates ? (rates.NGN / rates.USD).toFixed(0) : '1450' },
    { fromFlag: '🇨🇦', fromCode: 'CAD', rate: rates ? (rates.NGN / rates.CAD).toFixed(0) : '1050' },
  ];

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00d4a0" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Exchange rates</Text>
      </View>

      {/* Rate Rows */}
      {corridors.map((item, index) => (
        <View key={index} style={styles.rateRow}>
          <View style={styles.currencyPair}>
            <Text style={styles.flag}>{item.fromFlag}</Text>
            <Text style={styles.arrow}>→</Text>
            <Text style={styles.flag}>🇳🇬</Text>
            <Text style={styles.rateText}>
              1 {item.fromCode} = {item.rate} NGN
            </Text>
          </View>

          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  
  rateRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#f4f4f8', 
    borderRadius: 20, 
    paddingVertical: 20, 
    paddingHorizontal: 24, 
    marginBottom: 16 
  },
  
  currencyPair: { 
    flexDirection: 'row', 
    alignItems: 'center',
    flex: 1 
  },
  
  flag: { 
    fontSize: 28, 
    marginRight: 5 
  },
  
  arrow: { 
    fontSize: 22, 
    color: '#6b6b8a', 
    marginHorizontal: 2 
  },
  
  rateText: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#0d0d1a',
    marginRight: 40   // ← This creates the 3-spacebar gap you wanted
  },
  
  sendButton: { 
    backgroundColor: '#00d4a0', 
    paddingHorizontal: 20, 
    paddingVertical: 12, 
    borderRadius: 999
  },
  
  sendText: { 
    color: '#0d0d1a', 
    fontWeight: '700', 
    fontSize: 16 
  },

  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' },
});