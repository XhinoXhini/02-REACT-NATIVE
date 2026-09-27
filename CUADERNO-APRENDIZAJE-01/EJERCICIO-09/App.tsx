import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      {/* Tarjeta de saldo principal */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
        <Text style={styles.account}>ES00 •••• •••• 7821</Text>
      </View>

      {/* Fila de acciones rápidas */}
      <View style={styles.actionsRow}>
        <QuickAction label="Enviar" icon="↗️" />
        <QuickAction label="Recibir" icon="↙️" />
        <QuickAction label="Bizum" icon="⚡" />
      </View>

      {/* Listado de movimientos */}
      <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      <Movement title="Nómina" date="20 septiembre" amount="+2.340,00 €" isIncome />
      <Movement title="Supermercado" date="Hoy" amount="-42,80 €" />
      <Movement title="Cafetería" date="Ayer" amount="-3,20 €" />
      <Movement title="Electricidad" date="18 septiembre" amount="-74,20 €" />
    </ScrollView>
  );
}

function QuickAction({ label, icon }: { label: string; icon: string }) {
  return (
    <Pressable style={styles.actionBtn}>
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

type MovementProps = {
  title: string;
  date: string;
  amount: string;
  isIncome?: boolean;
};

function Movement({ title, date, amount, isIncome }: MovementProps) {
  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDate}>{date}</Text>
      </View>
      <Text style={[styles.amount, isIncome && styles.income]}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  hello: {
    marginTop: 60,
    color: '#64748b',
    fontSize: 15,
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0f172a',
  },
  balanceCard: {
    backgroundColor: '#111827',
    borderRadius: 22,
    padding: 24,
  },
  balanceLabel: {
    color: '#cbd5e1',
    fontSize: 14,
  },
  balance: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 8,
  },
  account: {
    color: '#94a3b8',
    marginTop: 24,
    fontSize: 13,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 20,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#334155',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 26,
    marginBottom: 12,
    color: '#0f172a',
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0f172a',
  },
  movementDate: {
    marginTop: 3,
    color: '#94a3b8',
    fontSize: 13,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0f172a',
  },
  income: {
    color: '#16a34a',
  },
});