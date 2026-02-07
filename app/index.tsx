import { Text, View } from "react-native";
import styles from "./Style";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World </Text>
      <Link href={"/about"} style={styles.button}>About Page </Link>
    </View>
  );
}
