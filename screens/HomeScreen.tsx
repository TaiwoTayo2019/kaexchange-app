import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [hideBalance, setHideBalance] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(1915);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/GBP')
      .then(res => res.json())
      .then(data => {
        if (data.rates && data.rates.NGN) {
          setExchangeRate(Math.round(data.rates.NGN));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Status Bar spacer handled by SafeAreaView in your app root */}

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <Text style={styles.greeting}>Hi, Mark</Text>
        </View>
        <TouchableOpacity style={styles.notifBtn}>
          <Ionicons name="notifications-outline" size={22} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* My Accounts */}
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>My Accounts</Text>
        <TouchableOpacity style={styles.hideRow} onPress={() => setHideBalance(!hideBalance)}>
          <Ionicons name={hideBalance ? 'eye-off-outline' : 'eye-outline'} size={16} color="#6b6b8a" />
          <Text style={styles.hideText}>{hideBalance ? 'Show balance' : 'Hide balance'}</Text>
        </TouchableOpacity>
      </View>

      {/* Account Cards — horizontal scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.accountsScroll} contentContainerStyle={styles.accountsContent}>
        <View style={styles.accountCard}>
          <Text style={styles.flag}>🇬🇧</Text>
          <Text style={styles.currency}>GBP balance</Text>
          <Text style={styles.balance}>{hideBalance ? '••••••' : '10,000'}</Text>
        </View>
        <View style={[styles.accountCard, styles.ngnCard]}>
          <Text style={styles.flag}>🇳🇬</Text>
          <Text style={styles.currency}>NGN balance</Text>
          <Text style={[styles.balance, styles.balanceSmall]}>{hideBalance ? '••••••••••' : '20,000,000.00'}</Text>
        </View>
        <View style={[styles.accountCard, styles.thirdCard]}>
          <Text style={styles.flag}>💵</Text>
          <Text style={styles.currency}>USD balance</Text>
          <Text style={styles.balance}>{hideBalance ? '••••••' : '5,000'}</Text>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>Send money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreText}>···</Text>
        </TouchableOpacity>
      </View>

      {/* Send again to */}
      <Text style={styles.sectionTitle}>Send again to</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sendAgainScroll} contentContainerStyle={styles.sendAgainContent}>
        {[
          { initials: 'MJ', name: 'Mark J', bank: 'Gtbank Plc', color: '#1a4740' },
          { initials: 'SO', name: 'Sarah O', bank: 'Access Bank', color: '#2d4a7a' },
          { initials: 'JA', name: 'John A', bank: 'Zenith Bank', color: '#4a2d6b' },
          { initials: 'TB', name: 'Taiwo B', bank: 'UBA', color: '#6b3a1a' },
        ].map((contact, i) => (
          <View key={i} style={styles.contactCard}>
            <View style={[styles.contactAvatar, { backgroundColor: contact.color }]}>
              <Text style={styles.contactInitial}>{contact.initials}</Text>
            </View>
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={styles.contactBank}>{contact.bank}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Transactions */}
      <View style={styles.txSection}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.sectionTitle}>Transactions</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {[
          { icon: 'arrow-up', iconColor: '#ef4444', iconBg: '#fef2f2', title: 'To Mark Aaron Jacobs', date: '25 Dec 2025, 6:17 PM', gbp: '-120.00 GBP', ngn: '-240,000.00 NGN', positive: false },
          { icon: 'card-outline', iconColor: '#00c896', iconBg: '#e6faf4', title: 'From Mark Aaron Jacobs', date: '25 Dec 2025, 6:17 PM', gbp: '+120.00 GBP', ngn: '+240,000.00 NGN', positive: true },
          { icon: 'arrow-down', iconColor: '#00c896', iconBg: '#e6faf4', title: 'From Mark Aaron Jacobs', date: '25 Dec 2025, 6:17 PM', gbp: '+120.00 GBP', ngn: '+240,000.00 NGN', positive: true },
        ].map((tx, i) => (
          <View key={i} style={styles.txItem}>
            <View style={[styles.txIcon, { backgroundColor: tx.iconBg }]}>
              <Ionicons name={tx.icon} size={20} color={tx.iconColor} />
            </View>
            <View style={styles.txInfo}>
              <Text style={styles.txTitle}>{tx.title}</Text>
              <Text style={styles.txDate}>{tx.date}</Text>
            </View>
            <View style={styles.txAmounts}>
              <Text style={[styles.txGbp, tx.positive ? styles.amountPos : styles.amountNeg]}>{tx.gbp}</Text>
              <Text style={styles.txNgn}>{tx.ngn}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Account Information */}
      <View style={styles.accountInfoSection}>
        <Text style={styles.sectionTitle}>Account information</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.infoScrollContent}>
          <TouchableOpacity style={styles.infoCard}>
            <Text style={styles.rateText}>1 GBP = {exchangeRate} NGN</Text>
            <Text style={styles.rateFlagRow}>🇬🇧🇳🇬</Text>
            <Text style={styles.rateSub}>Exchange rate</Text>
            <Text style={styles.viewLink}>View rates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.infoCard, styles.limitCard]}>
            <Text style={styles.rateText}>£10,000</Text>
            <Text style={styles.rateSub}>per day</Text>
            <Text style={styles.rateSub}>Daily limit</Text>
            <Text style={styles.viewLink}>View all limits</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f5f7' },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
  },
  profileRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: '#667eea',
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  greeting: { fontSize: 20, fontWeight: '700', color: '#0d0d1a' },
  notifBtn: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center',
  },

  // Section titles
  sectionRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, marginBottom: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#0d0d1a', paddingHorizontal: 20, marginBottom: 10 },
  hideRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  hideText: { fontSize: 13, color: '#6b6b8a', fontWeight: '500' },

  // Account cards
  accountsScroll: { marginBottom: 4 },
  accountsContent: { paddingHorizontal: 20, gap: 10 },
  accountCard: {
    width: 145,
    backgroundColor: '#e6faf4',
    padding: 16,
    borderRadius: 20,
  },
  ngnCard: { backgroundColor: '#f3e8ff' },
  thirdCard: { backgroundColor: '#fff3e0' },
  flag: { fontSize: 28, marginBottom: 6 },
  currency: { fontSize: 12, color: '#6b6b8a', fontWeight: '600' },
  balance: { fontSize: 22, fontWeight: '800', color: '#0d0d1a', marginTop: 4 },
  balanceSmall: { fontSize: 17 },

  // Action buttons
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    marginVertical: 14,
    alignItems: 'center',
  },
  sendButton: {
    flex: 1, backgroundColor: '#00c896',
    paddingVertical: 14, borderRadius: 999, alignItems: 'center',
  },
  sendText: { fontSize: 15, fontWeight: '700', color: '#fff' },
  addButton: {
    flex: 1, backgroundColor: '#fff',
    borderWidth: 2, borderColor: '#00c896',
    paddingVertical: 14, borderRadius: 999, alignItems: 'center',
  },
  addText: { fontSize: 15, fontWeight: '700', color: '#0d0d1a' },
  moreButton: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#e0e0e0',
    alignItems: 'center', justifyContent: 'center',
  },
  moreText: { fontSize: 18, color: '#6b6b8a', letterSpacing: 1 },

  // Send again
  sendAgainScroll: { marginBottom: 20 },
  sendAgainContent: { paddingHorizontal: 20, gap: 8 },
  contactCard: {
    alignItems: 'center', width: 76,
    backgroundColor: '#fff', borderRadius: 16, padding: 10,
  },
  contactAvatar: {
    width: 48, height: 48, borderRadius: 24,
    alignItems: 'center', justifyContent: 'center', marginBottom: 6,
  },
  contactInitial: { color: '#fff', fontSize: 16, fontWeight: '700' },
  contactName: { fontSize: 12, fontWeight: '600', color: '#0d0d1a', textAlign: 'center' },
  contactBank: { fontSize: 10, color: '#6b6b8a', textAlign: 'center' },

  // Transactions
  txSection: { paddingHorizontal: 20, marginBottom: 20 },
  transactionsHeader: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12,
  },
  seeAll: { color: '#00c896', fontWeight: '700', fontSize: 13 },
  txItem: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', padding: 14,
    borderRadius: 16, marginBottom: 8, gap: 12,
  },
  txIcon: {
    width: 36, height: 36, borderRadius: 18,
    alignItems: 'center', justifyContent: 'center',
  },
  txInfo: { flex: 1 },
  txTitle: { fontSize: 14, fontWeight: '600', color: '#0d0d1a' },
  txDate: { fontSize: 11, color: '#6b6b8a', marginTop: 2 },
  txAmounts: { alignItems: 'flex-end' },
  txGbp: { fontSize: 14, fontWeight: '700' },
  txNgn: { fontSize: 11, color: '#6b6b8a', marginTop: 2 },
  amountNeg: { color: '#ef4444' },
  amountPos: { color: '#00c896' },

  // Account info
  accountInfoSection: { paddingHorizontal: 20, marginBottom: 100 },
  infoScrollContent: { gap: 10 },
  infoCard: {
    width: 165, backgroundColor: '#e6faf4',
    borderRadius: 20, padding: 18,
  },
  limitCard: { backgroundColor: '#fff3e0' },
  rateText: { fontSize: 17, fontWeight: '800', color: '#0d0d1a' },
  rateFlagRow: { fontSize: 18, marginVertical: 4 },
  rateSub: { fontSize: 12, color: '#6b6b8a', marginTop: 2 },
  viewLink: { color: '#00c896', fontWeight: '700', fontSize: 13, marginTop: 12 },
});