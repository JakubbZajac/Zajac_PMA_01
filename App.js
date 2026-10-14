import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  function inputTextHandler(text) {
    setInputText(text);
  }

  function addHandler() {
    setTaskList([...taskList, inputText]);
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Zadaj úlohu...."
          onChangeText={inputTextHandler}
        />
        <Button onPress={addHandler} title="ADD" />
      </View>

      <View style={styles.tasksContainer}>
        {taskList.map((i) => (
          <Pressable style={styles.taskItem} key={i}>
            <Text>{i}</Text>
          </Pressable>
        ))}
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
    marginTop: 100,
  },
  input: {
    borderColor: "#ff0000",
    borderWidth: 3,
    borderRadius: 8,
    width: "80%",
  },
  taskItem: {
    backgroundColor: "#30c718",
    padding: 12,
    margin: 8,
    borderRadius: 6,
  },
});
