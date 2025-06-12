
import { useFonts } from 'expo-font';

export default function useLoadFonts() {
    const [loaded] = useFonts({
        Inter: require('../../assets/fonts/Inter_18pt-Regular.ttf'),
        InterBold: require('../../assets/fonts/Inter_18pt-Bold.ttf'),
        InterLight: require('../../assets/fonts/Inter_18pt-Light.ttf'),
        Poppins: require('../../assets/fonts/Poppins-Black.ttf'),
        PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
        PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    });

    return loaded;
}
