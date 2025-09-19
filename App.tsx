import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// ⬅ Your coding starts below this line

const users = [
  { id: "1", name: "Siya", age: 25 },
  { id: "2", name: "Caryn", age: 30 },
  { id: "3", name: "Jaco", age: 22 },
  { id: "4", name: "Mihle", age: 28 },
];
const UserItem = ({ name, age }: { name: string; age: number }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.age}>Age: {age}</Text>
  </View>
);


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 My First FlatList</Text>
      <FlatList
	      data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem name={item.name} age={item.age} />}
      />
    </View>
  );
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    backgroundColor: "#brown",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  age: {
    fontSize: 14,
    color: "white",
  },
});



