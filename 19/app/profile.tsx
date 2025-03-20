import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import { Button, Text, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de {user?.name}</Text>
      <Text style={styles.text}>Email: {user?.email}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Volver a inicio"
          onPress={() => router.push("/home")}
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
  text: {
    fontSize: 16,
    color: "#8B4513",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
});