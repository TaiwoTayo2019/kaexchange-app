// navigation/KYCStack.tsx
// Identity verification flow — sits between Auth and Main app
// User lands here after signup if KYC is not yet complete

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ─── Screens ────────────────────────────────────────────────────────────────
import IdentityVerificationInfoScreen from '../screens/kyc/IdentityVerificationInfoScreen';
import IdentityVerificationScreen from '../screens/kyc/IdentityVerificationScreen';

// Photo ID sub-flow
import VerifyPhotoIDScreen from '../screens/kyc/VerifyPhotoIDScreen';
import PhotoIDCaptureScreen from '../screens/kyc/PhotoIDCaptureScreen';
import PhotoPreviewScreen from '../screens/kyc/PhotoPreviewScreen';
import DocumentSuccessScreen from '../screens/kyc/DocumentSuccessScreen';
import UnsupportedDocumentScreen from '../screens/kyc/UnsupportedDocumentScreen';

// Selfie sub-flow
import FaceVerificationAnimationScreen from '../screens/kyc/FaceVerificationAnimationScreen';
import SelfieCaptureScreen from '../screens/kyc/SelfieCaptureScreen';
import SelfieSuccessScreen from '../screens/kyc/SelfieSuccessScreen';

// Final steps
import FinalConfirmationScreen from '../screens/kyc/FinalConfirmationScreen';
import ReviewProcessingScreen from '../screens/kyc/ReviewProcessingScreen';
import VerificationApprovedScreen from '../screens/kyc/VerificationApprovedScreen';
import EmailVerificationScreen from '../screens/kyc/EmailVerificationScreen';
import CompleteSetupScreen from '../screens/kyc/CompleteSetupScreen';

// Modals
import PostVerificationModal from '../screens/kyc/PostVerificationModal';

// ─── Param List ──────────────────────────────────────────────────────────────
export type KYCStackParamList = {
  // Entry point — explains what's needed
  IdentityVerificationInfo: undefined;

  // Choice: Photo ID or Selfie
  IdentityVerification: undefined;

  // Photo ID sub-flow
  VerifyPhotoID: undefined;
  PhotoIDCapture: { country: string; idType: string };
  PhotoPreview: { photoUri: string };
  DocumentSuccess: undefined;
  UnsupportedDocument: undefined;

  // Selfie sub-flow
  FaceVerificationAnimation: undefined;
  SelfieCapture: undefined;
  SelfieSuccess: undefined;

  // Final steps
  FinalConfirmation: undefined;
  ReviewProcessing: undefined;
  VerificationApproved: undefined;
  EmailVerification: undefined;
  CompleteSetup: undefined;

  // Modal
  PostVerification: undefined;
};

const Stack = createNativeStackNavigator<KYCStackParamList>();

const KYCStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="IdentityVerificationInfo"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {/*
        FLOW OVERVIEW:
        IdentityVerificationInfo
            ↓
        IdentityVerification (choose: Photo ID or Selfie)
            ↓                          ↓
        [Photo ID sub-flow]        [Selfie sub-flow]
        VerifyPhotoID              FaceVerificationAnimation
        PhotoIDCapture             SelfieCapture
        PhotoPreview               SelfieSuccess
        DocumentSuccess ────────────────┘
            ↓
        FinalConfirmation
            ↓
        ReviewProcessing (polling/waiting screen)
            ↓
        VerificationApproved → PostVerification (modal)
            ↓
        EmailVerification
            ↓
        CompleteSetup
            ↓
        → Switch AppNavigator to Main (save '@kyc_completed' = 'true')
      */}

      {/* Entry */}
      <Stack.Screen
        name="IdentityVerificationInfo"
        component={IdentityVerificationInfoScreen}
        options={{ animation: 'fade' }}
      />

      {/* Choice screen */}
      <Stack.Screen name="IdentityVerification" component={IdentityVerificationScreen} />

      {/* Photo ID sub-flow */}
      <Stack.Screen name="VerifyPhotoID" component={VerifyPhotoIDScreen} />
      <Stack.Screen name="PhotoIDCapture" component={PhotoIDCaptureScreen} />
      <Stack.Screen name="PhotoPreview" component={PhotoPreviewScreen} />
      <Stack.Screen name="DocumentSuccess" component={DocumentSuccessScreen} />
      <Stack.Screen
        name="UnsupportedDocument"
        component={UnsupportedDocumentScreen}
        options={{ presentation: 'modal' }}
      />

      {/* Selfie sub-flow */}
      <Stack.Screen name="FaceVerificationAnimation" component={FaceVerificationAnimationScreen} />
      <Stack.Screen name="SelfieCapture" component={SelfieCaptureScreen} />
      <Stack.Screen name="SelfieSuccess" component={SelfieSuccessScreen} />

      {/* Final steps */}
      <Stack.Screen name="FinalConfirmation" component={FinalConfirmationScreen} />
      <Stack.Screen
        name="ReviewProcessing"
        component={ReviewProcessingScreen}
        options={{ gestureEnabled: false }} // Prevent back swipe while verifying
      />
      <Stack.Screen name="VerificationApproved" component={VerificationApprovedScreen} />
      <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
      <Stack.Screen name="CompleteSetup" component={CompleteSetupScreen} />

      {/* Post-verification modal */}
      <Stack.Screen
        name="PostVerification"
        component={PostVerificationModal}
        options={{ presentation: 'transparentModal', animation: 'fade' }}
      />
    </Stack.Navigator>
  );
};

export default KYCStack;
