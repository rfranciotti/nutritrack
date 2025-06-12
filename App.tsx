import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigation from './src/navigation';
import useLoadFonts from './src/components/LoadFonts';

export default function App() {
    const fontsLoaded = useLoadFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <AppNavigation />
        </SafeAreaView>
    );
}
