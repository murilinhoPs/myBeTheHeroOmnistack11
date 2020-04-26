import React from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

//TODO: Separate logic from view https://dev.to/tomekbuszewski/high-level-view-and-logic-separation-in-react-39n0

export default function BottomSheetView(props) {
  return (
    <View>
      <Text style={styles.sheet_title}>
        Digite sua mensagem para {props.caso.name}
      </Text>
      <TextInput
        style={styles.input_field}
        onChangeText={props.formikProps.handleChange("mensagem")}
        placeholder="Olá, sou o Bob e quero te ajudar!"
        autoFocus={false}
        multiline={true}
      />

      <Text style={styles.input_field_error_text}>
        {props.formikProps.errors.mensagem}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.formikProps.handleSubmit()}
      >
        <Text style={styles.button_text}>Enviar {props.mailOrWpp}</Text>
      </TouchableOpacity>
    </View>
  );
}
