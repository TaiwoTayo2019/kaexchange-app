import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BasicInfoScreen() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) setDateOfBirth(selectedDate);
  };

  const formattedDate = dateOfBirth.toLocaleDateString('en-GB'); // DD/MM/YYYY

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
      <Text style={styles.title}>Basic information</Text>

      {/* Warning Box */}
      <View style={styles.warningBox}>
        <Text style={styles.warningText}>
          Enter your full legal name exactly as it appears on your government issued ID, no initials.
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>First name</Text>
            <TextInput style={styles.input} placeholder="Enter first name" value={firstName} onChangeText={setFirstName} />
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>Middle name (optional)</Text>
            <TextInput style={styles.input} placeholder="Enter middle name" value={middleName} onChangeText={setMiddleName} />
          </View>
        </View>

        <View style={styles.full}>
          <Text style={styles.label}>Last name</Text>
          <TextInput style={styles.input} placeholder="Enter last name" value={lastName} onChangeText={setLastName} />
        </View>

        <View style={styles.full}>
          <Text style={styles.label}>Email address</Text>
          <TextInput style={styles.input} placeholder="Enter email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        </View>

        {/* Modern Date Picker */}
        <View style={styles.full}>
          <Text style={styles.label}>Date of birth</Text>
          <TouchableOpacity style={styles.dateInput} onPress={() => setShowPicker(true)}>
            <Text style={styles.dateText}>{formattedDate}</Text>
            <Ionicons name="calendar-outline" size={24} color="#00d4a0" />
          </TouchableOpacity>
        </View>

        {showPicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.ageNote}>
          You must be 18 or over to use KaExchange
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 60, marginBottom: 30 },
  helpButton: { backgroundColor: '#00d4a0', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 999 },
  helpText: { color: '#0d0d1a', fontWeight: '700', fontSize: 14 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 20 },
  warningBox: { backgroundColor: '#fff7e6', borderLeftWidth: 5, borderLeftColor: '#f59e0b', padding: 16, borderRadius: 8, marginBottom: 30 },
  warningText: { color: '#b45309', fontSize: 15, lineHeight: 22 },
  form: { marginBottom: 30 },
  row: { flexDirection: 'row', gap: 12 },
  half: { flex: 1 },
  full: { marginTop: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8 },
  input: { backgroundColor: '#f4f4f8', height: 56, borderRadius: 12, paddingHorizontal: 16, fontSize: 16 },
  dateInput: { backgroundColor: '#f4f4f8', height: 56, borderRadius: 12, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  dateText: { fontSize: 16, color: '#0d0d1a' },
  ageNote: { fontSize: 14, color: '#6b6b8a', marginTop: 12 },
  continueButton: { backgroundColor: '#00d4a0', height: 58, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  continueText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});