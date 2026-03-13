import { Alert } from "react-native"

export function handleAuthError(error: any) {

  switch (error.code) {

    case "auth/invalid-email":
      Alert.alert("Erro", "Email inválido")
      break

    case "auth/user-not-found":
      Alert.alert("Erro", "Usuário não encontrado")
      break

    case "auth/wrong-password":
      Alert.alert("Erro", "Senha incorreta")
      break

    case "auth/invalid-credential":
      Alert.alert("Erro", "Email ou senha incorretos")
      break

    case "auth/email-already-in-use":
      Alert.alert("Erro", "Este email já está cadastrado")
      break

    case "auth/weak-password":
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres")
      break

    default:
      Alert.alert("Erro", "Erro inesperado. Tente novamente")

  }

}