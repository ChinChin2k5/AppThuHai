import React from "react";
import { Text, View } from "react-native";
interface SquareProps {
  text: string;
  color?: string;
}
const Square = ({text,color}: SquareProps) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: color || 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    }}>
      <Text>{text}</Text>
    </View>
  );
};
const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Square text="A" color="red"/>
      <Square text="B" color="green"/>
      <Square text="C" color="yellow"/>
    </View>
  )
}
export default App;
