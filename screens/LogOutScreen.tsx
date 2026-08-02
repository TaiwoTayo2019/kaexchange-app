import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LogOutScreen() {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <View style={styles.iconContainer}>
        <Ionicons name="log-out" size={110} color="#ef4444" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Log out</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Are you sure you want to log out of your KaExchange account?
      </Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Yes, log me out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 140,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 17,
    color: '#6b6b8a',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    width: '100%',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  cancelButton: {
    backgroundColor: '#f4f4f8',
    width: '100%',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});