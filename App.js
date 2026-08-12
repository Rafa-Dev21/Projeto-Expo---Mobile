import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <View style={styles.content}>
        <Text style={styles.badge}>⚡ EXPO APP</Text>

        <Text style={styles.title}>
          RAFINHA
          {'\n'}
          <Text style={styles.titleAccent}>BRABO!</Text>
        </Text>

        <Text style={styles.subtitle}>
          Não é só um app.{'\n'}
          É presença. 😎
        </Text>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>R</Text>
            </View>

            <View>
              <Text style={styles.cardName}>Rafinha</Text>
              <Text style={styles.cardStatus}>● Online agora</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.cardText}>
            Desenvolvendo coisas insanas 🚀
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>BORA COMEÇAR 🚀</Text>
        </Pressable>

        <Text style={styles.footer}>MADE WITH 🔥 + EXPO</Text>
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
    paddingHorizontal: 24,
  },

  glowTop: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#7C3AED',
    opacity: 0.15,
    top: -100,
    right: -80,
  },

  glowBottom: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#06B6D4',
    opacity: 0.1,
    bottom: -100,
    left: -80,
  },

  badge: {
    color: '#A78BFA',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    backgroundColor: '#171320',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 22,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 48,
    lineHeight: 50,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -2,
  },

  titleAccent: {
    color: '#A855F7',
  },

  subtitle: {
    color: '#8E8E9A',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 32,
  },

  card: {
    width: '100%',
    backgroundColor: '#111118',
    borderWidth: 1,
    borderColor: '#242432',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },

  cardName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },

  cardStatus: {
    color: '#22C55E',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#242432',
    marginVertical: 18,
  },

  cardText: {
    color: '#B5B5C2',
    fontSize: 14,
  },

  button: {
    width: '100%',
    backgroundColor: '#7C3AED',
    paddingVertical: 17,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#7C3AED',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },

  buttonPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  footer: {
    color: '#444450',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 28,
  },
});