import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';

import Login from './src/pages/login';

export default function App() {
  const [screen, setScreen] = useState('home');

  if (screen === 'login') {
    return <Login onBack={() => setScreen('home')} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <View style={styles.content}>
        <Text style={styles.logo}>ProjetoX</Text>

        <Text style={styles.subtitle}>
          Bem-vindo ao seu novo projeto.
        </Text>

        <View style={styles.buttons}>
          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              pressed && styles.pressed,
            ]}
            onPress={() => setScreen('login')}
          >
            <Text style={styles.loginText}>ENTRAR</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.registerButton,
              pressed && styles.pressed,
            ]}
            onPress={() => {
              console.log('Abrir cadastro');
            }}
          >
            <Text style={styles.registerText}>CADASTRAR-SE</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08080D',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  glowTop: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#7C3AED',
    opacity: 0.15,
    top: -120,
    right: -100,
  },

  glowBottom: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#06B6D4',
    opacity: 0.08,
    bottom: -100,
    left: -100,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '900',
    letterSpacing: -2,
    marginBottom: 12,
  },

  subtitle: {
    color: '#888894',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 45,
  },

  buttons: {
    width: '100%',
    gap: 14,
  },

  loginButton: {
    width: '100%',
    height: 58,
    backgroundColor: '#7C3AED',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },

  loginText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  registerButton: {
    width: '100%',
    height: 58,
    backgroundColor: '#111118',
    borderWidth: 1,
    borderColor: '#7C3AED',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerText: {
    color: '#A78BFA',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.8,
  },
});