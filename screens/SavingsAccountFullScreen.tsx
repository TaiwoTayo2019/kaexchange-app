import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SavingsAccountFullScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Add new account</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Currency Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Savings Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.illustrationContainer}>
        <Ionicons name="business" size={180} color="#e0f7f0" />
      </View>

      <Text style={styles.fullTitle}>Savings account at full capacity</Text>
      <Text style={styles.fullSubtitle}>
        You can only have one savings account at this time, we'll update you if there are changes to this in the future.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 6, marginBottom: 60 },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center', borderRadius: 999 },
  activeTab: { backgroundColor: '#ffffff' },
  tabText: { fontSize: 16, fontWeight: '600', color: '#6b6b8a' },
  activeTabText: { color: '#0d0d1a' },
  illustrationContainer: { alignItems: 'center', marginBottom: 60 },
  fullTitle: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  fullSubtitle: { fontSize: 16, color: '#6b6b8a', textAlign: 'center', lineHeight: 26 },
});