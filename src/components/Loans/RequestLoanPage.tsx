import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonText,
} from "@ionic/react";

const RequestLoanPage: React.FC = () => {
  // State hooks for the loan information and location details
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [incomeSource, setIncomeSource] = useState("");
  const [loanRequiredBy, setLoanRequiredBy] = useState("");
  const [installments, setInstallments] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");

  // Handle form save
  const handleSave = () => {
    console.log("Loan Application Details:", {
      loanAmount,
      loanPurpose,
      loanTerm,
      incomeSource,
      loanRequiredBy,
      installments,
      phoneNumber,
      region,
      district,
      village,
    });
    // You can save the loan application details here (e.g., to a database or state)
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar style={{ backgroundColor: "#4CAF50" }}>
          <IonTitle>Loan Application</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding" style={{ backgroundColor: "#f4f7fa" }}>
        <IonText>
          <h2 style={{ color: "#4CAF50", textAlign: "center" }}>Apply for a Loan</h2>
        </IonText>

        {/* Loan Information Section */}
        <div className="form-section">
          <IonLabel className="section-title">Loan Information</IonLabel>

          {/* Loan Amount */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Loan Amount
            </IonLabel>
            <IonInput
              value={loanAmount}
              placeholder="Enter loan amount"
              onIonChange={(e) => setLoanAmount(e.detail.value!)}
              type="number"
              style={{ borderColor: "#4CAF50" }}
            />
          </IonItem>

          {/* Income Source */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Income Source
            </IonLabel>
            <IonSelect
              value={incomeSource}
              onIonChange={(e) => setIncomeSource(e.detail.value)}
              placeholder="Select income source"
              style={{ borderColor: "#4CAF50" }}
            >
              <IonSelectOption value="Agriculture">Salary</IonSelectOption>
              <IonSelectOption value="Business">Business</IonSelectOption>
              <IonSelectOption value="Employment">Investments</IonSelectOption>
              <IonSelectOption value="others">Other</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Phone Number */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Phone Number
            </IonLabel>
            <IonInput
              value={phoneNumber}
              placeholder="Enter phone number"
              onIonChange={(e) => setPhoneNumber(e.detail.value!)}
              type="tel"
              style={{ borderColor: "#4CAF50" }}
            />
          </IonItem>

          {/* Loan Purpose */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Purpose of Loan
            </IonLabel>
            <IonInput
              value={loanPurpose}
              placeholder="Enter the purpose of the loan"
              onIonChange={(e) => setLoanPurpose(e.detail.value!)}
              style={{ borderColor: "#4CAF50" }}
            />
          </IonItem>

          {/* Loan Term */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Loan Term (Months)
            </IonLabel>
            <IonInput
              value={loanTerm}
              placeholder="Enter loan term in months"
              onIonChange={(e) => setLoanTerm(e.detail.value!)}
              type="number"
              style={{ borderColor: "#4CAF50" }}
            />
          </IonItem>

          {/* Loan Required By */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Loan Required By
            </IonLabel>
            <IonInput
              type="date"
              value={loanRequiredBy}
              onIonChange={(e) => setLoanRequiredBy(e.detail.value!)}
              style={{ borderColor: "#4CAF50" }}
            />
          </IonItem>

          {/* Installments */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Number of Installments
            </IonLabel>
            <IonSelect
              value={installments}
              onIonChange={(e) => setInstallments(e.detail.value)}
              placeholder="Select number of installments"
              style={{ borderColor: "#4CAF50" }}
            >
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
              <IonSelectOption value="6">6</IonSelectOption>
              <IonSelectOption value="12">12</IonSelectOption>
              <IonSelectOption value="24">24</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>

        {/* Location Details Section */}
        <div className="form-section">
          <IonLabel className="section-title">Location Details</IonLabel>

          {/* Region */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Region
            </IonLabel>
            <IonSelect
              value={region}
              onIonChange={(e) => setRegion(e.detail.value)}
              placeholder="Select Region"
              style={{ borderColor: "#4CAF50" }}
            >
              <IonSelectOption value="north">North</IonSelectOption>
              <IonSelectOption value="central">Central</IonSelectOption>
              <IonSelectOption value="south">South</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* District */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              District
            </IonLabel>
            <IonInput
              value={district}
              placeholder="Enter district"
              onIonChange={(e) => setDistrict(e.detail.value!)}
              style={{ borderColor: "#4CAF50" }}
            />
          </IonItem>

          {/* Village */}
          <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
            <IonLabel position="stacked" style={{ color: "#4CAF50" }}>
              Village
            </IonLabel>
            <IonInput
              value={village}
              placeholder="Enter your village"
              onIonChange={(e) => setVillage(e.detail.value!)}
              style={{ borderColor: "#4CAF50" }}
            />
          </IonItem>
        </div>

        {/* Submit Button */}
        <IonButton
  expand="block"
  color="success"
  onClick={handleSave}
  style={{ marginTop: '1em' }}
>
  Submit Application
</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default RequestLoanPage;
