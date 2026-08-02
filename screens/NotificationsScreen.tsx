import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Notifications</Text>

      {/* Incoming Transfer */}
      <View style={styles.notificationCard}>
        <View style={styles.logoBox}>
          <Text style={styles.logoK}>K</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.type}>Incoming Transfer</Text>
          <Text style={styles.description}>
            $15 has been sent to you by MARK AARON JACOBS
          </Text>
          <Text style={styles.time}>8:37am Yesterday</Text>
        </View>
        <Text style={styles.link}>Check Details →</Text>
      </View>

      {/* Outgoing Transfer */}
      <View style={styles.notificationCard}>
        <View style={styles.logoBox}>
          <Text style={styles.logoK}>K</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.type}>Outgoing Transfer</Text>
          <Text style={styles.description}>
            You have sent 200,000 NGN to MARK AARON JACOBS
          </Text>
          <Text style={styles.time}>8:37am Yesterday</Text>
        </View>
        <Text style={styles.link}>Check Details →</Text>
      </View>

      {/* Currency Conversion */}
      <View style={styles.notificationCard}>
        <View style={styles.logoBox}>
          <Text style={styles.logoK}>K</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.type}>Currency Conversion</Text>
          <Text style={styles.description}>
            You have converted 20 USD to 30,000 NGN. It's immediately available for use in your wallet.
          </Text>
          <Text style={styles.time}>8:37am Yesterday</Text>
        </View>
        <Text style={styles.link}>Check Details →</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 40 },
  notificationCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBox: {
    width: 48,
    height: 48,
    backgroundColor: '#00d4a0',   // ← Green background
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  logoK: {
    color: '#ffffff',
    fontSize: 45,
    fontWeight: '800',
  },
  content: { flex: 1 },
  type: { fontSize: 18, fontWeight: '700', color: '#0d0d1a' },
  description: { fontSize: 15, color: '#374151', marginTop: 4, lineHeight: 22 },
  time: { fontSize: 13, color: '#6b6b8a', marginTop: 8 },
  link: { color: '#00d4a0', fontSize: 14, fontWeight: '600' },
});