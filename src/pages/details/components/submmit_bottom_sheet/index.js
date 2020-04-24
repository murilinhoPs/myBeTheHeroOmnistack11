import React from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  View,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import RBSheet from "react-native-raw-bottom-sheet";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";

const validationSchema = yup.object().shape({
  mensagem: yup.string().required(),
});

export default function SubmmitBottomSheet({ myRef, caso, isWpp }) {
  // const [inputValue, setInputValue] = React.useState();

  let message = "";

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

  const SheetContent = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ textAlign: "center" }}
    >
      <Text style={{ color: "#ef5350", fontSize: 20, paddingTop: 10 }}>
        Digite sua mensagem para {caso.name}
      </Text>
      <Formik
        initialValues={{ mensagem: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          message = values.mensagem;
          console.log(message);

          if (isWpp) {
            sendWpp();
            console.log("Mandou WhatsApp");
          } else {
            sendEmail();
            console.log("Mandou E-mail");
          }

          // alert(JSON.stringify(values.mensagem));
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input_field}
              onChangeText={formikProps.handleChange("mensagem")}
              placeholder="Olá, sou o Bob e quero te ajudar!"
              autoFocus={false}
              multiline={true}
            />

            <Text
              style={{
                color: "red",
                fontSize: 12,
                paddingBottom: 20,
                marginTop: -3,
              }}
            >
              {formikProps.errors.mensagem}
            </Text>

            <TouchableOpacity
              style={styles.button_sheet}
              onPress={() => formikProps.handleSubmit()}
            >
              <Text style={{ color: "#ef5350", fontSize: 18 }}>
                Enviar {isWpp ? "WhatsApp" : "E-mail"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );

  return (
    <RBSheet
      ref={myRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backfaceVisibility: "visible",
        },
        draggableIcon: {
          backgroundColor: "grey",
        },
        container: {
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
          maxHeight: "35%",
          backgroundColor:"white"
        },
      }}
    >
      <SheetContent />
    </RBSheet>
  );
}
