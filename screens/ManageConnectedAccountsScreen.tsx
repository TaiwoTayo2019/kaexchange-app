import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ManageConnectedAccountsScreen() {
  const [activeTab, setActiveTab] = useState<'bank' | 'cards'>('bank');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Manage connected accounts</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'bank' && styles.activeTab]}
          onPress={() => setActiveTab('bank')}
        >
          <Text style={[styles.tabText, activeTab === 'bank' && styles.activeTabText]}>
            Bank Accounts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'cards' && styles.activeTab]}
          onPress={() => setActiveTab('cards')}
        >
          <Text style={[styles.tabText, activeTab === 'cards' && styles.activeTabText]}>
            Cards
          </Text>
        </TouchableOpacity>
      </View>

      {/* Illustration + Empty State */}
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/VYvN8hWW/bank.png' }}
          style={styles.bankImage}
          resizeMode="contain"
        />

        <Text style={styles.emptyText}>
          You have not connected any {activeTab === 'bank' ? 'bank account' : 'card'}, 
          they will be here when you do
        </Text>
      </View>

      {/* Add Buttons - Added at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={24} color="#00d4a0" />
          <Text style={styles.addButtonText}>
            Add new {activeTab === 'bank' ? 'bank account' : 'card'}
          </Text>
        </TouchableOpacity>
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
    marginBottom: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f8',
    borderRadius: 999,
    padding: 6,
    marginBottom: 60,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b6b8a',
  },
  activeTabText: {
    color: '#0d0d1a',
    fontWeight: '700',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  bankImage: {
    width: 220,
    height: 220,
    marginBottom: 50,
  },
  emptyText: {
    fontSize: 17,
    color: '#6b6b8a',
    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingBottom: 40,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f8',
    paddingVertical: 18,
    borderRadius: 999,
  },
  addButtonText: {
    color: '#00d4a0',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 12,
  },
});