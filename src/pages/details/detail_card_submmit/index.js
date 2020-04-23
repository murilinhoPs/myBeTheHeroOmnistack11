import React, { useState } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import { cardContext } from "../../../global/card_context";
import styles from "./styles";

export default function DetailCardSubmmit() {
  const { caso } = React.useContext(cardContext);
  const [dialog, setDialog] = useState(false);
  const message = `Olá ${caso.name}! Mensagem para ser enviada pelo bottom sheet-InputField`;

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

  const DetailsActions = () => (
    <View style={styles.cardButtons}>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => {
          setDialog(!dialog);
          sendWpp();
        }}
      >
        <Text style={styles.cardButtonText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardButton} onPress={sendEmail}>
        <Text style={styles.cardButtonText}>E-mail</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardProperty}>Salve o dia!</Text>
          <Text style={styles.cardProperty}>Seja meu herói hoje.</Text>
          <Text style={styles.cardPropertValue}>Entre em contato:</Text>
        </View>
        <DetailsActions />
      </View>
      {dialog ? <Text>DIALOG</Text> : null}
    </View>
  );
}
