import { View, Text, StyleSheet } from "react-native";

export default function Categoria({ tipo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tipo.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },
});
