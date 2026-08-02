import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SecurityAndPrivacyScreen() {
  const [faceIDEnabled, setFaceIDEnabled] = useState(true);
  const [hideBalanceEnabled, setHideBalanceEnabled] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Security and privacy</Text>

      {/* Menu Card */}
      <View style={styles.menuCard}>
        {/* Reset Password */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="lock-closed" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Reset Password</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Face / Touch ID */}
        <View style={styles.menuItem}>
          <Ionicons name="finger-print" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Enable/disable face or touch ID</Text>
          <Switch
            value={faceIDEnabled}
            onValueChange={setFaceIDEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
        </View>

        {/* View Privacy Setting */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="shield-checkmark" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>View Privacy Setting</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Hide Balance */}
        <View style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Ionicons name="eye-off" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Hide Balance</Text>
          <Switch
            value={hideBalanceEnabled}
            onValueChange={setHideBalanceEnabled}
            trackColor={{ false: '#e5e5e5', true: '#00d4a0' }}
            thumbColor="#ffffff"
          />
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
    marginBottom: 40,
  },
  menuCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d0d1a',
    flex: 1,
    marginLeft: 20,
  },
});