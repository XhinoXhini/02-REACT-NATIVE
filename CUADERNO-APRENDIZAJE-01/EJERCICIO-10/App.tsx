import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      {/* Tarjeta de objetivo diario con barra de progreso */}
      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>8.200</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>82% completado</Text>
      </View>

      {/* Grid 2x2 de métricas */}
      <Text style={styles.sectionTitle}>Resumen de hoy</Text>
      <View style={styles.grid}>
        <StatCard icon="🔥" value="610" label="Calorías" />
        <StatCard icon="⏱" value="55 min" label="Actividad" />
        <StatCard icon="❤️" value="69" label="Pulsaciones" />
        <StatCard icon="📍" value="6,3 km" label="Distancia" />
      </View>

      {/* Actividades recientes */}
      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity title="Carrera al aire libre" detail="6,3 km · 35 min" icon="🏃" />
      <Activity title="Entrenamiento de fuerza" detail="Rutina Push · 50 min" icon="🏋️" />
      <Activity title="Paseo de recuperación" detail="1,9 km · 20 min" icon="🚶" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail, icon }: { title: string; detail: string; icon: string }) {
  return (
    <View style={styles.activity}>
      <Text style={styles.activityIcon}>{icon}</Text>
      <View style={styles.activityTextContainer}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#64748b',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#0f172a',
  },
  goalCard: {
    backgroundColor: '#111827',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#94a3b8',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#cbd5e1',
    marginTop: 2,
    fontSize: 14,
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#374151',
    borderRadius: 5,
    marginTop: 22,
    overflow: 'hidden',
  },
  progress: {
    width: '82%',
    height: '100%',
    backgroundColor: '#22c55e',
  },
  percentage: {
    color: '#cbd5e1',
    marginTop: 9,
    fontSize: 13,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 14,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 26,
  },
  statValue: {
    marginTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  statLabel: {
    marginTop: 4,
    color: '#64748b',
    fontSize: 14,
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityIcon: {
    fontSize: 24,
    marginRight: 14,
  },
  activityTextContainer: {
    flex: 1,
  },
  activityTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0f172a',
  },
  activityDetail: {
    marginTop: 4,
    color: '#64748b',
    fontSize: 13,
  },
});