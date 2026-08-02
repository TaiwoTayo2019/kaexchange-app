import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IdentityVerificationScreen() {
  const handleIdentityDocument = () => {
    Alert.alert(
      "Open Camera",
      "This will open the camera to take a photo of your ID document.",
      [{ text: "OK", onPress: () => console.log("ID Camera opened") }]
    );
    // Later we will navigate to the actual ID capture screen
  };

  const handleSelfie = () => {
    Alert.alert(
      "Open Camera",
      "This will open the camera for a selfie.",
      [{ text: "OK", onPress: () => console.log("Selfie Camera opened") }]
    );
    // Later we will navigate to the selfie capture screen
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
      <Text style={styles.title}>Verify your identity</Text>
      <Text style={styles.subtitle}>It will only take 2 minutes.</Text>

      {/* Identity Document Card */}
      <TouchableOpacity style={styles.card} onPress={handleIdentityDocument}>
        <View style={styles.cardIcon}>
          <Ionicons name="card" size={28} color="#0d0d1a" />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Identity document</Text>
          <Text style={styles.cardSubtitle}>Take a photo of your ID</Text>
        </View>
      </TouchableOpacity>

      {/* Selfie Card */}
      <TouchableOpacity style={styles.card} onPress={handleSelfie}>
        <View style={styles.cardIcon}>
          <Ionicons name="camera" size={28} color="#0d0d1a" />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Selfie</Text>
          <Text style={styles.cardSubtitle}>Take a selfie</Text>
        </View>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
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
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#f4f4f8',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0d0d1a',
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#6b6b8a',
    marginTop: 4,
  },
  continueButton: {
    backgroundColor: '#00d4a0',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  continueText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});