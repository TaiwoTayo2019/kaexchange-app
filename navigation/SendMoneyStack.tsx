// navigation/SendMoneyStack.tsx
// The full send money flow — launched from Home, Wallet, or Activity tabs

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SendScreen from '../screens/send/SendScreen';
import SendMoneyFormScreen from '../screens/send/SendMoneyFormScreen';
import SendMoneyRecipientScreen from '../screens/send/SendMoneyRecipientScreen';
import AddNewRecipientScreen from '../screens/send/AddNewRecipientScreen';
import ChooseAccountProviderScreen from '../screens/send/ChooseAccountProviderScreen';
import SendMoneyReviewScreen from '../screens/send/SendMoneyReviewScreen';
import SendMoneyPINScreen from '../screens/send/SendMoneyPINScreen';
import SendMoneyPINCompleteScreen from '../screens/send/SendMoneyPINCompleteScreen';
import SendMoneySuccessScreen from '../screens/send/SendMoneySuccessScreen';
import SendMoneyInProgressScreen from '../screens/send/SendMoneyInProgressScreen';
import SendMoneyErrorScreen from '../screens/send/SendMoneyErrorScreen';
import SendMoneyUpdatesScreen from '../screens/send/SendMoneyUpdatesScreen';

export type SendMoneyStackParamList = {
  // Step 0 — modal that initiates the flow
  Send: undefined;

  // Step 1 — enter amount + currency
  // GBP → NGN, how much, exchange rate preview
  SendMoneyForm: {
    recipientId?: string; // pre-filled if coming from "Send Again"
  };

  // Step 2 — pick or add recipient
  SendMoneyRecipient: {
    amount: string;
    fromCurrency: string;
    toCurrency: string;
  };

  // Step 2a — add a brand new recipient
  AddNewRecipient: undefined;

  // Step 2b — choose receiving bank for recipient
  ChooseAccountProvider: {
    recipientId: string;
  };

  // Step 3 — review everything before confirming
  SendMoneyReview: {
    amount: string;
    fromCurrency: string;
    toCurrency: string;
    recipientId: string;
    fee: string;
    exchangeRate: string;
  };

  // Step 4 — enter PIN
  SendMoneyPIN: {
    transactionId: string;
  };

  // Outcome screens
  SendMoneyPINComplete: { transactionId: string };   // PIN accepted, processing
  SendMoneySuccess: { transactionId: string };        // Confirmed success
  SendMoneyInProgress: { transactionId: string };     // Still processing
  SendMoneyError: { reason: string };                 // Insufficient funds etc
  SendMoneyUpdates: { transactionId: string };        // Full details view
};

const Stack = createNativeStackNavigator<SendMoneyStackParamList>();

const SendMoneyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {/*
        FULL FLOW:

        Send (modal) ──→ SendMoneyForm ──→ SendMoneyRecipient
                                                  ↓
                                         [existing recipient] or [AddNewRecipient]
                                                  ↓
                                         ChooseAccountProvider (pick bank)
                                                  ↓
                                         SendMoneyReview (confirm all details)
                                                  ↓
                                         SendMoneyPIN (enter 4/6 digit PIN)
                                                  ↓
                              ┌───────────────────┴──────────────────┐
                     SendMoneyPINComplete               SendMoneyError
                              ↓
                   SendMoneySuccess / SendMoneyInProgress
                              ↓
                         SendMoneyUpdates (transaction detail)
      */}

      <Stack.Screen
        name="Send"
        component={SendScreen}
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
      <Stack.Screen name="SendMoneyForm" component={SendMoneyFormScreen} />
      <Stack.Screen name="SendMoneyRecipient" component={SendMoneyRecipientScreen} />
      <Stack.Screen name="AddNewRecipient" component={AddNewRecipientScreen} />
      <Stack.Screen name="ChooseAccountProvider" component={ChooseAccountProviderScreen} />
      <Stack.Screen name="SendMoneyReview" component={SendMoneyReviewScreen} />
      <Stack.Screen
        name="SendMoneyPIN"
        component={SendMoneyPINScreen}
        options={{ gestureEnabled: false }} // No back swipe on PIN entry
      />

      {/* Outcome screens — no back gesture on any of these */}
      <Stack.Screen
        name="SendMoneyPINComplete"
        component={SendMoneyPINCompleteScreen}
        options={{ gestureEnabled: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="SendMoneySuccess"
        component={SendMoneySuccessScreen}
        options={{ gestureEnabled: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="SendMoneyInProgress"
        component={SendMoneyInProgressScreen}
        options={{ gestureEnabled: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="SendMoneyError"
        component={SendMoneyErrorScreen}
        options={{ animation: 'fade' }}
      />
      <Stack.Screen name="SendMoneyUpdates" component={SendMoneyUpdatesScreen} />
    </Stack.Navigator>
  );
};

export default SendMoneyStack;
