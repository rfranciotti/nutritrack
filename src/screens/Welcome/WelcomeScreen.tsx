import React, { useEffect, useRef, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
    const screenHeight = Dimensions.get('window').height;
    const insets = useSafeAreaInsets();
    const buttonOpacity = useRef(new Animated.Value(0)).current;
    const buttonScale = useRef(new Animated.Value(0.9)).current;

    const backgroundOpacity = useRef(new Animated.Value(0)).current;
    const textTranslateY = useRef(new Animated.Value(40)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        Animated.sequence([
            Animated.timing(backgroundOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(textOpacity, {
                    toValue: 1,
                    duration: 800,
                    delay: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(textTranslateY, {
                    toValue: 0,
                    duration: 800,
                    delay: 200,
                    useNativeDriver: true,
                }),
            ])
        ]).start(() => {
            Animated.parallel([
                Animated.timing(buttonOpacity, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.spring(buttonScale, {
                    toValue: 1,
                    useNativeDriver: true,
                }),
            ]).start();
        });
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <Animated.View style={[styles.animatedBackground, { opacity: backgroundOpacity }]}>
                <ImageBackground
                    source={require('../../../assets/welcome_back.png')}
                    style={styles.background}
                    resizeMode="cover"
                >
                    <View style={styles.overlay}>
                        <View style={styles.content}>
                            <Animated.Text
                                style={[styles.title, {
                                    opacity: textOpacity,
                                    transform: [{ translateY: textTranslateY }],
                                }]}
                            >
                                CONSTRUA SAÚDE.{"\n"}COMA MELHOR.{"\n"}TREINE EM QUALQUER LUGAR.
                            </Animated.Text>
                        </View>

                        <Animated.View
                            style={{
                                position: 'absolute',
                                bottom: insets.bottom + screenHeight * 0.10, // ex: 3% da altura
                                alignSelf: 'center',
                                opacity: buttonOpacity,
                                transform: [{ scale: buttonScale }],
                            }}
                        >
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Next')}>
                                <Text style={styles.buttonText}>Iniciar</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </ImageBackground>
            </Animated.View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    animatedBackground: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: RFValue(24),
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: RFValue(20),
        paddingLeft: RFValue(20),
    },
    buttonWrapper: {
        alignItems: 'center',
    },
    title: {
        fontSize: RFValue(18),
        color: '#FFF',
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: RFValue(32),
        maxWidth: '90%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#009719',
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(20),
        borderRadius: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: RFValue(180), // largura mínima proporcional
    },
    buttonText: {
        color: '#FFF',
        fontSize: RFValue(16),
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'Inter',
    },

});