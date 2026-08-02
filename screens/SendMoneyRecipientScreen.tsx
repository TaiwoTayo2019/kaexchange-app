import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyRecipientScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Who are you sending to?</Text>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#6b6b8a" />
        <TextInput style={styles.searchInput} placeholder="Search for a name or phone number" />
      </View>

      <TouchableOpacity style={styles.newRecipientRow}>
        <Ionicons name="add-circle" size={28} color="#00d4a0" />
        <Text style={styles.newRecipientText}>Send to a new recipient</Text>
        <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
      </TouchableOpacity>

      <Text style={styles.recentTitle}>Recent</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScroll}>
        {['Mark J', 'Mark J', 'Mark J', 'Mark J'].map((name, i) => (
          <View key={i} style={styles.recipientCard}>
            <View style={styles.recipientAvatar}>
              <Text style={styles.recipientInitial}>MJ</Text>
            </View>
            <Text style={styles.recipientName}>{name}</Text>
            <Text style={styles.bankName}>Gtbank Plc</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.savedTitle}>Saved</Text>

      <View style={styles.savedList}>
        {['Mark Aaron Jacob', 'Mark Aaron Jacob', 'Mark Aaron Jacob', 'Mark Aaron Jacob'].map((name, i) => (
          <TouchableOpacity key={i} style={styles.savedItem}>
            <View style={styles.savedAvatar}>
              <Text style={styles.savedInitial}>MJ</Text>
            </View>
            <View style={styles.savedInfo}>
              <Text style={styles.savedName}>{name}</Text>
              <Text style={styles.savedBank}>Gtbank Plc • 0551234009</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 12, paddingHorizontal: 16, marginBottom: 24 },
  searchInput: { flex: 1, marginLeft: 12, fontSize: 17 },
  newRecipientRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 16, marginBottom: 30 },
  newRecipientText: { marginLeft: 12, fontSize: 17, fontWeight: '600', flex: 1 },
  recentTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  recentScroll: { marginBottom: 40 },
  recipientCard: { alignItems: 'center', width: 90, marginRight: 16 },
  recipientAvatar: { width: 64, height: 64, backgroundColor: '#00d4a0', borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  recipientInitial: { color: '#ffffff', fontSize: 24, fontWeight: '700' },
  recipientName: { marginTop: 8, fontSize: 14, fontWeight: '600' },
  bankName: { fontSize: 12, color: '#6b6b8a' },
  savedTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  savedList: { gap: 16 },
  savedItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 16, padding: 18 },
  savedAvatar: { width: 48, height: 48, backgroundColor: '#00d4a0', borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  savedInitial: { color: '#ffffff', fontSize: 20, fontWeight: '700' },
  savedInfo: { flex: 1 },
  savedName: { fontSize: 17, fontWeight: '600' },
  savedBank: { fontSize: 14, color: '#6b6b8a' },
});