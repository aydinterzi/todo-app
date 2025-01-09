import { View, StyleSheet, FlatList } from "react-native";
import { FAB } from "react-native-paper";
import { useTodos, Todo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import AddTodoModal from "./AddTodoModal";
import { useState } from "react";

export default function TodoList() {
  const { todos } = useTodos();
  const [isModalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }: { item: Todo }) => <TodoItem todo={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <FAB
        icon="plus"
        onPress={() => setModalVisible(true)}
        style={styles.fab}
      />

      <AddTodoModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 8,
    paddingBottom: 80, // FAB için alan bırak
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#6750A4",
  },
});
