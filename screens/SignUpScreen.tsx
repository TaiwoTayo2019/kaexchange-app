import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('NG');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeNews, setAgreeNews] = useState(false);

  const openCountrySelector = () => {
    Alert.alert(
      'Select Country',
      '',
      [
        { text: '🇳🇬 Nigeria (+234)', onPress: () => setCountryCode('NG') },
        { text: '🇬🇧 United Kingdom (+44)', onPress: () => setCountryCode('GB') },
        { text: '🇺🇸 United States (+1)', onPress: () => setCountryCode('US') },
        { text: '🇨🇦 Canada (+1)', onPress: () => setCountryCode('CA') },
        { text: '🇩🇪 Germany (+49)', onPress: () => setCountryCode('DE') },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

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
      <Text style={styles.title}>Let’s get started</Text>
      <Text style={styles.subtitle}>
        Enter your phone number to set up your account
      </Text>

      {/* Phone Input */}
      <View style={styles.phoneContainer}>
        <TouchableOpacity style={styles.countrySelector} onPress={openCountrySelector}>
          <Text style={styles.countryFlag}>
            {countryCode === 'NG' ? '🇳🇬' : countryCode === 'GB' ? '🇬🇧' : countryCode === 'US' ? '🇺🇸' : countryCode === 'CA' ? '🇨🇦' : '🇩🇪'}
          </Text>
          <Text style={styles.countryCode}>{countryCode}</Text>
          <Ionicons name="chevron-down" size={18} color="#6b6b8a" />
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInput}
          placeholder="+234 812 345 6789"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Checkboxes */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgreeNews(!agreeNews)}>
          <View style={[styles.checkbox, agreeNews && styles.checkboxChecked]}>
            {agreeNews && <Ionicons name="checkmark" size={18} color="#fff" />}
          </View>
          <Text style={styles.checkboxText}>
            Tick this box to receive news about KaExchange products and services via email and other channels.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgreeTerms(!agreeTerms)}>
          <View style={[styles.checkbox, agreeTerms && styles.checkboxChecked]}>
            {agreeTerms && <Ionicons name="checkmark" size={18} color="#fff" />}
          </View>
          <Text style={styles.checkboxText}>
            Tick this box to agree to our <Text style={styles.link}>Terms & Conditions</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      {/* Already have account */}
      <TouchableOpacity style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 60, marginBottom: 30 },
  helpButton: { backgroundColor: '#00d4a0', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 999 },
  helpText: { color: '#0d0d1a', fontWeight: '700', fontSize: 14 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a' },
  subtitle: { fontSize: 16, color: '#6b6b8a', marginTop: 8, marginBottom: 30 },
  phoneContainer: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 12, padding: 4, marginBottom: 30 },
  countrySelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 14, borderRadius: 10, marginRight: 8, gap: 8 },
  countryFlag: { fontSize: 22 },
  countryCode: { fontSize: 18, fontWeight: '600' },
  phoneInput: { flex: 1, fontSize: 18, paddingVertical: 14, color: '#0d0d1a' },
  checkboxContainer: { marginBottom: 40 },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20, gap: 12 },
  checkbox: { width: 26, height: 26, borderRadius: 6, borderWidth: 2, borderColor: '#9898b0', marginTop: 2 },
  checkboxChecked: { backgroundColor: '#00d4a0', borderColor: '#00d4a0' },
  checkboxText: { flex: 1, fontSize: 15, lineHeight: 22, color: '#6b6b8a' },
  link: { color: '#00d4a0', fontWeight: '600' },
  continueButton: { backgroundColor: '#00d4a0', height: 58, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  continueText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
  signInContainer: { alignItems: 'center', marginTop: 10 },
  signInText: { fontSize: 16, color: '#6b6b8a' },
  signInLink: { color: '#00d4a0', fontWeight: '700' },
});