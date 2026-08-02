import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyPINScreen() {
  const [pin, setPin] = useState('');

  const handlePinPress = (digit: string) => {
    if (pin.length < 4) setPin(pin + digit);
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleForgotPin = () => {
    Alert.alert(
      "Forgot PIN",
      "PIN reset flow will be implemented soon.\n\nWould you like to reset your PIN?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Reset PIN", onPress: () => Alert.alert("PIN Reset", "Coming soon!") }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.pinHeader}>
        <View style={styles.pinIcon}>
          <Ionicons name="keypad" size={40} color="#0d0d1a" />
        </View>
        <Text style={styles.title}>Enter your PIN</Text>
      </View>

      <View style={styles.pinDots}>
        {[0,1,2,3].map((i) => (
          <View key={i} style={[styles.dot, pin.length > i && styles.dotFilled]} />
        ))}
      </View>

      {/* Number Pad */}
      <View style={styles.keypad}>
        {[1,2,3,4,5,6,7,8,9].map((num) => (
          <TouchableOpacity key={num} style={styles.key} onPress={() => handlePinPress(num.toString())}>
            <Text style={styles.keyText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.key} />
        <TouchableOpacity style={styles.key} onPress={() => handlePinPress('0')}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={handleDelete}>
          <Ionicons name="backspace-outline" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Forgot PIN - Moved closer */}
      <TouchableOpacity style={styles.forgotPin} onPress={handleForgotPin}>
        <Text style={styles.forgotText}>Forgot your PIN?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 40 },
  pinHeader: { alignItems: 'center', marginBottom: 40 },
  pinIcon: { width: 80, height: 80, backgroundColor: '#f4f4f8', borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '800', color: '#0d0d1a' },
  pinDots: { flexDirection: 'row', justifyContent: 'center', gap: 16, marginBottom: 60 },
  dot: { width: 20, height: 20, borderRadius: 999, borderWidth: 2, borderColor: '#d1d1d6' },
  dotFilled: { backgroundColor: '#0d0d1a' },
  keypad: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginBottom: 30 },   // ← Reduced gap
  key: { width: 80, height: 80, backgroundColor: '#f4f4f8', borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  keyText: { fontSize: 28, fontWeight: '700', color: '#0d0d1a' },
  forgotPin: { 
    alignSelf: 'center', 
    paddingVertical: 12, 
    paddingHorizontal: 24,
    marginTop: 10   // ← Added small top margin for better spacing
  },
  forgotText: { 
    color: '#00d4a0', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});