import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyPhotoIDScreen() {
  const [selectedCountry, setSelectedCountry] = useState('Nigeria');
  const [selectedID, setSelectedID] = useState<string | null>(null);

  const countries = [
    { name: 'Nigeria', flag: '🇳🇬', code: 'NG' },
    { name: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
    { name: 'United States', flag: '🇺🇸', code: 'US' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'Germany', flag: '🇩🇪', code: 'DE' },

  ];

  const openCountrySelector = () => {
    const options = countries.map((c) => ({
      text: `${c.flag} ${c.name}`,
      onPress: () => setSelectedCountry(c.name),
    }));

    Alert.alert('Select Issuing Country', '', [...options, { text: 'Cancel', style: 'cancel' }]);
  };

  const idTypes = [
    { id: 'passport', name: 'International Passport', icon: '🛫' },
    { id: 'license', name: "Driver's License", icon: '🚗' },
    { id: 'national', name: 'National Identification', icon: '🪪' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Get Help</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Verify your photo ID</Text>
      <Text style={styles.subtitle}>
        Choose ID to use. Your country's issued documents are the fastest for us to verify.
      </Text>

      {/* Issuing Country */}
      <Text style={styles.sectionLabel}>Issuing country/Nationality</Text>
      <TouchableOpacity style={styles.countrySelector} onPress={openCountrySelector}>
        <Text style={styles.countryText}>
          {countries.find(c => c.name === selectedCountry)?.flag} {selectedCountry}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#6b6b8a" />
      </TouchableOpacity>

      {/* Select ID Type */}
      <Text style={styles.sectionLabel}>Select ID type</Text>

      {idTypes.map((type) => (
        <TouchableOpacity
          key={type.id}
          style={[
            styles.idOption,
            selectedID === type.id && styles.idOptionSelected,
          ]}
          onPress={() => setSelectedID(type.id)}
        >
          <Text style={styles.idIcon}>{type.icon}</Text>
          <Text style={styles.idName}>{type.name}</Text>
          {selectedID === type.id && (
            <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
          )}
        </TouchableOpacity>
      ))}

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !selectedID && styles.buttonDisabled]}
        disabled={!selectedID}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  helpButton: {
    backgroundColor: '#00d4a0',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
  },
  helpText: {
    color: '#0d0d1a',
    fontWeight: '700',
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b6b8a',
    marginTop: 8,
    marginBottom: 30,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  countrySelector: {
    backgroundColor: '#f4f4f8',
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  countryText: {
    fontSize: 18,
    fontWeight: '600',
  },
  idOption: {
    backgroundColor: '#f4f4f8',
    borderRadius: 12,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  idOptionSelected: {
    backgroundColor: '#e6f9f2',
    borderWidth: 2,
    borderColor: '#00d4a0',
  },
  idIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  idName: {
    fontSize: 17,
    fontWeight: '600',
    flex: 1,
  },
  continueButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#a1f0d0',
  },
  continueText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});