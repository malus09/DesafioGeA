import React from "react";
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

export default function ResultPage() {
  return (
    <SafeAreaView style={resultStyle.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <StatusBar backgroundColor="black" />

        <View style={resultStyle.elements}>
          <View>
            <Image
              source={require("../../assets/images/gas.png")}
              style={{ alignSelf: "center", marginBottom: 30 }}
            />
            <Text style={resultStyle.titulo}>Resultado</Text>
          </View>

          <View style={resultStyle.inputContainer}>
            <Text style={resultStyle.inputLabel}>Álcool (preço por litro)</Text>
            <TextInput style={resultStyle.textInput} />
            <Text style={resultStyle.inputLabel}>
              Gasolina (preço por litro)
            </Text>
            <TextInput style={resultStyle.textInput} />
            <TouchableOpacity style={resultStyle.button}>
              <Text style={resultStyle.titulo}>Calcular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
