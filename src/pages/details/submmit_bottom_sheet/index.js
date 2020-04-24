import React from "react";
import { View, TextInput, Text, TouchableOpacity, Linking } from "react-native";
import { ActionSheetCustom as ActionSheet } from "react-native-custom-actionsheet";
import { TextField } from "react-native-material-textfield";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";

const CANCEL_INDEX = 0;

export default function SubmmitBottomSheet({ myRef, caso, isWpp }) {
  const [inputValue, setInputValue] = React.useState();

  const message = inputValue;
  const aviso = "";

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Ajude o caso: ${caso.title}`,
      recipients: [caso.email],
      body: message,
    });
  }

  function sendWpp() {
    Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${message}`);
  }

  const title = (
    <Text style={{ color: "#00008b", fontSize: 18 }}>
      Digite sua mensagem para {caso.name}
    </Text>
  );

  const options = [
    {
      component: <Text style={{ color: "crimson", fontSize: 24 }}>Cancel</Text>,
    },
    {
      component: (
        <TextInput
          style={styles.input_field}
          onChangeText={(text) => setInputValue(text)}
          placeholder="Olá, sou o Bob e quero te ajudar!"
          autoFocus={true}
          multiline={true}
          value={inputValue}
        />
      ),
      height: 50,
    },
    {
      component: (
        <TouchableOpacity
          style={styles.button_sheet}
          onPress={() => {
            if (isWpp) {
              sendWpp();
              console.log("Mandou WhatsApp");
            } else {
              sendEmail();
              console.log("Mandou E-mail");
            }
          }}
        >
          <Text style={{ color: "#2929ff", fontSize: 22 }}>
            Enviar {isWpp ? "WhatsApp" : "E-mail"}
          </Text>
        </TouchableOpacity>
      ),
      height: 40,
    },
  ];

  return (
    <ActionSheet
      ref={myRef}
      title={title}
      options={options}
      cancelButtonIndex={CANCEL_INDEX}
      destructiveButtonIndex={1}
    />
  );
}
