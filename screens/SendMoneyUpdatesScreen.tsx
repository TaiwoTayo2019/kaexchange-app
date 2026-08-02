import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyUpdatesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.successHeader}>
        <Text style={styles.title}>You sent</Text>
        <Text style={styles.amount}>-5.00 GBP</Text>
        <Text style={styles.date}>26 Dec 2025, 6:15 PM</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Details</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <Ionicons name="checkmark-circle" size={28} color="#00d4a0" />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineText}>You initiated a transfer</Text>
              <Text style={styles.timelineTime}>8:20 AM</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="checkmark-circle" size={28} color="#00d4a0" />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineText}>You paid with your GBP balance</Text>
              <Text style={styles.timelineTime}>8:20 AM</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="checkmark-circle" size={28} color="#00d4a0" />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineText}>We sent out 9,575.00 NGN</Text>
              <Text style={styles.timelineTime}>8:20 AM</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <Ionicons name="checkmark-circle" size={28} color="#00d4a0" />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineText}>Your transfer is completed</Text>
              <Text style={styles.timelineTime}>8:20 AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  successHeader: { alignItems: 'center', marginTop: 30, marginBottom: 40 },
  title: { fontSize: 24, fontWeight: '700', color: '#0d0d1a' },
  amount: { fontSize: 42, fontWeight: '800', color: '#ef4444', marginVertical: 8 },
  date: { fontSize: 16, color: '#6b6b8a' },
  tabs: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 6, marginBottom: 30 },
  tab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 999 },
  activeTab: { backgroundColor: '#ffffff' },
  activeTabText: { fontWeight: '700', color: '#0d0d1a' },
  tabText: { color: '#6b6b8a' },
  timeline: { marginTop: 10 },
  timelineItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  timelineContent: { marginLeft: 16, flex: 1 },
  timelineText: { fontSize: 16, fontWeight: '600' },
  timelineTime: { fontSize: 14, color: '#6b6b8a' },
});