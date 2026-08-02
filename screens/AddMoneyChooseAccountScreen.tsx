import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddMoneyChooseAccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Select account to fund </Text>
      </View>

      <ScrollView>
        {/* GBP */}
        <TouchableOpacity style={styles.accountRow}>
          <View style={styles.flagContainer}>
            <Text style={styles.flag}>🇬🇧</Text>
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>Great British Pounds</Text>
            <Text style={styles.accountCode}>GBP</Text>
          </View>
          <Text style={styles.balance}>0.00</Text>
        </TouchableOpacity>

        {/* USD */}
        <TouchableOpacity style={styles.accountRow}>
          <View style={styles.flagContainer}>
            <Text style={styles.flag}>🇺🇸</Text>
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>United States Dollar</Text>
            <Text style={styles.accountCode}>USD</Text>
          </View>
          <Text style={styles.balance}>0.00</Text>
        </TouchableOpacity>

        {/* CAD */}
        <TouchableOpacity style={styles.accountRow}>
          <View style={styles.flagContainer}>
            <Text style={styles.flag}>🇨🇦</Text>
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>Canadian Dollar</Text>
            <Text style={styles.accountCode}>CAD</Text>
          </View>
          <Text style={styles.balance}>0.00</Text>
        </TouchableOpacity>

        {/* NGN */}
        <TouchableOpacity style={styles.accountRow}>
          <View style={styles.flagContainer}>
            <Text style={styles.flag}>🇳🇬</Text>
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>Nigerian Naira</Text>
            <Text style={styles.accountCode}>NGN</Text>
          </View>
          <Text style={styles.balance}>0.00</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24, paddingTop: 60 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  accountRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f4f4f8', 
    borderRadius: 16, 
    padding: 20, 
    marginBottom: 12 
  },
  flagContainer: { marginRight: 16 },
  flag: { fontSize: 32 },
  accountInfo: { flex: 1 },
  accountName: { fontSize: 18, fontWeight: '600', color: '#0d0d1a' },
  accountCode: { fontSize: 15, color: '#6b6b8a' },
  balance: { fontSize: 18, fontWeight: '700', color: '#0d0d1a' },
});