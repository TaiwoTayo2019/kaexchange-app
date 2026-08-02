import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ResetNewPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isValidLength = newPassword.length >= 8;
  const hasLetterNumberSpecial = /[A-Za-z]/.test(newPassword) && /\d/.test(newPassword) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword);

  const canUpdate = isValidLength && hasLetterNumberSpecial && newPassword === confirmPassword && newPassword !== '';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Reset password</Text>

      {/* New Password */}
      <Text style={styles.label}>Enter new password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showNew}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setShowNew(!showNew)}>
          <Ionicons name={showNew ? "eye-off" : "eye"} size={24} color="#6b6b8a" />
        </TouchableOpacity>
      </View>

      {/* Re-enter New Password */}
      <Text style={styles.label}>Re-enter new password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showConfirm}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
          <Ionicons name={showConfirm ? "eye-off" : "eye"} size={24} color="#6b6b8a" />
        </TouchableOpacity>
      </View>

      {/* Password Rules */}
      <View style={styles.rulesContainer}>
        <View style={styles.ruleRow}>
          <Ionicons name={isValidLength ? "checkmark-circle" : "ellipse-outline"} size={24} color={isValidLength ? "#00d4a0" : "#9ca3af"} />
          <Text style={styles.ruleText}>New password must be at least 8 characters</Text>
        </View>
        <View style={styles.ruleRow}>
          <Ionicons name={hasLetterNumberSpecial ? "checkmark-circle" : "ellipse-outline"} size={24} color={hasLetterNumberSpecial ? "#00d4a0" : "#9ca3af"} />
          <Text style={styles.ruleText}>Must consist of letters, at least one number and a special character (e.g. _, @, & and the likes)</Text>
        </View>
      </View>

      {/* Update Button */}
      <TouchableOpacity style={[styles.updateButton, !canUpdate && styles.buttonDisabled]} disabled={!canUpdate}>
        <Text style={styles.updateText}>Update</Text>
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
  header: { marginBottom: 20 },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#6b6b8a',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f8',
    borderRadius: 16,
    paddingHorizontal: 20,
    height: 62,
    marginBottom: 28,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#0d0d1a',
  },
  rulesContainer: {
    marginBottom: 60,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  ruleText: {
    fontSize: 15,
    color: '#6b6b8a',
    flex: 1,
    lineHeight: 22,
  },
  updateButton: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#a1f0d0',
  },
  updateText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});