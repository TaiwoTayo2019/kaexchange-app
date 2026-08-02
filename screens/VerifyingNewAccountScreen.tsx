import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyingNewAccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Your new image */}
      <View style={styles.illustrationContainer}>
        <Image 
          source={{ uri: 'https://i.ibb.co/R4B7QpS5/image.png' }} 
          style={styles.verificationImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>We are verifying your new account</Text>
      <Text style={styles.subtitle}>
        We are verifying the details of your primary account while contacting the issuing bank for automatic account generation. It typically takes a few minutes but could last up to 24 hours sometimes.
      </Text>

      <View style={styles.checklist}>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
          <Text style={styles.checkText}>Your personal details including legal name, home address and date of birth.</Text>
        </View>
        <View style={styles.checkItem}>
          <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
          <Text style={styles.checkText}>Generating new account and connecting to Kaexchange database.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 40 },
  illustrationContainer: { 
    alignItems: 'center', 
    marginBottom: 40,
    height: 220 
  },
  verificationImage: { 
    width: '100%', 
    height: '100%' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: '800', 
    color: '#0d0d1a', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#6b6b8a', 
    textAlign: 'center', 
    lineHeight: 26, 
    marginBottom: 40 
  },
  checklist: { gap: 20 },
  checkItem: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    gap: 12 
  },
  checkText: { 
    fontSize: 16, 
    color: '#0d0d1a', 
    flex: 1, 
    lineHeight: 24 
  },
});