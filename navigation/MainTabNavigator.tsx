// navigation/MainTabNavigator.tsx
// The 4-tab bottom nav shown to fully authenticated + verified users

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';

// Tab stacks (each tab has its own stack navigator)
import HomeStack from './HomeStack';
import ActivityStack from './ActivityStack';
import WalletStack from './WalletStack';
import ProfileStack from './ProfileStack';

// Tab bar icons — replace with your own icon library
// e.g. import { Ionicons } from '@expo/vector-icons';

export type MainTabParamList = {
  HomeTab: undefined;
  ActivityTab: undefined;
  WalletTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#F5A623',     // your brand accent
        tabBarInactiveTintColor: '#8E9AB0',
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ focused, color, size }) => {
          // Replace these placeholder views with actual icons
          // e.g. <Ionicons name={iconName} size={size} color={color} />
          const iconMap: Record<string, string> = {
            HomeTab: '🏠',
            ActivityTab: '📋',
            WalletTab: '💳',
            ProfileTab: '👤',
          };
          return (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              {/* Replace emoji with real icon component */}
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="ActivityTab"
        component={ActivityStack}
        options={{ tabBarLabel: 'Activity' }}
      />
      <Tab.Screen
        name="WalletTab"
        component={WalletStack}
        options={{ tabBarLabel: 'Wallet' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0A0F1E',
    borderTopColor: '#1A2035',
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 12,
    height: 70,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  iconContainerActive: {
    backgroundColor: 'rgba(245, 166, 35, 0.12)',
  },
});

export default MainTabNavigator;
