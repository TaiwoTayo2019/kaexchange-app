import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccountInformationScreen() {
  const openLanguageSelector = () => {
    Alert.alert(
      'Select Language',
      'Language selector screen will open here.\n\n(We will build the full screen next if you want)',
      [{ text: 'OK' }]
    );
    // Later we will navigate to the real Language screen
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
      <Text style={styles.title}>Account Information</Text>

      {/* Menu Card */}
      <View style={styles.menuCard}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="card" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Account limits</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="document-text" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Account statement</Text>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Language - Now Clickable */}
        <TouchableOpacity style={styles.menuItem} onPress={openLanguageSelector}>
          <Ionicons name="language" size={24} color="#0d0d1a" />
          <Text style={styles.menuText}>Language</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText}>English</Text>
            <Text style={styles.flag}>🇬🇧</Text>
          </View>
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
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  languageText: {
    fontSize: 17,
    color: '#0d0d1a',
    fontWeight: '600',
  },
  flag: {
    fontSize: 22,
  },
});