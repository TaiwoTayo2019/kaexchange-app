import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('NG');
  const [showPassword, setShowPassword] = useState(false);

  const openCountrySelector = () => {
    Alert.alert('Select Country', '', [
      { text: '🇳🇬 Nigeria (+234)', onPress: () => setCountryCode('NG') },
      { text: '🇬🇧 United Kingdom (+44)', onPress: () => setCountryCode('GB') },
      { text: '🇺🇸 United States (+1)', onPress: () => setCountryCode('US') },
      { text: '🇨🇦 Canada (+1)', onPress: () => setCountryCode('CA') },
      { text: '🇩🇪 Germany (+49)', onPress: () => setCountryCode('DE') },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const handleLogin = () => {
    Alert.alert('Login Button Pressed', 'This would go to the main app in full navigation mode');
    console.log('Login button pressed');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Get Help</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Login to your account</Text>

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
          placeholder="+234"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#6b6b8a" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>
          Trouble Logging in? <Text style={styles.recoverLink}>Recover your account</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don't have an account?{' '}
          <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 60, marginBottom: 40 },
  helpButton: { backgroundColor: '#00d4a0', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 999 },
  helpText: { color: '#0d0d1a', fontWeight: '700', fontSize: 14 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 30 },
  phoneContainer: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 12, padding: 4, marginBottom: 20 },
  countrySelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 14, borderRadius: 10, marginRight: 8, gap: 8 },
  countryFlag: { fontSize: 22 },
  countryCode: { fontSize: 18, fontWeight: '600' },
  phoneInput: { flex: 1, fontSize: 18, paddingVertical: 14, color: '#0d0d1a' },
  passwordContainer: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 12, alignItems: 'center', paddingHorizontal: 16, marginBottom: 20 },
  passwordInput: { flex: 1, height: 56, fontSize: 16 },
  forgotContainer: { marginBottom: 40 },
  forgotText: { fontSize: 15, color: '#6b6b8a' },
  recoverLink: { color: '#00d4a0', fontWeight: '600' },
  continueButton: { backgroundColor: '#00d4a0', height: 58, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  continueText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
  signUpContainer: { marginTop: 30, alignItems: 'center' },
  signUpText: { fontSize: 16, color: '#6b6b8a' },
  signUpLink: { color: '#00d4a0', fontWeight: '700' },
});