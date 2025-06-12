import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeScreenView from '../components/layout/SafeScreenView';


export default function NextScreen() {
    return (
        <SafeScreenView>
            <View >
                <Text>Próxima Tela1</Text>
                <Text style={styles.textview}>COMEÇAR AGORA</Text>
            </View>
        </SafeScreenView>
    );
}

const styles = StyleSheet.create({
    textview: {
        color: "#FFF",
    }
});