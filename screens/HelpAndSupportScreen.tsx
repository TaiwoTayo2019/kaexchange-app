import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HelpAndSupportScreen() {
  const handlePress = (title: string) => {
    Alert.alert(title, `You tapped "${title}".\n\nThis will open the real screen or action in production.`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      {/* Greeting Title */}
      <Text style={styles.title}>Hi Mark, how can we help?</Text>

      {/* Menu Card */}
      <View style={styles.menuCard}>
        {/* Help Center */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Help Center')}>
          <Ionicons name="help-circle" size={26} color="#0d0d1a" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Help center</Text>
            <Text style={styles.menuSubtitle}>Fast answers to all the most common questions</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Contact Support */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Contact Support')}>
          <Ionicons name="chatbubble" size={26} color="#0d0d1a" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Contact support</Text>
            <Text style={styles.menuSubtitle}>Chat with our team of experts</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Call Center */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Call Center')}>
          <Ionicons name="call" size={26} color="#0d0d1a" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Call center</Text>
            <Text style={styles.menuSubtitle}>Call us to speak to a support agent</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>

        {/* Follow us on Social Media */}
        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]} onPress={() => handlePress('Social Media')}>
          <Ionicons name="share-social" size={26} color="#0d0d1a" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Follow us on social media</Text>
            <Text style={styles.menuSubtitle}>Join our social media to view latest information</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6b6b8a" />
        </TouchableOpacity>
      </View>
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
    marginBottom: 50,
    lineHeight: 38,
  },
  menuCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 26,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  menuTextContainer: {
    marginLeft: 20,
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d0d1a',
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#6b6b8a',
    marginTop: 4,
    lineHeight: 20,
  },
});