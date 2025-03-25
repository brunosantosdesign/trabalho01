import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/techshop/TechShop-logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBEAFE",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
});
