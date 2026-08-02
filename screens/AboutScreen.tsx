import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  const handlePress = (title: string) => {
    Alert.alert(title, `You tapped "${title}".\n\nWe will connect the real screen or link here later.`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>About KaExchange</Text>

      {/* Menu Card */}
      <View style={styles.menuCard}>
        {/* Legal */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Legal')}>
          <Ionicons name="document-text" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>Legal</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Social Media */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Social Media')}>
          <Ionicons name="thumbs-up" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>Social Media</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Visit Our Website */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Visit Our Website')}>
          <Ionicons name="globe" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>Visit Our Website</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Contact Us */}
        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]} onPress={() => handlePress('Contact Us')}>
          <Ionicons name="call" size={26} color="#0d0d1a" />
          <Text style={styles.menuText}>Contact Us</Text>
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