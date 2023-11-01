import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import resultStyle from "./styles";
import { useNavigation } from '@react-navigation/native';

export default function ResultPage({ route }: any) {
  const { alcoolV, gasolinaV } = route.params;
  const [result, setResult] = useState('');

  
  
  const navigation = useNavigation();


    useEffect(() => {
      if (alcoolV / gasolinaV < 0.7) {
        setResult("Álcool");
      } else {
        setResult("Gasolina");
      }
    });


function handleGoBack() {
  navigation.navigate('Home');
}


  return (
    <SafeAreaView style={resultStyle.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <StatusBar backgroundColor="black" />

        <View style={resultStyle.elements}>
          <View style={{ marginBottom: "10%" }}>
            <Image
              source={require("../../assets/images/gas.png")}
              style={{ alignSelf: "center", marginBottom: 30 }}
            />
            <Text style={resultStyle.titulo}>Compensa usar {result}</Text>
          </View>
          <View style={resultStyle.inputContainer}>
            <Text style={[resultStyle.titulo, { color: "white", marginBottom:'3%' }]}>
              Com os preços:
            </Text>
            <Text style={resultStyle.inputLabel}>Álcool: R$ {alcoolV.toFixed(2)}</Text>
            <Text style={resultStyle.inputLabel}>Gasolina: R$ {gasolinaV.toFixed(2)}</Text>
            <TouchableOpacity style={resultStyle.button} onPress={handleGoBack}>
              <Text style={resultStyle.buttonText}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
