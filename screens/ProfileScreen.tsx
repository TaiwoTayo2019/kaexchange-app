import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header / Profile Info */}
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>TB</Text>
          </View>
          <View>
            <Text style={styles.name}>Taiwo Babalola</Text>
            <Text style={styles.email}>taiwo@example.com</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={24} color="#6b6b8a" />
        </TouchableOpacity>
      </View>

      {/* Menu Options */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Account Information</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="shield-checkmark-outline" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Security & Privacy</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="language-outline" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Language</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="document-text-outline" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Legal & Documents</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#00d4a0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0d0d1a',
  },
  email: {
    fontSize: 15,
    color: '#6b6b8a',
  },
  menu: {
    backgroundColor: '#f4f4f8',
    borderRadius: 20,
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
  },
  menuText: {
    flex: 1,
    fontSize: 17,
    marginLeft: 16,
    color: '#0d0d1a',
  },
  logoutButton: {
    marginTop: 40,
    alignItems: 'center',
    paddingVertical: 16,
  },
  logoutText: {
    color: '#ef4444',
    fontSize: 17,
    fontWeight: '600',
  },
});