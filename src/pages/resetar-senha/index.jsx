import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function ResetarSenha({ onBack }) {
  const [email, setEmail] = useState('');

  function handleReset() {
    if (!email) {
      console.log('Digite seu e-mail');
      return;
    }

    console.log('Link de recuperação enviado!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >

          {/* Voltar */}
          <Pressable
            style={styles.backButton}
            onPress={onBack}
          >
            <Text style={styles.backText}>
              ‹ Voltar
            </Text>
          </Pressable>

          {/* Título */}
          <View style={styles.header}>
            <Text style={styles.logo}>
              Esqueci a senha
            </Text>

            <Text style={styles.subtitle}>
              Digite seu e-mail e enviaremos um link
              para você criar uma nova senha.
            </Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                E-MAIL
              </Text>

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                placeholderTextColor="#555563"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Botão */}
            <Pressable
              style={({ pressed }) => [
                styles.resetButton,
                pressed && styles.pressed,
              ]}
              onPress={handleReset}
            >
              <Text style={styles.resetText}>
                ENVIAR LINK
              </Text>
            </Pressable>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08080D',
  },

  keyboard: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: 'center',
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

  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginBottom: 35,
  },

  backText: {
    color: '#A78BFA',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    top: -230,
    right: -40,
  },

  header: {
    marginBottom: 32,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: -1.5,
    marginBottom: 10,
  },

  subtitle: {
    color: '#888894',
    fontSize: 15,
    lineHeight: 22,
  },

  form: {
    width: '100%',
    gap: 18,
  },

  inputContainer: {
    width: '100%',
    gap: 8,
  },

  label: {
    color: '#888894',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },

  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#111118',
    borderWidth: 1,
    borderColor: '#252530',
    borderRadius: 14,
    paddingHorizontal: 17,
    color: '#FFFFFF',
    fontSize: 15,
  },

  resetButton: {
    width: '100%',
    height: 58,
    backgroundColor: '#7C3AED',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,

    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },

  resetText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.8,
  },
});