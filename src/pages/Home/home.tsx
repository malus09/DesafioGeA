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
import homeStyles from "./styles";

export default function HomePage() {
  return (
    <SafeAreaView style={homeStyles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <StatusBar backgroundColor="black" />

        <View style={homeStyles.elements}>
          <View>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ alignSelf: "center", marginBottom: 30 }}
            />
            <Text style={homeStyles.titulo}>Qual a melhor opção?</Text>
          </View>

          <View style={homeStyles.inputContainer}>
            <Text style={homeStyles.inputLabel}>Álcool (preço por litro)</Text>
            <TextInput style={homeStyles.textInput} />
            <Text style={homeStyles.inputLabel}>
              Gasolina (preço por litro)
            </Text>
            <TextInput style={homeStyles.textInput} />
            <TouchableOpacity style={homeStyles.button}>
              <Text style={homeStyles.titulo}>Calcular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
