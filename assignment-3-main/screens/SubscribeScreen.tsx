import { useState } from "react";
import {
  View,
  Alert,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email && validateEmail(email)) {
      Alert.alert(
        "Subscription Confirmed",
        "Thanks for subscribing, stay tuned!"
      );
    } else {
      Alert.alert("Subscription Failed", "Please enter a valid email address.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Pressable style={styles.button} onPress={handleSubscribe}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3e534b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SubscribeScreen;
