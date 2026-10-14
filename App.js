import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Zadaj úlohu...." />
        <Button title="ADD" />
      </View>
      <View style={styles.tasksContainer}>
        <Text>UDALOSTI....</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  tasksContainer: {
    flex: 4,
    padding: 24,
    borderTopWidth: 3,
  },
  container: {
    flex: 1,
  },
  input: {
    borderColor: "#ff0000",
    borderWidth: 3,
    borderRadius: 8,
    width: "80%",
  },
});
