import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Introduce tus datos para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#94a3b8"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#94a3b8"
        secureTextEntry
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </Pressable>

      <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    fontSize: 16,
    color: '#64748b',
  },
  input: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    fontSize: 15,
    color: '#0f172a',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  register: {
    textAlign: 'center',
    marginTop: 22,
    color: '#64748b',
    fontSize: 14,
  },
});