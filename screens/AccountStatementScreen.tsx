import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AccountStatementScreen() {
  const [currency, setCurrency] = useState('Select currency');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const [pdfFormat, setPdfFormat] = useState(false);

  const currencies = ['USD', 'GBP', 'EUR', 'NGN', 'CAD'];

  const onStartDateChange = (event: any, selectedDate?: Date) => {
    setShowStartPicker(false);
    if (selectedDate) setStartDate(selectedDate);
  };

  const onEndDateChange = (event: any, selectedDate?: Date) => {
    setShowEndPicker(false);
    if (selectedDate) setEndDate(selectedDate);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Account Statement</Text>
      <Text style={styles.instruction}>
        Choose a timeframe for your statement and select the format you want it in
      </Text>

      {/* Currency Dropdown */}
      <Text style={styles.label}>Select currency</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setShowCurrencyDropdown(!showCurrencyDropdown)}>
        <Text style={styles.dropdownText}>{currency}</Text>
        <Ionicons name={showCurrencyDropdown ? "chevron-up" : "chevron-down"} size={20} color="#6b6b8a" />
      </TouchableOpacity>

      {showCurrencyDropdown && (
        <View style={styles.dropdownList}>
          {currencies.map((cur) => (
            <TouchableOpacity
              key={cur}
              style={styles.dropdownItem}
              onPress={() => {
                setCurrency(cur);
                setShowCurrencyDropdown(false);
              }}
            >
              <Text style={styles.dropdownItemText}>{cur}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Start Date */}
      <Text style={styles.label}>Start date</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowStartPicker(true)}>
        <Text style={styles.dateText}>{startDate.toISOString().split('T')[0]}</Text>
        <Ionicons name="calendar" size={22} color="#6b6b8a" />
      </TouchableOpacity>

      {showStartPicker && (
        <DateTimePicker value={startDate} mode="date" display="default" onChange={onStartDateChange} />
      )}

      {/* End Date */}
      <Text style={styles.label}>End date</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowEndPicker(true)}>
        <Text style={styles.dateText}>{endDate.toISOString().split('T')[0]}</Text>
        <Ionicons name="calendar" size={22} color="#6b6b8a" />
      </TouchableOpacity>

      {showEndPicker && (
        <DateTimePicker value={endDate} mode="date" display="default" onChange={onEndDateChange} />
      )}

      {/* PDF Format */}
      <TouchableOpacity style={styles.checkboxRow} onPress={() => setPdfFormat(!pdfFormat)}>
        <View style={[styles.checkbox, pdfFormat && styles.checkboxChecked]}>
          {pdfFormat && <Ionicons name="checkmark" size={18} color="#ffffff" />}
        </View>
        <Text style={styles.checkboxLabel}>PDF Format</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.getButton}>
        <Text style={styles.getButtonText}>Get Statement</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 12 },
  instruction: { fontSize: 16, color: '#6b6b8a', lineHeight: 26, marginBottom: 40 },
  label: { fontSize: 16, color: '#6b6b8a', marginBottom: 12 },
  dropdown: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 16, paddingHorizontal: 20, height: 62, marginBottom: 8 },
  dropdownText: { flex: 1, fontSize: 18, color: '#0d0d1a' },
  dropdownList: { backgroundColor: '#f4f4f8', borderRadius: 16, marginBottom: 28, padding: 8 },
  dropdownItem: { paddingVertical: 16, paddingHorizontal: 20 },
  dropdownItemText: { fontSize: 18, color: '#0d0d1a' },
  dateInput: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 16, paddingHorizontal: 20, height: 62, marginBottom: 28 },
  dateText: { flex: 1, fontSize: 18, color: '#0d0d1a' },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 60 },
  checkbox: { width: 24, height: 24, borderWidth: 2, borderColor: '#6b6b8a', borderRadius: 6, marginRight: 12, alignItems: 'center', justifyContent: 'center' },
  checkboxChecked: { backgroundColor: '#00d4a0', borderColor: '#00d4a0' },
  checkboxLabel: { fontSize: 16, color: '#0d0d1a' },
  getButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  getButtonText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});