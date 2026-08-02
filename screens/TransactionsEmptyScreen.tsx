import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TransactionsScreen() {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const transactions = [
    { id: 1, type: "To Mark Aaron Jacobs", time: "6:17 PM", amount: "-120,000.00 NGN", secondary: "-20,000.00 GBP", status: "Successful", icon: "arrow-up", iconColor: "#ef4444" },
    { id: 2, type: "Topup with Apple Pay", time: "6:17 PM", amount: "+5,000.00 NGN", secondary: "", status: "Successful", icon: "logo-apple", iconColor: "#0d0d1a" },
    { id: 3, type: "From Mark Aaron Jacobs", time: "6:17 PM", amount: "+120,000.00 GBP", secondary: "+240,000.00 NGN", status: "In Progress", icon: "arrow-down", iconColor: "#00d4a0" },
    { id: 4, type: "To Mark Aaron Jacobs", time: "6:17 PM", amount: "-45,000.00 NGN", secondary: "", status: "Failed", icon: "arrow-up", iconColor: "#ef4444" },
  ];

  const filteredTransactions = activeFilter 
    ? transactions.filter(t => t.status === activeFilter) 
    : transactions;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#0d0d1a" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Transactions</Text>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterTab, !activeFilter && styles.activeTab]}
          onPress={() => setActiveFilter(null)}
        >
          <Text style={[styles.tabText, !activeFilter && styles.activeTabText]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.filterTab} 
          onPress={() => setShowStatusModal(true)}
        >
          <Ionicons name="pricetag" size={20} color="#6b6b8a" />
          <Text style={styles.tabText}>Status</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions List */}
      {filteredTransactions.map((tx) => (
        <View key={tx.id} style={styles.transactionCard}>
          <View style={styles.iconCircle}>
            <Ionicons name={tx.icon} size={24} color={tx.iconColor} />
          </View>
          <View style={styles.content}>
            <Text style={styles.titleText}>{tx.type}</Text>
            <Text style={styles.time}>{tx.time}</Text>
            <Text style={styles.statusLabel}>{tx.status}</Text>
          </View>
          <View style={styles.amountColumn}>
            <Text style={tx.amount.startsWith('+') ? styles.positiveAmount : styles.negativeAmount}>
              {tx.amount}
            </Text>
            {tx.secondary ? <Text style={styles.secondaryAmount}>{tx.secondary}</Text> : null}
          </View>
        </View>
      ))}

      {/* Improved Movable Status Modal */}
      <Modal visible={showStatusModal} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowStatusModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {/* Drag Handle */}
                <View style={styles.dragHandleContainer}>
                  <View style={styles.dragHandle} />
                </View>

                <Text style={styles.modalTitle}>Select status</Text>

                {['Successful', 'In Progress', 'Failed', 'Cancelled'].map((status) => (
                  <TouchableOpacity 
                    key={status} 
                    style={styles.modalItem}
                    onPress={() => {
                      setActiveFilter(status);
                      setShowStatusModal(false);
                    }}
                  >
                    <Text style={styles.modalItemText}>{status}</Text>
                  </TouchableOpacity>
                ))}

                <TouchableOpacity 
                  style={styles.filterButton} 
                  onPress={() => setShowStatusModal(false)}
                >
                  <Text style={styles.filterButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 32, paddingTop: 80 },
  header: { marginBottom: 20 },
  title: { fontSize: 32, fontWeight: '800', color: '#0d0d1a', marginBottom: 30 },
  filterContainer: { flexDirection: 'row', backgroundColor: '#f4f4f8', borderRadius: 999, padding: 6, marginBottom: 40 },
  filterTab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 999, flexDirection: 'row', justifyContent: 'center', gap: 6 },
  activeTab: { backgroundColor: '#ffffff', shadowColor: '#000', shadowOpacity: 0.1, elevation: 3 },
  activeTabText: { fontSize: 16, fontWeight: '700', color: '#0d0d1a' },
  tabText: { fontSize: 16, color: '#6b6b8a' },
  transactionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f4f8', borderRadius: 20, padding: 20, marginBottom: 12 },
  iconCircle: { width: 48, height: 48, backgroundColor: '#ffffff', borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  content: { flex: 1 },
  titleText: { fontSize: 17, fontWeight: '600', color: '#0d0d1a' },
  time: { fontSize: 14, color: '#6b6b8a' },
  statusLabel: { fontSize: 13, fontWeight: '700', marginTop: 4, color: '#00d4a0' },
  amountColumn: { alignItems: 'flex-end' },
  negativeAmount: { fontSize: 17, fontWeight: '700', color: '#ef4444' },
  positiveAmount: { fontSize: 17, fontWeight: '700', color: '#00d4a0' },
  secondaryAmount: { fontSize: 13, color: '#6b6b8a' },

  /* Improved Movable Modal */
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#ffffff', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 24, paddingBottom: 40 },
  dragHandleContainer: { alignItems: 'center', paddingVertical: 12 },
  dragHandle: { width: 40, height: 5, backgroundColor: '#d1d1d6', borderRadius: 999 },
  modalTitle: { fontSize: 24, fontWeight: '800', color: '#0d0d1a', marginBottom: 24, textAlign: 'center' },
  modalItem: { paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  modalItemText: { fontSize: 18, color: '#0d0d1a' },
  filterButton: { backgroundColor: '#00d4a0', height: 62, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  filterButtonText: { color: '#0d0d1a', fontSize: 18, fontWeight: '700' },
});