import { Text, View, StyleSheet } from 'react-native';
import { Link } from "@react-navigation/native";
export default function AboutScreen() {
  return (
    <View 
      style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link to="/index" style={styles.button}> Go to index screen</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    backgroundColor: "#AAA",
  },
});
