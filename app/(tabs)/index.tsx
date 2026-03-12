import React from 'react';
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   StyleSheet,
   SafeAreaView,
   StatusBar,
   Linking
} from 'react-native';
import { useRouter } from 'expo-router';
// npx expo install @expo/vector-icons
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen() {
   const router = useRouter();

   const handleSupport = () => {
      // Exemplo: Abrir link de suporte
      Linking.openURL('https://seusuporte.com.br');
   };

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar barStyle="dark-content" />

         {/* SEÇÃO SUPERIOR: Imagem e Logo */}
         <View style={styles.topSection}>

            {/* Logo */}
            <Text style={styles.logoText}>ByteBank</Text>

            {/* Imagem de destaque */}
            <Image
               // Substitua pelo caminho da sua imagem
               // source={require('../assets/bg.png')} 
               source={{ uri: 'https://fcmsantacasasp.edu.br/vemprasanta/wp-content/themes/fcm-new/assets/imgs/landingpage/transformar/hero.jpg' }} 
               style={styles.womanImage}
               resizeMode="cover"
            />
         </View>

         {/* SEÇÃO DO MEIO */}
         <View style={styles.buttonContainer}>
            <TouchableOpacity
               style={styles.btnPrimary}
               onPress={() => router.push('/login')}
            >
               <Text style={styles.btnPrimaryText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.btnSecondary}
               onPress={() => router.push('/signup')}
            >
               <Text style={styles.btnSecondaryText}>Cadastre-se</Text>
            </TouchableOpacity>
         </View>

         {/* SEÇÃO INFERIOR */}
         <View style={styles.supportContainer}>
            <View style={styles.supportTextContent}>
               <Text style={styles.supportTitle}>Problemas para acessar o nosso app?</Text>
               <Text style={styles.supportDesc}>
                  Está sem acesso ao seu e-mail cadastrado? {' '}
                  <Text style={styles.linkText} onPress={handleSupport}>Clique aqui</Text>.
               </Text>
            </View>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF',
   },
   topSection: {
      flex: 1, 
      alignItems: 'center',
      position: 'relative',
      justifyContent: 'center',
   },
   logoText: {
      fontSize: 54,
      fontWeight: 'bold',
      color: '#FFF',
      zIndex: 5,
   },
   womanImage: {
      width: '100%',
      height: '110%', 
      position: 'absolute',
      bottom: -20, 
      zIndex: 1,
   },
   buttonContainer: {
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical: 30,
      // Efeito de sombra (Elevação no Android)
      elevation: 8,
      // Efeito de sombra (iOS)
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      zIndex: 2, 
      marginBottom: -20, 
   },
   btnPrimary: {
      backgroundColor: '#28a745', 
      height: 54,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
   },
   btnPrimaryText: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: '700',
   },
   btnSecondary: {
      backgroundColor: 'transparent',
      height: 58,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#000000', 
   },
   btnSecondaryText: {
      color: '#000000',
      fontSize: 20,
      fontWeight: '700',
   },
   supportContainer: {
      backgroundColor: '#000000', 
      paddingHorizontal: 20,
      paddingBottom: 40,
      paddingTop: 60, 
      alignItems: 'center',
      zIndex: 1,
   },   
   supportTextContent: {
      alignItems: 'center',
      width: '100%',
   },
   supportTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
      marginBottom: 10,
      textAlign: 'center',
   },
   supportDesc: {
      fontSize: 15,
      color: '#DDD', 
      textAlign: 'center',
      lineHeight: 22,
      paddingHorizontal: 10,
   },
   linkText: {
      color: '#28a745', 
      fontWeight: '700',
      textDecorationLine: 'underline',
   },
});