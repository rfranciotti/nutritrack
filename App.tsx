import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigation from './src/navigation';
import LoadFonts from './src/components/LoadFonts';

export default function App() {

  LoadFonts();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <AppNavigation />
    </SafeAreaView>
  );
}