import { useAuth } from "@/context/AuthContext";
import { useTransactions } from "@/context/TransactionsContext";
import { useRouter } from "expo-router";
import React from "react";
import {
	Alert,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,  
	View,
} from "react-native";

export default function Dashboard() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { summary } = useTransactions();

  const handleLogout = async () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", onPress: () => {}, style: "cancel" },
      {
        text: "Sair",
        onPress: async () => {
          try {
            await logout();
            router.replace("/");
          } catch (error) {
            Alert.alert("Erro", "Erro ao fazer logout");
          }
        },
        style: "destructive",
      },
    ]);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Bem-vindo, {user?.name || "Usuário"}!
          </Text>
          <Text style={styles.subtitle}>{user?.email}</Text>
        </View>

        <View style={styles.summaryContainer}>
          <View style={[styles.summaryCard, styles.balanceCard]}>
            <Text style={styles.cardLabel}>Saldo</Text>
            <Text style={styles.cardValue}>
              {formatCurrency(summary?.balance || 0)}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <View style={[styles.summaryCard, styles.incomeCard]}>
              <Text style={styles.cardLabel}>Receita</Text>
              <Text style={styles.cardValue}>
                {formatCurrency(summary?.totalIncome || 0)}
              </Text>
              <TouchableOpacity
                style={styles.cardLink}
                onPress={() => router.push("/receitas")}
              >
                <Text style={styles.buttonTextOutline}>Gráfico de Receitas</Text>
              </TouchableOpacity>              
            </View>

            <View style={[styles.summaryCard, styles.expenseCard]}>
              <Text style={styles.cardLabel}>Despesa</Text>
              <Text style={styles.cardValue}>
                {formatCurrency(summary?.totalExpense || 0)}
              </Text>              
              <TouchableOpacity
                style={styles.cardLink}
                onPress={() => router.push("/despesas")}
              >
                <Text style={styles.buttonTextOutline}>Gráfico de Despesas</Text>
              </TouchableOpacity>              
            </View>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/financeiro")}
          >
            <Text style={styles.buttonText}>📊 Ver Transações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleLogout}
          >
            <Text style={styles.secondaryButtonText}>🚪 Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  header: {
    marginBottom: 32,
  },

  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e9038",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
  },

  summaryContainer: {
    marginBottom: 32,
  },

  summaryCard: {
    borderRadius: 12,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },

  balanceCard: {
    backgroundColor: "#1e9038",
  },

  incomeCard: {
    backgroundColor: "#4CAF50",
    flex: 1,
    marginRight: 8,
  },

  expenseCard: {
    backgroundColor: "#F44336",
    flex: 1,
    marginLeft: 8,
  },

  summaryRow: {
    flexDirection: "row",
  },

  cardLabel: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
    marginBottom: 8,
  },

  cardValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  actionsContainer: {
    gap: 12,
    marginTop: "auto",
  },

  primaryButton: {
    backgroundColor: "#1e9038",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  buttonTextOutline: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center"
  },

  secondaryButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  secondaryButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },

  cardLink: {
    marginTop: 20,    
    backgroundColor: 'transparent',
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
    width: '100%'
  }
  
});
