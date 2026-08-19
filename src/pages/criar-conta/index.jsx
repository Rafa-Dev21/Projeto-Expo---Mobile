import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function Register({ onBack, onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegister() {
    if (!name || !email || !password || !confirmPassword) {
      console.log('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      console.log('As senhas não coincidem');
      return;
    }

    console.log('Conta criada!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Glows do fundo */}
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
            <Text style={styles.backText}>‹ Voltar</Text>
          </Pressable>

          {/* Título */}
          <View style={styles.header}>
            <Text style={styles.logo}>
              Criar conta
            </Text>

            <Text style={styles.subtitle}>
              Crie sua conta para começar.
            </Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>

            {/* Nome */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                NOME
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Seu nome"
                placeholderTextColor="#555563"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                E-MAIL
              </Text>

              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#555563"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Senha */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                SENHA
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Crie uma senha"
                placeholderTextColor="#555563"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* Confirmar senha */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                CONFIRMAR SENHA
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Digite a senha novamente"
                placeholderTextColor="#555563"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            {/* Botão */}
            <Pressable
              style={({ pressed }) => [
                styles.registerButton,
                pressed && styles.pressed,
              ]}
              onPress={handleRegister}
            >
              <Text style={styles.registerText}>
                CRIAR CONTA
              </Text>
            </Pressable>

            {/* Login */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>
                Já possui uma conta?
              </Text>

              <Pressable onPress={onLogin}>
                <Text style={styles.loginLink}>
                    Entrar
                </Text>
              </Pressable>
            </View>

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
    marginBottom: 28,
  },

  backText: {
    color: '#A78BFA',
    fontSize: 16,
    fontWeight: '700',
  },

  header: {
    marginBottom: 32,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: -1.5,
    marginBottom: 8,
  },

  subtitle: {
    color: '#888894',
    fontSize: 15,
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

  registerButton: {
    width: '100%',
    height: 58,
    backgroundColor: '#7C3AED',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,

    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },

  registerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
  },

  loginText: {
    color: '#666672',
    fontSize: 14,
  },

  loginLink: {
    color: '#A78BFA',
    fontSize: 14,
    fontWeight: '800',
  },

  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.8,
  },
});