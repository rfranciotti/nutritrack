// src/components/layout/SafeScreenView.tsx
import React from 'react';
import {
    View,
    StyleSheet,
    ViewStyle,
    StyleProp,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    avoidKeyboard?: boolean;
}

export default function SafeScreenView({
    children,
    style,
    avoidKeyboard = true,
}: Props) {
    const Wrapper = avoidKeyboard ? KeyboardAvoidingView : View;

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <Wrapper
                style={[styles.inner, style]}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                {children}
            </Wrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000', // ou theme color
    },
    inner: {
        flex: 1,
    },
});
