import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BasicInformationScreen() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) setDateOfBirth(selectedDate);
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
      <Text style={styles.title}>Basic information</Text>
      <Text style={styles.subtitle}>Please enter your legal names</Text>

      {/* First Name & Middle Name */}
      <View style={styles.row}>
        <View style={styles.halfInput}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter first name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.halfInput}>
          <Text style={styles.label}>Middle name (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter middle name"
            value={middleName}
            onChangeText={setMiddleName}
          />
        </View>
      </View>

      {/* Last Name */}
      <Text style={styles.label}>Last name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter last name"
        value={lastName}
        onChangeText={setLastName}
      />

      {/* Date of Birth */}
      <Text style={styles.label}>Date of Birth (yyyy-mm-dd)</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>{dateOfBirth.toISOString().split('T')[0]}</Text>
        <Ionicons name="calendar" size={22} color="#6b6b8a" />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {/* Address Line 1 */}
      <Text style={styles.label}>Address line 1</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter address"
        value={address1}
        onChangeText={setAddress1}
      />

      {/* Address Line 2 */}
      <Text style={styles.label}>Address line 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter address"
        value={address2}
        onChangeText={setAddress2}
      />

      {/* City */}
      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />

      {/* Postal Code */}
      <Text style={styles.label}>Postal code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your area postal code"
        value={postalCode}
        onChangeText={setPostalCode}
        keyboardType="numbers-and-punctuation"
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
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
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b6b8a',
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  halfInput: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#6b6b8a',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f4f4f8',
    borderRadius: 16,
    paddingHorizontal: 20,
    height: 62,
    fontSize: 18,
    color: '#0d0d1a',
    marginBottom: 24,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f8',
    borderRadius: 16,
    paddingHorizontal: 20,
    height: 62,
    marginBottom: 24,
  },
  dateText: {
    flex: 1,
    fontSize: 18,
    color: '#0d0d1a',
  },
  saveButton: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  saveText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});