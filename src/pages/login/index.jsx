import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';

export default function TextInputExample() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>LOGIN - </Text>
        <Text style={styles.title2}>ProjetoX</Text>
    </View>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="Digite sua senha"
          placeholderTextColor="#777"
          secureTextEntry
        />

        

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
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },
  
  title2: {
    color: 'blue',
    fontSize: 32,
    fontWeight: '900',
  },

  input: {
    height: 55,
    backgroundColor: '#111118',
    borderWidth: 1,
    borderColor: '#292936',
    borderRadius: 14,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 15,
  },
});