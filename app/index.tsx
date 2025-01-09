import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TodoProvider } from "../contexts/TodoContext";
import TodoList from "../components/TodoList";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <TodoProvider>
          <Stack.Screen
            options={{
              title: "My Tasks",
              headerStyle: {
                backgroundColor: "#6750A4",
              },
              headerTintColor: "#fff",
            }}
          />
          <TodoList />
          <StatusBar style="auto" />
        </TodoProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
