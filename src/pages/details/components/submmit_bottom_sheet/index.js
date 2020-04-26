import React from "react";
import { Linking, ScrollView } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import RBSheet from "react-native-raw-bottom-sheet";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";
import BottomSheetView from "./view";

//TODO: Separate logic from view https://dev.to/tomekbuszewski/high-level-view-and-logic-separation-in-react-39n0

const validationSchema = yup.object().shape({
  mensagem: yup.string().required(),
});

export default function SubmmitBottomSheet({ myRef, caso, isWpp }) {
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

  function formSubmit(values) {
    message = values.mensagem;
    console.log(message);

    if (isWpp) {
      sendWpp();
    } else {
      sendEmail();
    }
  }

  const mailOrWpp = () => (isWpp ? "WhatsApp" : "E-mail");

  const SheetContent = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Formik
        initialValues={{ mensagem: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => formSubmit(values)}
      >
        {(formikProps) => (
          <BottomSheetView
            formikProps={formikProps}
            mailOrWpp={mailOrWpp()}
            caso={caso}
          />
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
        wrapper: styles.wrapper,
        draggableIcon: styles.draggableIcon,
        container: styles.container,
      }}
    >
      <SheetContent />
    </RBSheet>
  );
}
