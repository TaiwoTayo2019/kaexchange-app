import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ActivityScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Activity</Text>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={[styles.filterTab, styles.activeTab]}>
          <Text style={styles.activeTabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterTabText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterTabText}>Received</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions List */}
      <View style={styles.section}>
        <Text style={styles.dateHeader}>Today</Text>

        <View style={styles.txCard}>
          <Ionicons name="arrow-up" size={24} color="#ef4444" />
          <View style={styles.txInfo}>
            <Text style={styles.txTitle}>To Mark Aaron Jacobs</Text>
            <Text style={styles.txSub}>GTBank • 6:17 PM</Text>
          </View>
          <View style={styles.txAmountColumn}>
            <Text style={styles.txAmountNegative}>-120.00 GBP</Text>
            <Text style={styles.txAmountNgn}>-240,000 NGN</Text>
          </View>
        </View>

        <View style={styles.txCard}>
          <Ionicons name="arrow-down" size={24} color="#00d4a0" />
          <View style={styles.txInfo}>
            <Text style={styles.txTitle}>From UK Transfer</Text>
            <Text style={styles.txSub}>Barclays • 11:45 AM</Text>
          </View>
          <View style={styles.txAmountColumn}>
            <Text style={styles.txAmountPositive}>+850.00 GBP</Text>
            <Text style={styles.txAmountNgn}>+1,630,000 NGN</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.dateHeader}>Yesterday</Text>
        {/* You can add more transactions here later */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },

  filterRow: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f8',
    borderRadius: 999,
    padding: 6,
    marginHorizontal: 24,
    marginBottom: 30,
  },
  filterTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 999,
  },
  activeTab: { backgroundColor: '#ffffff', shadowColor: '#000', shadowOpacity: 0.1, elevation: 3 },
  activeTabText: { fontSize: 16, fontWeight: '700', color: '#0d0d1a' },
  filterTabText: { fontSize: 16, color: '#6b6b8a' },

  section: { paddingHorizontal: 24, marginBottom: 30 },
  dateHeader: { fontSize: 15, fontWeight: '700', color: '#0d0d1a', marginBottom: 12 },

  txCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 20,
    marginBottom: 12,
  },
  txInfo: { flex: 1, marginLeft: 16 },
  txTitle: { fontSize: 16, fontWeight: '600', color: '#0d0d1a' },
  txSub: { fontSize: 13, color: '#6b6b8a', marginTop: 2 },
  txAmountColumn: { alignItems: 'flex-end' },
  txAmountNegative: { fontSize: 17, fontWeight: '700', color: '#ef4444' },
  txAmountPositive: { fontSize: 17, fontWeight: '700', color: '#00d4a0' },
  txAmountNgn: { fontSize: 13, color: '#6b6b8a', marginTop: 2 },
});