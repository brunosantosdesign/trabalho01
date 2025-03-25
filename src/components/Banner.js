import { View, Text, StyleSheet, Image } from "react-native";

export default function Banner() {
  return (
    <View style={styles.banner}>
      <View>
        <Text style={styles.bannerText}>Promoção Macbooks</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={styles.bannerText2}>35%</Text>
          <Text style={styles.bannerText3}>off</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/techshop/mackbook.png")}
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 24,
    height: 120,
    backgroundColor: "#3B82F6",
    borderRadius: 8,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bannerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 160,
  },
  bannerText2: {
    color: "#172554",
    fontSize: 32,
    fontWeight: "bold",
  },
  bannerText3: {
    color: "#172554",
    fontSize: 18,
    fontWeight: "bold",
  },
  bannerImage: {
    width: 140,
    height: 80,
    objectFit: "contain",
  },
});
