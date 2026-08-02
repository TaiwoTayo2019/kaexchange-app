import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UserProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>User profile</Text>

      {/* Profile Details Card */}
      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <Ionicons name="person" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Full name</Text>
          <Text style={styles.value}>Mark Jacobs</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="calendar" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Date Of Birth</Text>
          <Text style={styles.value}>2004-12-09</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="location" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Address line 1</Text>
          <Text style={styles.value}>Ojoo road</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="location" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Address line 2</Text>
          <Text style={styles.value}>Araromi street</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="business" size={24} color="#0d0d1a" />
          <Text style={styles.label}>City</Text>
          <Text style={styles.value}>Ibadan</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="mail" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Email address</Text>
          <Text style={styles.value}>user@figma.com</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="call" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Phone number</Text>
          <Text style={styles.value}>+2347014568917</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="earth" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Country</Text>
          <Text style={styles.value}>Nigeria</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="mail" size={24} color="#0d0d1a" />
          <Text style={styles.label}>Postal code</Text>
          <Text style={styles.value}>200245</Text>
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
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
  detailsCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  label: {
    fontSize: 16,
    color: '#6b6b8a',
    flex: 1,
    marginLeft: 20,
  },
  value: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0d0d1a',
    textAlign: 'right',
  },
  editButton: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  editText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});