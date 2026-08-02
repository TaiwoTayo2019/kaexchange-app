// navigation/AddMoneyStack.tsx
// The full add money / fund wallet flow

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddMoneyChooseAccountScreen from '../screens/addmoney/AddMoneyChooseAccountScreen';
import AddMoneyEmptyScreen from '../screens/addmoney/AddMoneyEmptyScreen';
import EnterAmountScreen from '../screens/addmoney/EnterAmountScreen';
import SavedCardScreen from '../screens/addmoney/SavedCardScreen';
import RegularBankTransferUKScreen from '../screens/addmoney/RegularBankTransferUKScreen';
import RegularBankTransferNairaScreen from '../screens/addmoney/RegularBankTransferNairaScreen';
import AddMoneyDetailedScreen from '../screens/addmoney/AddMoneyDetailedScreen';
import AddMoneyScreen from '../screens/addmoney/AddMoneyScreen';
import VerifyingNewAccountScreen from '../screens/addmoney/VerifyingNewAccountScreen';

export type AddMoneyStackParamList = {
  // Step 1 — pick which wallet/currency to fund
  AddMoneyChooseAccount: undefined;

  // Step 2a — first time, no payment method yet
  AddMoneyEmpty: undefined;

  // Step 2b — returning user, enter amount
  EnterAmount: {
    currency: string;
    accountId: string;
  };

  // Step 3 — choose payment method
  SavedCard: {
    amount: string;
    currency: string;
  };

  // Step 3 alt — bank transfer instructions
  RegularBankTransferUK: undefined;   // GBP bank transfer details
  RegularBankTransferNaira: undefined; // NGN bank transfer details

  // Step 4 — verifying a newly linked bank account
  VerifyingNewAccount: { accountId: string };

  // Outcome screens
  AddMoneyDetailed: {           // Summary with amount, method, date, ref
    amount: string;
    currency: string;
    paymentMethod: string;
    date: string;
    reference: string;
  };
  AddMoney: {                   // Simple success: amount + "wallet credited"
    amount: string;
    currency: string;
  };
};

const Stack = createNativeStackNavigator<AddMoneyStackParamList>();

const AddMoneyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*
        FLOW:

        AddMoneyChooseAccount (pick NGN, GBP, etc.)
               ↓
        [First time?] AddMoneyEmpty   [Returning?] EnterAmount
                            ↓                ↓
                       SavedCard ←───────────┘
                    OR RegularBankTransferUK / Naira
                            ↓
                    [needs account link?] VerifyingNewAccount
                            ↓
                    AddMoneyDetailed (full receipt)
                            ↓
                    AddMoney (simple success confirmation)
      */}
      <Stack.Screen name="AddMoneyChooseAccount" component={AddMoneyChooseAccountScreen} />
      <Stack.Screen name="AddMoneyEmpty" component={AddMoneyEmptyScreen} />
      <Stack.Screen name="EnterAmount" component={EnterAmountScreen} />
      <Stack.Screen name="SavedCard" component={SavedCardScreen} />
      <Stack.Screen name="RegularBankTransferUK" component={RegularBankTransferUKScreen} />
      <Stack.Screen name="RegularBankTransferNaira" component={RegularBankTransferNairaScreen} />
      <Stack.Screen name="VerifyingNewAccount" component={VerifyingNewAccountScreen} />
      <Stack.Screen
        name="AddMoneyDetailed"
        component={AddMoneyDetailedScreen}
        options={{ gestureEnabled: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="AddMoney"
        component={AddMoneyScreen}
        options={{ gestureEnabled: false, animation: 'fade' }}
      />
    </Stack.Navigator>
  );
};

export default AddMoneyStack;


// ─────────────────────────────────────────────────────────────────────────────
// navigation/ProfileStack.tsx
// Profile tab — all settings, support, legal, logout

import ProfileSettingsScreen from '../screens/profile/ProfileSettingsScreen';
import AccountInformationScreen from '../screens/profile/AccountInformationScreen';
import BasicInformationScreen from '../screens/profile/BasicInformationScreen';
import UserProfileScreen from '../screens/profile/UserProfileScreen';
import AccountLimitsScreen from '../screens/profile/AccountLimitsScreen';
import AccountStatementScreen from '../screens/profile/AccountStatementScreen';
import InternationalTransfersLimitScreen from '../screens/profile/InternationalTransfersLimitScreen';
import LocalTransfersLimitScreen from '../screens/profile/LocalTransfersLimitScreen';
import LanguageScreen from '../screens/profile/LanguageScreen';

import SecurityAndPrivacyScreen from '../screens/profile/SecurityAndPrivacyScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import ResetNewPasswordScreen from '../screens/auth/ResetNewPasswordScreen';
import ResetPasswordSuccessScreen from '../screens/auth/ResetPasswordSuccessScreen';
import ViewPrivacySettingsScreen from '../screens/profile/ViewPrivacySettingsScreen';

import NotificationPreferencesScreen from '../screens/profile/NotificationPreferencesScreen';
import EssentialCommunicationsScreen from '../screens/profile/EssentialCommunicationsScreen';
import MarketingConsentScreen from '../screens/profile/MarketingConsentScreen';
import ProductUpdatesScreen from '../screens/profile/ProductUpdatesScreen';

import ManageConnectedAccountsScreen from '../screens/profile/ManageConnectedAccountsScreen';
import AddNewAccountScreen from '../screens/profile/AddNewAccountScreen';

import HelpAndSupportScreen from '../screens/profile/HelpAndSupportScreen';
import ContactUsScreen from '../screens/profile/ContactUsScreen';
import SocialMediaScreen from '../screens/profile/SocialMediaScreen';

import AboutScreen from '../screens/profile/AboutScreen';
import LegalScreen from '../screens/profile/LegalScreen';

import LogOutScreen from '../screens/profile/LogOutScreen';

export type ProfileStackParamList = {
  ProfileSettings: undefined;

  // Account Information
  AccountInformation: undefined;
  BasicInformation: undefined;
  UserProfile: undefined;
  AccountLimits: undefined;
  AccountStatement: undefined;
  InternationalTransfersLimit: undefined;
  LocalTransfersLimit: undefined;
  Language: undefined;

  // Security & Privacy
  SecurityAndPrivacy: undefined;
  ResetPassword: undefined;
  ResetNewPassword: { resetToken: string };
  ResetPasswordSuccess: undefined;
  ViewPrivacySettings: undefined;

  // Notifications
  NotificationPreferences: undefined;
  EssentialCommunications: undefined;
  MarketingConsent: undefined;
  ProductUpdates: undefined;

  // Connected Accounts
  ManageConnectedAccounts: undefined;
  AddNewAccount: undefined;

  // Help
  HelpAndSupport: undefined;
  ContactUs: undefined;
  SocialMedia: undefined;

  // About
  About: undefined;
  Legal: undefined;

  // Logout
  LogOut: undefined;
};

const ProfileStack_Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStack = () => (
  <ProfileStack_Stack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack_Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />

    {/* Account Information */}
    <ProfileStack_Stack.Screen name="AccountInformation" component={AccountInformationScreen} />
    <ProfileStack_Stack.Screen name="BasicInformation" component={BasicInformationScreen} />
    <ProfileStack_Stack.Screen name="UserProfile" component={UserProfileScreen} />
    <ProfileStack_Stack.Screen name="AccountLimits" component={AccountLimitsScreen} />
    <ProfileStack_Stack.Screen name="AccountStatement" component={AccountStatementScreen} />
    <ProfileStack_Stack.Screen name="InternationalTransfersLimit" component={InternationalTransfersLimitScreen} />
    <ProfileStack_Stack.Screen name="LocalTransfersLimit" component={LocalTransfersLimitScreen} />
    <ProfileStack_Stack.Screen name="Language" component={LanguageScreen} />

    {/* Security & Privacy */}
    <ProfileStack_Stack.Screen name="SecurityAndPrivacy" component={SecurityAndPrivacyScreen} />
    <ProfileStack_Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    <ProfileStack_Stack.Screen name="ResetNewPassword" component={ResetNewPasswordScreen} />
    <ProfileStack_Stack.Screen name="ResetPasswordSuccess" component={ResetPasswordSuccessScreen} options={{ animation: 'fade' }} />
    <ProfileStack_Stack.Screen name="ViewPrivacySettings" component={ViewPrivacySettingsScreen} />

    {/* Notifications */}
    <ProfileStack_Stack.Screen name="NotificationPreferences" component={NotificationPreferencesScreen} />
    <ProfileStack_Stack.Screen name="EssentialCommunications" component={EssentialCommunicationsScreen} />
    <ProfileStack_Stack.Screen name="MarketingConsent" component={MarketingConsentScreen} />
    <ProfileStack_Stack.Screen name="ProductUpdates" component={ProductUpdatesScreen} />

    {/* Connected Accounts */}
    <ProfileStack_Stack.Screen name="ManageConnectedAccounts" component={ManageConnectedAccountsScreen} />
    <ProfileStack_Stack.Screen name="AddNewAccount" component={AddNewAccountScreen} />

    {/* Help */}
    <ProfileStack_Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
    <ProfileStack_Stack.Screen name="ContactUs" component={ContactUsScreen} />
    <ProfileStack_Stack.Screen name="SocialMedia" component={SocialMediaScreen} />

    {/* About */}
    <ProfileStack_Stack.Screen name="About" component={AboutScreen} />
    <ProfileStack_Stack.Screen name="Legal" component={LegalScreen} />

    {/* Logout */}
    <ProfileStack_Stack.Screen
      name="LogOut"
      component={LogOutScreen}
      options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
    />
  </ProfileStack_Stack.Navigator>
);

export default ProfileStack;
