import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Welcome: undefined;
    Next: undefined;
};

export type RootStackNavigationProp<Screen extends keyof RootStackParamList = 'Welcome'> = NativeStackNavigationProp<RootStackParamList, Screen>;
