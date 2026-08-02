import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccountLimitsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Account Limits</Text>

      {/* Local Transfers */}
      <View style={styles.sectionCard}>
        <TouchableOpacity style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Local transfers</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <View style={styles.limitRow}>
          <Text style={styles.limitLabel}>Daily Transfer Limit</Text>
          <Text style={styles.limitValue}>TBD</Text>
        </View>
        <View style={styles.limitRow}>
          <Text style={styles.limitLabel}>Maximum amount per transaction</Text>
          <Text style={styles.limitValue}>TBD</Text>
        </View>
      </View>

      {/* International Transfers */}
      <View style={styles.sectionCard}>
        <TouchableOpacity style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>International transfers</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <View style={styles.limitRow}>
          <Text style={styles.limitLabel}>Daily Transfer Limit</Text>
          <Text style={styles.limitValue}>TBD</Text>
        </View>
        <View style={styles.limitRow}>
          <Text style={styles.limitLabel}>Maximum amount per transaction</Text>
          <Text style={styles.limitValue}>TBD</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 50,
  },
  sectionCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0d0d1a',
  },
  limitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  limitLabel: {
    fontSize: 16,
    color: '#6b6b8a',
  },
  limitValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0d0d1a',
  },
});