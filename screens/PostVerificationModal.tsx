import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PostVerificationModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PostVerificationModal({ visible, onClose }: PostVerificationModalProps) {
  // Auto-dismiss after 2 seconds
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Verified Badge */}
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>YOU ARE VERIFIED</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>Enjoy Swift Money Transfers</Text>

          {/* Benefits */}
          <View style={styles.benefitsContainer}>
            <View style={styles.benefitRow}>
              <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
              <Text style={styles.benefitText}>
                Get Paid In USD, CAD, GBP, EUR &amp; NAIRA - Fast and Reliable
              </Text>
            </View>
            <View style={styles.benefitRow}>
              <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
              <Text style={styles.benefitText}>
                Hold Multiple Currencies, No Hidden Charges.
              </Text>
            </View>
            <View style={styles.benefitRow}>
              <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
              <Text style={styles.benefitText}>
                Send Money Anywhere, Anytime.
              </Text>
            </View>
          </View>

          {/* Welcome Button */}
          <TouchableOpacity style={styles.welcomeButton} onPress={onClose}>
            <Text style={styles.welcomeText}>WELCOME</Text>
          </TouchableOpacity>

          {/* Close button (X) - user can close manually */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={28} color="#0d0d1a" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    position: 'relative',
  },
  verifiedBadge: {
    backgroundColor: '#0d0d1a',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 24,
  },
  verifiedText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0d0d1a',
    textAlign: 'center',
    marginBottom: 32,
  },
  benefitsContainer: {
    width: '100%',
    marginBottom: 40,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 14,
  },
  benefitText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
  welcomeButton: {
    backgroundColor: '#00d4a0',
    width: '100%',
    height: 58,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});