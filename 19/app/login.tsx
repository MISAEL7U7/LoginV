import { useRouter } from "expo-router";
import { useAuth } from "./Context/AuthContext";
import { useState } from "react";
import { Alert, Button, TextInput, View, Text, StyleSheet } from "react-native";

export default function LoginScreen() {
  const { login, register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      router.replace("/home");
    } else {
      Alert.alert("Error", "Email y/o contraseña incorrectos");
    }
  };

  const handleRegister = async () => {
    const success = await register(email, password);
    if (success) {
      Alert.alert("Usuario creado correctamente");
    } else {
      Alert.alert("Error", "No se pudo crear el usuario");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu email"
        placeholderTextColor="#8B7355"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa la contraseña"
        placeholderTextColor="#8B7355"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar sesión"
          onPress={handleLogin}
          color="#A0522D"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Registrarse"
          onPress={handleRegister}
          color="#A0522D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5DC",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B4513",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#8B7355", 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#8B4513",
    backgroundColor: "#FFF8DC",
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 5,
    overflow: "hidden", 
    marginBottom: 10,
  },
});