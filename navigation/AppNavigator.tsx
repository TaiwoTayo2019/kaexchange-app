// navigation/AppNavigator.tsx
// Root navigator — switches between Auth, KYC, and Main app based on user state

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

import AuthStack from './AuthStack';
import KYCStack from './KYCStack';
import MainTabNavigator from './MainTabNavigator';

export type RootStackParamList = {
  Auth: undefined;
  KYC: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Possible global app states
type AppState = 'loading' | 'onboarding' | 'auth' | 'kyc' | 'main';

const AppNavigator = () => {
  const [appState, setAppState] = useState<AppState>('loading');

  useEffect(() => {
    bootstrapApp();
  }, []);

  const bootstrapApp = async () => {
    try {
      // Check if user has seen onboarding before
      const hasSeenOnboarding = await AsyncStorage.getItem('@has_seen_onboarding');
      const userToken = await AsyncStorage.getItem('@user_token');
      const kycCompleted = await AsyncStorage.getItem('@kyc_completed');

      if (!hasSeenOnboarding) {
        // First time ever opening the app — show onboarding
        setAppState('onboarding');
      } else if (!userToken) {
        // Seen onboarding but not logged in
        setAppState('auth');
      } else if (!kycCompleted) {
        // Logged in but KYC not done yet
        setAppState('kyc');
      } else {
        // Fully authenticated and verified
        setAppState('main');
      }
    } catch (e) {
      // Something went wrong reading storage, default to auth
      setAppState('auth');
    }
  };

  // Show a splash/loading screen while we check storage
  if (appState === 'loading') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A0F1E' }}>
        <ActivityIndicator size="large" color="#F5A623" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {(appState === 'onboarding' || appState === 'auth') && (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
        {appState === 'kyc' && (
          <Stack.Screen name="KYC" component={KYCStack} />
        )}
        {appState === 'main' && (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
