import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import homeStyles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState('');

  const navigation   = useNavigation();

  const navigateToResult = () => {
    const alcoolV = parseFloat(alcool.replace(",", "."));
    const gasolinaV = parseFloat(gasolina.replace(",", "."));

    if (!isNaN(alcoolV) && !isNaN(gasolinaV)) {
      navigation.navigate("Resultado", { alcoolV, gasolinaV });
    } else {
      Alert.alert(
        "Alerta",
        "Por favor, insira valores numéricos para Álcool e Gasolina."
      );
    }
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      <KeyboardAvoidingView
        behavior={'padding'}
      >
        <StatusBar backgroundColor="black" />

        <View style={homeStyles.elements}>
          <View style={{height:'auto'}}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ alignSelf: "center", marginBottom: 30 }}
            />
            <Text style={homeStyles.titulo}>Qual a melhor opção?</Text>
          </View>

          <View style={homeStyles.inputContainer}>
            <Text style={homeStyles.inputLabel}>Álcool (preço por litro):</Text>
            <TextInput
              style={homeStyles.textInput}
              value={alcool}
              onChangeText={setAlcool}
            />

            <Text style={homeStyles.inputLabel}>
              Gasolina (preço por litro):
            </Text>
            <TextInput
              style={homeStyles.textInput}
              value={gasolina}
              onChangeText={setGasolina}
            />

            <TouchableOpacity
              style={homeStyles.button}
              onPress={navigateToResult}
            >
              <Text style={homeStyles.titulo}>Calcular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
