import { useAuth } from "@/context/AuthContext";
import { useTransactions } from "@/context/TransactionsContext";
import { useRouter } from "expo-router";
import React from "react";
import Chart from "@/components/Chart";
import { mockData } from "@/utils/data";

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

export default function Despesas () {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { summary } = useTransactions();
  
  const chartData = mockData["1M"]
  const { width } = useWindowDimensions(); 

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

        <View style={styles.chartContainer}>
          <Text style={styles.smalltitle}>Gráfico de Despesas</Text>
          <Text style={styles.maintitle}>R$ 0,00</Text>
          <Chart data={chartData} width={width} />
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

  smalltitle: {
    fontSize: 16,
    color: "#666",
  },

  maintitle: {
    fontSize: 46,
    color: "#F44336",
    marginBottom: 30,
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  
  chartContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
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
});
