import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SavedCardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
        <Text style={styles.title}>Saved cards</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Saved Card 1 */}
        <View style={styles.cardRow}>
          <Ionicons name="card-outline" size={32} color="#0d0d1a" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardNumber}>•••• •••• •••• 4242</Text>
            <Text style={styles.cardExpiry}>Expires 12/28</Text>
          </View>
          <Ionicons name="checkmark-circle" size={24} color="#00d4a0" />
        </View>

        {/* Saved Card 2 */}
        <View style={styles.cardRow}>
          <Ionicons name="card-outline" size={32} color="#0d0d1a" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardNumber}>•••• •••• •••• 5555</Text>
            <Text style={styles.cardExpiry}>Expires 09/27</Text>
          </View>
        </View>

        {/* Add new card */}
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={24} color="#00d4a0" />
          <Text style={styles.addText}>Add new card</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24, paddingTop: 60 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginLeft: 16 },
  cardRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 16, padding: 20, marginBottom: 12 },
  cardInfo: { flex: 1, marginLeft: 16 },
  cardNumber: { fontSize: 18, fontWeight: '600', color: '#0d0d1a' },
  cardExpiry: { fontSize: 15, color: '#6b6b8a', marginTop: 4 },
  addButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f8', borderRadius: 16, padding: 20, marginTop: 20 },
  addText: { fontSize: 18, fontWeight: '700', color: '#00d4a0', marginLeft: 12 },
});