import { View, StyleSheet } from "react-native";
import { Card, Text, IconButton, Checkbox } from "react-native-paper";
import { useTodos, Todo } from "../contexts/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <Card style={[styles.card, todo.completed && styles.completedCard]}>
      <Card.Content style={styles.content}>
        <Checkbox
          status={todo.completed ? "checked" : "unchecked"}
          onPress={() => toggleTodo(todo.id)}
        />
        <View style={styles.textContainer}>
          <Text
            variant="titleMedium"
            style={[styles.title, todo.completed && styles.completedText]}
          >
            {todo.title}
          </Text>
          {todo.description ? (
            <Text
              variant="bodyMedium"
              style={[
                styles.description,
                todo.completed && styles.completedText,
              ]}
            >
              {todo.description}
            </Text>
          ) : null}
        </View>
        <IconButton
          icon="delete"
          onPress={() => deleteTodo(todo.id)}
          style={styles.deleteButton}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  completedCard: {
    opacity: 0.7,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  completedText: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    marginLeft: 8,
  },
});
