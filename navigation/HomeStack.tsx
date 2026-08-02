// navigation/HomeStack.tsx
// Home tab — Dashboard + all money movement flows launched from it

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/dashboard/HomeScreen';
import DashboardActiveScreen from '../screens/dashboard/DashboardActiveScreen';
import DashboardEmptyStateScreen from '../screens/dashboard/DashboardEmptyStateScreen';
import ExchangeRatesScreen from '../screens/dashboard/ExchangeRatesScreen';
import CurrencyConverterScreen from '../screens/dashboard/CurrencyConverterScreen';
import AccountDetailsScreen from '../screens/dashboard/AccountDetailsScreen';
import DashboardMoreMenu from '../screens/dashboard/DashboardMoreMenu';

// Nested stacks launched from home
import SendMoneyStack from './SendMoneyStack';
import AddMoneyStack from './AddMoneyStack';

export type HomeStackParamList = {
  Home: undefined;
  DashboardActive: undefined;
  DashboardEmptyState: undefined;
  ExchangeRates: undefined;
  CurrencyConverter: undefined;
  AccountDetails: undefined;
  DashboardMoreMenu: undefined;

  // Nested stacks
  SendMoney: undefined;
  AddMoney: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DashboardActive" component={DashboardActiveScreen} />
      <Stack.Screen name="DashboardEmptyState" component={DashboardEmptyStateScreen} />
      <Stack.Screen name="ExchangeRates" component={ExchangeRatesScreen} />
      <Stack.Screen name="CurrencyConverter" component={CurrencyConverterScreen} />
      <Stack.Screen name="AccountDetails" component={AccountDetailsScreen} />
      <Stack.Screen
        name="DashboardMoreMenu"
        component={DashboardMoreMenu}
        options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
      />
      {/* Launch full send/add flows from home */}
      <Stack.Screen name="SendMoney" component={SendMoneyStack} />
      <Stack.Screen name="AddMoney" component={AddMoneyStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;


// ─────────────────────────────────────────────────────────────────────────────
// navigation/ActivityStack.tsx
// Activity tab — transaction list + details

import ActivityScreen from '../screens/activity/ActivityScreen';
import TransactionsScreen from '../screens/activity/TransactionsScreen';
import TransactionDetailsScreen from '../screens/activity/TransactionDetailsScreen';
import NotificationsScreen from '../screens/activity/NotificationsScreen';

export type ActivityStackParamList = {
  Activity: undefined;
  Transactions: undefined;
  TransactionDetails: { transactionId: string };
  Notifications: undefined;
};

const ActivityStack_Stack = createNativeStackNavigator<ActivityStackParamList>();

export const ActivityStack = () => (
  <ActivityStack_Stack.Navigator screenOptions={{ headerShown: false }}>
    <ActivityStack_Stack.Screen name="Activity" component={ActivityScreen} />
    <ActivityStack_Stack.Screen name="Transactions" component={TransactionsScreen} />
    <ActivityStack_Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
    <ActivityStack_Stack.Screen name="Notifications" component={NotificationsScreen} />
  </ActivityStack_Stack.Navigator>
);

export default ActivityStack;


// ─────────────────────────────────────────────────────────────────────────────
// navigation/WalletStack.tsx
// Wallet tab — balances, convert, savings

import WalletScreen from '../screens/wallet/WalletScreen';
import SavingsAccountFullScreen from '../screens/wallet/SavingsAccountFullScreen';
import ConvertScreen from '../screens/wallet/ConvertScreen';
import CurrencySelectorOverlay from '../screens/wallet/CurrencySelectorOverlay';
import SuccessfulConversionModal from '../screens/wallet/SuccessfulConversionModal';
import UnsuccessfulConversionModal from '../screens/wallet/UnsuccessfulConversionModal';

export type WalletStackParamList = {
  Wallet: undefined;
  SavingsAccountFull: undefined;
  Convert: undefined;
  CurrencySelector: { forField: 'from' | 'to' };
  SuccessfulConversion: { amount: string; currency: string };
  UnsuccessfulConversion: undefined;
  // Send & Add Money also launchable from Wallet
  SendMoney: undefined;
  AddMoney: undefined;
};

const WalletStack_Stack = createNativeStackNavigator<WalletStackParamList>();

export const WalletStack = () => (
  <WalletStack_Stack.Navigator screenOptions={{ headerShown: false }}>
    <WalletStack_Stack.Screen name="Wallet" component={WalletScreen} />
    <WalletStack_Stack.Screen name="SavingsAccountFull" component={SavingsAccountFullScreen} />
    <WalletStack_Stack.Screen name="Convert" component={ConvertScreen} />
    <WalletStack_Stack.Screen
      name="CurrencySelector"
      component={CurrencySelectorOverlay}
      options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
    />
    <WalletStack_Stack.Screen
      name="SuccessfulConversion"
      component={SuccessfulConversionModal}
      options={{ presentation: 'transparentModal', animation: 'fade' }}
    />
    <WalletStack_Stack.Screen
      name="UnsuccessfulConversion"
      component={UnsuccessfulConversionModal}
      options={{ presentation: 'transparentModal', animation: 'fade' }}
    />
    <WalletStack_Stack.Screen name="SendMoney" component={SendMoneyStack} />
    <WalletStack_Stack.Screen name="AddMoney" component={AddMoneyStack} />
  </WalletStack_Stack.Navigator>
);

export default WalletStack;
