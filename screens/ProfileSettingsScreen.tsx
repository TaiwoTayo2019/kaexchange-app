import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileSettingsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.headerTitle}>Profile Settings</Text>

      {/* User Card */}
      <View style={styles.userCard}>
        <Image source={{ uri: 'https://i.pravatar.cc/300?u=markjacobs' }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Mark A. Jacobs</Text>
          <Text style={styles.userEmail}>user@figma.com</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Account information</Text>
          <Text style={styles.menuSub}>Information about your account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Help and Support</Text>
          <Text style={styles.menuSub}>Need help? We've got you</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="shield-checkmark" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Security and Privacy</Text>
          <Text style={styles.menuSub}>Keep your account safe</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Notification & Preferences  </Text>
          <Text style={styles.menuSub}>Manage your notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="link" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Manage connected accounts</Text>
          <Text style={styles.menuSub}>External accounts connected</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="information-circle" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>About</Text>
          <Text style={styles.menuSub}>Information about KaExchange</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="log-out" size={24} color="#ef4444" />
          <Text style={[styles.menuText, { color: '#ef4444' }]}>Log out</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation (for reference) */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={28} color="#6b6b8a" />
        <Ionicons name="swap-horizontal" size={28} color="#6b6b8a" />
        <Ionicons name="wallet" size={28} color="#6b6b8a" />
        <Ionicons name="person" size={28} color="#00d4a0" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  headerTitle: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 40 },
  userCard: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 20, padding: 20, marginBottom: 40, alignItems: 'center' },
  avatar: { width: 64, height: 64, borderRadius: 32 },
  userInfo: { marginLeft: 20 },
  userName: { fontSize: 20, fontWeight: '700', color: '#0d0d1a' },
  userEmail: { fontSize: 15, color: '#6b6b8a' },
  menuContainer: { backgroundColor: '#ffffff' },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  menuText: { fontSize: 18, fontWeight: '600', color: '#0d0d1a', marginLeft: 20, flex: 1 },
  menuSub: { fontSize: 14, color: '#6b6b8a', marginLeft: 20 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 16, backgroundColor: '#ffffff', borderTopWidth: 1, borderTopColor: '#f0f0f0', marginTop: 'auto' },
});