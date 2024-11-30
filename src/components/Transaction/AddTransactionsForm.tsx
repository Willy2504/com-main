import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { saveOutline } from "ionicons/icons";

const AddTransactionForm: React.FC = () => {
  // State for form inputs
  const [type, setType] = useState<string | undefined>();
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [amount, setAmount] = useState<string | undefined>();
  const [date, setDate] = useState<string | undefined>();

  const handleSaveTransaction = () => {
    console.log("Transaction saved:", { type, firstName, lastName, amount, date });
    alert("Transaction added successfully!");
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar style={{ backgroundColor: "#4CAF50" }}>
          <IonTitle>Add Transaction</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleSaveTransaction}>
              <IonIcon icon={saveOutline} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding" style={{ backgroundColor: "#f4f7fa" }}>
        {/* Transaction Type */}
        <IonItem>
          <IonLabel>Type</IonLabel>
          <IonSelect
            value={type}
            placeholder="Select Type"
            onIonChange={(e) => setType(e.detail.value)}
          >
            <IonSelectOption value="Deposit">Deposit</IonSelectOption>
            <IonSelectOption value="Withdrawal">Withdrawal</IonSelectOption>
            <IonSelectOption value="Loan">Loan</IonSelectOption>
            <IonSelectOption value="Repayment">Repayment</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* First Name */}
        <IonItem>
          <IonLabel>Name:</IonLabel>
          <IonInput
            value={firstName}
            placeholder="Name"
            onIonChange={(e) => setFirstName(e.detail.value!)}
          />
        </IonItem>

        {/* Last Name */}
        <IonItem>
          <IonLabel>Surname:</IonLabel>
          <IonInput
            value={lastName}
            placeholder="Enter Surname"
            onIonChange={(e) => setLastName(e.detail.value!)}
          />
        </IonItem>

        {/* Amount */}
        <IonItem>
          <IonLabel>Amount:</IonLabel>
          <IonInput
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onIonChange={(e) => setAmount(e.detail.value!)}
          />
        </IonItem>

        {/* Date */}
        <IonItem>
          <IonLabel>Date</IonLabel>
          <IonInput
            type="date"
            value={date}
            placeholder="Select Date"
            onIonChange={(e) => setDate(e.detail.value!)}
          />
        </IonItem>

        {/* Save Button */}
        <IonButton
          expand="block"
          color="success"
          style={{ marginTop: "20px" }}
          onClick={handleSaveTransaction}
        >
          Save Transaction
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddTransactionForm;
