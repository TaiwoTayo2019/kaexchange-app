import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactUsScreen() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() === '') {
      Alert.alert('Empty Message', 'Please write your message before sending.');
      return;
    }
    Alert.alert('Message Sent', 'Your message has been sent to our support team. We will reply soon.');
    // In production this will send to backend
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>New Message</Text>

      {/* Form Card - Now much more spacious */}
      <View style={styles.formCard}>
        {/* Subject */}
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.subjectInput}
          placeholder="Enter subject"
          value={subject}
          onChangeText={setSubject}
        />

        {/* Message */}
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={styles.messageInput}
          placeholder="Write your message here..."
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={10}
          textAlignVertical="top"
        />
      </View>

      {/* Send Message Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>Send Message</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 60,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  cancelText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d0d1a',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0d0d1a',
    marginBottom: 50,
  },
  formCard: {
    backgroundColor: '#f4f4f8',
    borderRadius: 24,
    padding: 32,
    marginBottom: 50,
  },
  label: {
    fontSize: 16,
    color: '#6b6b8a',
    marginBottom: 12,
  },
  subjectInput: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 18,
    color: '#0d0d1a',
    marginBottom: 40,
  },
  messageInput: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    height: 260,
    fontSize: 18,
    color: '#0d0d1a',
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#00d4a0',
    height: 62,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    color: '#0d0d1a',
    fontSize: 18,
    fontWeight: '700',
  },
});