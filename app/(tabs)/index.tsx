// import { Link } from "@react-navigation/native"; usamos to en lugar de href
import { Text, View, StyleSheet, } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}>

      <Text style={styles.text}>Hello StickerSmash</Text>
      
    
    
 
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    backgroundColor: "#25292e",
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
text:{
  color:"#fff"

},
button: {
  fontSize: 20,
  textDecorationLine: 'underline',
  color: '#fff',
  backgroundColor: "#AAA",
},
});
