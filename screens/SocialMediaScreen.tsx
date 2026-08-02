import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SocialMediaScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Social Media</Text>

      {/* Menu Card */}
      <View style={styles.menuCard}>
        {/* X */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="logo-x" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}></Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Instagram */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="logo-instagram" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>Instagram</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Facebook */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="logo-facebook" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>Facebook</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* LinkedIn */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="logo-linkedin" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>LinkedIn</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* TikTok */}
        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Ionicons name="logo-tiktok" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>TikTok</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
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
  menuCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 26,
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