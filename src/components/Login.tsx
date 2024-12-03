import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonImg } from "@ionic/react";
import { FormikInit, TextInputField, SelectInputField } from "./form"; // Assuming you've created these components
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const history = useHistory();

  // Yup validation schema
  const schema = Yup.object().shape({
    groupId: Yup.string().required("Group ID is required").min(2).max(5),
    pin: Yup.string().min(4, "PIN must be at least 4 digits").required("PIN is required"),
  });

  const handleLoginSubmit = (values: { groupId: string; pin: string }) => {
    onLogin();
    history.push("/home");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding login-content">
        <IonImg src="/comsip.jpg" className="login-img"/>
        <FormikInit
          initialValues={{ groupId: "", pin: "" }}
          validationSchema={schema}
          onSubmit={handleLoginSubmit}
        >
          <div className="login-header">
            <h2>Welcome Back!</h2>
            <p>Please log in to continue.</p>
          </div>

          <TextInputField
            name="groupId"
            label="Group ID"
            placeholder="Enter Group ID" id={""}          />

          <TextInputField
            name="pin"
            label="PIN"
            type="password"
            placeholder="Enter PIN" id={""}          />

          <IonButton
            expand="block"
            color="success"
            type="submit"
            style={{ marginTop: "1em" }}
          >
            Log In
          </IonButton>
        </FormikInit>
      </IonContent>
    </IonPage>
  );
};

export default Login;
