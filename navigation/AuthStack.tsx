// navigation/AuthStack.tsx
// Handles: Onboarding (first launch) → Sign Up flow OR Login flow

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ─── Screens ────────────────────────────────────────────────────────────────
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import BasicInfoScreen from '../screens/auth/BasicInfoScreen';
import CreatePasswordScreen from '../screens/auth/CreatePasswordScreen';
import AccountVerificationScreen from '../screens/auth/AccountVerificationScreen';

// ─── Reset Password sub-flow ─────────────────────────────────────────────────
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import ResetNewPasswordScreen from '../screens/auth/ResetNewPasswordScreen';
import ResetPasswordSuccessScreen from '../screens/auth/ResetPasswordSuccessScreen';

// ─── Param List ──────────────────────────────────────────────────────────────
export type AuthStackParamList = {
  // Onboarding — shown once on first launch only
  Onboarding: undefined;

  // Login
  Login: undefined;

  // Sign Up flow (sequential)
  SignUp: undefined;
  OTP: { phoneNumber: string };
  BasicInfo: undefined;
  CreatePassword: undefined;
  AccountVerification: undefined;

  // Reset password sub-flow (branched from Login)
  ResetPassword: undefined;
  ResetNewPassword: { resetToken: string };
  ResetPasswordSuccess: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {/* ── Onboarding ─────────────────────────────────────────────────── */}
      {/*
          OnboardingScreen should:
          1. Mark '@has_seen_onboarding' = 'true' in AsyncStorage on completion
          2. Then navigate to 'Login' or 'SignUp'
          It is shown only once because AppNavigator checks AsyncStorage before
          deciding which stack to mount.
      */}
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          // Onboarding slides in from bottom for a "launch" feel
          animation: 'fade',
        }}
      />

      {/* ── Login ──────────────────────────────────────────────────────── */}
      {/*
          LoginScreen should:
          - On success: save '@user_token' to AsyncStorage, then call
            navigation.reset() to switch AppNavigator to KYC or Main stack
          - "Forgot password?" → navigate to 'ResetPassword'
          - "Don't have an account?" → navigate to 'SignUp'
      */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* ── Sign Up flow ───────────────────────────────────────────────── */}
      {/*
          Sequential screens. Each screen navigates to the next.
          SignUp → OTP → BasicInfo → CreatePassword → AccountVerification

          SignUpScreen:
          - Collects phone number + tick T&C
          - On submit → navigate('OTP', { phoneNumber })
          - "Already have account?" → navigate('Login')

          OTPScreen:
          - Receives phoneNumber as param
          - On verify → navigate('BasicInfo')

          BasicInfoScreen:
          - Collects name, DOB, address etc.
          - On submit → navigate('CreatePassword')

          CreatePasswordScreen:
          - Sets password
          - On success → navigate('AccountVerification')

          AccountVerificationScreen:
          - Prompts user to verify email / identity
          - On complete → save '@user_token', switch AppNavigator to KYC stack
      */}
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
      <Stack.Screen name="AccountVerification" component={AccountVerificationScreen} />

      {/* ── Reset Password sub-flow ────────────────────────────────────── */}
      {/*
          ResetPasswordScreen:
          - User enters phone/email to request reset link
          - On submit → navigate('ResetNewPassword', { resetToken })

          ResetNewPasswordScreen:
          - User enters new password twice
          - On success → navigate('ResetPasswordSuccess')

          ResetPasswordSuccessScreen:
          - Shows success message
          - CTA → navigate('Login')
      */}
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ResetNewPassword" component={ResetNewPasswordScreen} />
      <Stack.Screen
        name="ResetPasswordSuccess"
        component={ResetPasswordSuccessScreen}
        options={{ animation: 'fade' }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
