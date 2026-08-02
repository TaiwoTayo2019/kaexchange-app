import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('English (United Kingdom)');

  const languages = [
    { name: 'English (United Kingdom)', flag: '🇬🇧' },
    { name: 'English (United States)', flag: '🇺🇸' },
    { name: 'French (Francais)', flag: '🇫🇷' },
    { name: 'Spanish (Espanol)', flag: '🇪🇸' },
    { name: 'Portuguese (Portugues)', flag: '🇵🇹' },
    { name: 'German (Deutsch)', flag: '🇩🇪' },
    { name: 'Italian (Italiano)', flag: '🇮🇹' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Select your preferred language</Text>

     

      {/* Language List */}
      <View style={styles.listContainer}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.name}
            style={styles.languageRow}
            onPress={() => setSelectedLanguage(lang.name)}
          >
            <Text style={styles.flag}>{lang.flag}</Text>
            <Text style={styles.languageName}>{lang.name}</Text>
            <View style={styles.radioContainer}>
              {selectedLanguage === lang.name ? (
                <Ionicons name="checkmark-circle" size={26} color="#00d4a0" />
              ) : (
                <View style={styles.emptyCircle} />
              )}
            </View>
          </TouchableOpacity>
        ))}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f8',
    borderRadius: 999,
    paddingHorizontal: 20,
    height: 56,
    marginBottom: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#0d0d1a',
  },
  listContainer: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 8,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  flag: {
    fontSize: 28,
    marginRight: 20,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d0d1a',
    flex: 1,
  },
  radioContainer: {
    width: 30,
    alignItems: 'center',
  },
  emptyCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6b6b8a',
  },
});