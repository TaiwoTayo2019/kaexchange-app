import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LegalScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Legal</Text>

      {/* Terms and Conditions */}
      <Text style={styles.sectionHeader}>Terms and Conditions</Text>
      <Text style={styles.bodyText}>
        Last updated: April 2026{'\n\n'}
        Welcome to KaExchange. By using our app, you agree to these Terms and Conditions.{'\n\n'}
        KaExchange is a remittance platform built by Nigerians in the diaspora for Nigerians in the diaspora. We make it fast, safe, and affordable to send money between the UK, US, Canada, EU, and Nigeria.{'\n\n'}
        <Text style={styles.bold}>1. Our Services</Text>{'\n'}
        We facilitate international money transfers. We are not a bank. Funds are held with licensed partners.{'\n\n'}
        <Text style={styles.bold}>2. Eligibility</Text>{'\n'}
        You must be at least 18 years old and a resident of a supported country.{'\n\n'}
        <Text style={styles.bold}>3. Fees &amp; Exchange Rates</Text>{'\n'}
        All fees are shown clearly before you confirm any transaction. We use competitive real-time exchange rates.{'\n\n'}
        <Text style={styles.bold}>4. Security &amp; Compliance</Text>{'\n'}
        We comply with Nigerian AML/CFT regulations, UK FCA, US FinCEN, and EU requirements. We may ask for additional verification at any time.{'\n\n'}
        <Text style={styles.bold}>5. Liability</Text>{'\n'}
        KaExchange is not liable for delays caused by banks, regulators, or force majeure events.{'\n\n'}
        <Text style={styles.bold}>6. Changes to Terms</Text>{'\n'}
        We may update these terms. Continued use of the app means you accept the changes.
      </Text>

      {/* Privacy Policy */}
      <Text style={styles.sectionHeader}>Privacy Policy</Text>
      <Text style={styles.bodyText}>
        At KaExchange, your privacy and the security of your money are our top priorities.{'\n\n'}
        <Text style={styles.bold}>1. Information We Collect</Text>{'\n'}
        • Personal details (name, date of birth, address, phone, email){'\n'}
        • Government-issued ID and selfie for verification{'\n'}
        • Bank account and transaction details{'\n'}
        • Device and usage data{'\n\n'}
        <Text style={styles.bold}>2. How We Use Your Information</Text>{'\n'}
        • To verify your identity and comply with regulations{'\n'}
        • To process your transfers securely{'\n'}
        • To prevent fraud and money laundering{'\n'}
        • To send important account updates{'\n'}
        • To improve our service (with your consent){'\n\n'}
        <Text style={styles.bold}>3. Data Sharing</Text>{'\n'}
        We only share your data with trusted partners for verification, payment processing, and regulatory compliance. We never sell your data.{'\n\n'}
        <Text style={styles.bold}>4. Your Rights</Text>{'\n'}
        You can request access, correction, or deletion of your personal data at any time by contacting support.{'\n\n'}
        <Text style={styles.bold}>5. Security</Text>{'\n'}
        We use bank-level encryption and multi-factor authentication to protect your information.
      </Text>

      {/* Footer note */}
      <Text style={styles.footerNote}>
        If you have any questions about these documents, please contact us at support@kaexchange.com
      </Text>
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
    marginBottom: 40,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0d0d1a',
    marginTop: 40,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 28,
    color: '#374151',
  },
  bold: {
    fontWeight: '700',
    color: '#0d0d1a',
  },
  footerNote: {
    fontSize: 14,
    color: '#6b6b8a',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
});