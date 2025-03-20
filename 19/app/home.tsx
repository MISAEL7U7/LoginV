import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import { Button, Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido {user?.name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a perfil"
          onPress={() => router.push("./profile")}
          color="#A0522D"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          onPress={() => {
            logout();
            router.replace("./login");
          }}
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
  buttonContainer: {
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 15,
  },
});