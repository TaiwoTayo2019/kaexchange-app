import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePasswordScreen() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isValidLength = password.length >= 8 && password.length <= 20;
  const hasNumberOrSymbol = /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

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
      <Text style={styles.title}>Protect your account</Text>
      <Text style={styles.subtitle}>
        Enter a secure password with at least 8 characters, including one symbol and one number.
      </Text>

      {/* Create Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Create Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter a strong password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#6b6b8a" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#6b6b8a" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Validation Checklist */}
      <View style={styles.checklist}>
        <View style={styles.checkRow}>
          <Ionicons name={isValidLength ? "checkmark-circle" : "ellipse-outline"} size={22} color={isValidLength ? "#00d4a0" : "#9898b0"} />
          <Text style={styles.checkText}>Must be 8-20 characters</Text>
        </View>
        <View style={styles.checkRow}>
          <Ionicons name={hasNumberOrSymbol ? "checkmark-circle" : "ellipse-outline"} size={22} color={hasNumberOrSymbol ? "#00d4a0" : "#9898b0"} />
          <Text style={styles.checkText}>Must include at least one number or one special character (e.g $%&)</Text>
        </View>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity 
        style={[styles.createButton, (!isValidLength || !hasNumberOrSymbol || !passwordsMatch) && styles.buttonDisabled]}
        disabled={!isValidLength || !hasNumberOrSymbol || !passwordsMatch}
      >
        <Text style={styles.createButtonText}>Create Account</Text>
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
    marginBottom: 40,
    lineHeight: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f8',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    height: 56,
    fontSize: 16,
  },
  checklist: {
    marginBottom: 40,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  checkText: {
    fontSize: 15,
    color: '#6b6b8a',
    flex: 1,
  },
  createButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#a1f0d0',
  },
  createButtonText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});