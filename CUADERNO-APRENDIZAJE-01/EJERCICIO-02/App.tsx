import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0f172a',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f8fafc',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#38bdf8',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: '#0f172a',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});