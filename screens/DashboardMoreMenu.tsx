import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardMoreMenu({ onClose }: any) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={28} color="#0d0d1a" />
        </TouchableOpacity>

        <Text style={styles.title}>More</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="swap-horizontal" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Convert currency</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="add-circle" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Add a new account</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modal: { backgroundColor: '#ffffff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, paddingBottom: 40 },
  closeButton: { alignSelf: 'flex-end', padding: 8 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a', marginBottom: 30 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  menuText: { flex: 1, fontSize: 18, marginLeft: 16, color: '#0d0d1a' },
});