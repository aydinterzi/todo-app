import { useState } from "react";
import { StyleSheet } from "react-native";
import { Portal, Modal, TextInput, Button } from "react-native-paper";
import { useTodos } from "../contexts/TodoContext";

interface AddTodoModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddTodoModal({ visible, onClose }: AddTodoModalProps) {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim()) {
      addTodo(title.trim(), description.trim());
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={styles.container}
      >
        <TextInput
          label="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Description (optional)"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={3}
          style={styles.input}
          mode="outlined"
        />
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Add Task
        </Button>
        <Button onPress={onClose}>Cancel</Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 8,
  },
});
