import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccountVerificationScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Purple Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Set Up Your Account</Text>
        
        {/* Globe + Money Bag Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={{ uri: 'https://i.ibb.co/1tk0HVgL/globe-removebg-preview.png' }}
            style={styles.globeImage}
            resizeMode="contain"
          />
          <View style={styles.moneyBagOverlay}>
            <Ionicons name="cash" size={0} color="#00d4a0" />
          </View>
        </View>
      </View>

      {/* Benefits Section */}
      <View style={styles.benefitsContainer}>
        <View style={styles.benefitRow}>
          <Ionicons name="globe" size={28} color="#00d4a0" />
          <View style={styles.benefitText}>
            <Text style={styles.benefitTitle}>Collect Payments Globally</Text>
            <Text style={styles.benefitDesc}>
              Receive salaries or payments in USD, CAD, GBP, EURO or NAIRA. Fast and Secure
            </Text>
          </View>
        </View>

        <View style={styles.benefitRow}>
          <Ionicons name="swap-horizontal" size={28} color="#00d4a0" />
          <View style={styles.benefitText}>
            <Text style={styles.benefitTitle}>Swap Currencies Instantly</Text>
            <Text style={styles.benefitDesc}>
              Convert between foreign and local currencies with great rates
            </Text>
          </View>
        </View>

        <View style={styles.benefitRow}>
          <Ionicons name="wallet" size={28} color="#00d4a0" />
          <View style={styles.benefitText}>
            <Text style={styles.benefitTitle}>Hold & Manage Multiple Currencies</Text>
            <Text style={styles.benefitDesc}>
              Keep your money in USD, CAD, GBP, or EUR and spend when you need to
            </Text>
          </View>
        </View>

        <View style={styles.benefitRow}>
          <Ionicons name="flash" size={28} color="#00d4a0" />
          <View style={styles.benefitText}>
            <Text style={styles.benefitTitle}>Less than 2 Minutes Transfer Speed</Text>
            <Text style={styles.benefitDesc}>
              Your money gets to the recipient in less than 2 minutes
            </Text>
          </View>
        </View>
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyText}>Verify Your Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#7c3aed',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  globeImage: {
    width: 260,
    height: 260,
  },
  moneyBagOverlay: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  benefitsContainer: {
    padding: 24,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 28,
    gap: 16,
  },
  benefitText: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0d0d1a',
    marginBottom: 4,
  },
  benefitDesc: {
    fontSize: 15,
    color: '#6b6b8a',
    lineHeight: 22,
  },
  verifyButton: {
    backgroundColor: '#00d4a0',
    marginHorizontal: 24,
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  verifyText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});