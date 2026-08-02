import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddNewAccountScreen() {
  const [activeTab, setActiveTab] = useState<'currency' | 'savings'>('currency');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Add new account</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'currency' && styles.activeTab]}
          onPress={() => setActiveTab('currency')}
        >
          <Text style={[styles.tabText, activeTab === 'currency' && styles.activeTabText]}>Currency Account</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'savings' && styles.activeTab]}
          onPress={() => setActiveTab('savings')}
        >
          <Text style={[styles.tabText, activeTab === 'savings' && styles.activeTabText]}>Savings Account</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'currency' ? (
        <ScrollView>
          <Text style={styles.description}>Choose a currency you want to hold. Receive, spend and send like a local.</Text>

          {/* All four currencies */}
          <TouchableOpacity style={styles.currencyOption}>
            <Text style={styles.flag}>🇬🇧</Text>
            <View style={styles.currencyInfo}>
              <Text style={styles.currencyName}>British Pound</Text>
              <Text style={styles.currencyCode}>GBP</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#6b6b8a" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.currencyOption}>
            <Text style={styles.flag}>🇺🇸</Text>
            <View style={styles.currencyInfo}>
              <Text style={styles.currencyName}>United States Dollar</Text>
              <Text style={styles.currencyCode}>USD</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#6b6b8a" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.currencyOption}>
            <Text style={styles.flag}>🇨🇦</Text>
            <View style={styles.currencyInfo}>
              <Text style={styles.currencyName}>Canadian Dollar</Text>
              <Text style={styles.currencyCode}>CAD</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#6b6b8a" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.currencyOption}>
            <Text style={styles.flag}>🇳🇬</Text>
            <View style={styles.currencyInfo}>
              <Text style={styles.currencyName}>Nigerian Naira</Text>
              <Text style={styles.currencyCode}>NGN</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#6b6b8a" />
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View style={styles.fullCapacity}>
          <Text style={styles.fullTitle}>Savings account at full capacity</Text>
          <Text style={styles.fullSubtitle}>You can only have one savings account at this time, we'll update you if there are changes to this in the future.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 6, marginBottom: 40 },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center', borderRadius: 999 },
  activeTab: { backgroundColor: '#ffffff', shadowColor: '#000', shadowOpacity: 0.1, elevation: 3 },
  tabText: { fontSize: 16, fontWeight: '600', color: '#6b6b8a' },
  activeTabText: { color: '#0d0d1a' },
  description: { fontSize: 16, color: '#6b6b8a', marginBottom: 30, lineHeight: 24 },
  currencyOption: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 20, padding: 20, marginBottom: 12 },
  flag: { fontSize: 32, marginRight: 16 },
  currencyInfo: { flex: 1 },
  currencyName: { fontSize: 18, fontWeight: '600' },
  currencyCode: { fontSize: 15, color: '#6b6b8a' },
  fullCapacity: { alignItems: 'center', marginTop: 100 },
  fullTitle: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  fullSubtitle: { fontSize: 16, color: '#6b6b8a', textAlign: 'center', lineHeight: 26 },
});