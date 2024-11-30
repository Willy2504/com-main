import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import "./LoanPage.css"; // Import custom CSS for styling
import { useHistory } from "react-router-dom"; // For React Router v5

const LoanPage: React.FC = () => {
  const history = useHistory();
  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard" />
          </IonButtons>
          <IonTitle style={{ color: "white" }}>Loan Details</IonTitle> {/* White text */}
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Loan Overview */}
        <IonCard className="loan-card">
          <IonCardHeader>
            <IonCardSubtitle>Total Loans</IonCardSubtitle>
            <IonCardTitle>K 400,200</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            A summary of all loans disbursed by the group.
          </IonCardContent>
        </IonCard>

        {/* Loan Status */}
        <IonList>
          <IonItem>
            <IonLabel>
              <h3>Pending Approvals</h3>
              <p>Loans awaiting group approval</p>
            </IonLabel>
            <IonLabel slot="end">10</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Pending Disbursements</h3>
              <p>Loans approved but not yet disbursed</p>
            </IonLabel>
            <IonLabel slot="end">5</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Outstanding Loans</h3>
              <p>Loans currently being repaid</p>
            </IonLabel>
            <IonLabel slot="end">30</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Cleared Loans</h3>
              <p>Loans fully paid off</p>
            </IonLabel>
            <IonLabel slot="end">50</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Written-off Loans</h3>
              <p>Loans that were not recovered</p>
            </IonLabel>
            <IonLabel slot="end">2</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Rejected Applications</h3>
              <p>Loans that were not approved</p>
            </IonLabel>
            <IonLabel slot="end">3</IonLabel>
          </IonItem>
        </IonList>

        {/* Actions */}
        <IonButton
          onClick={() =>navigateTo("/request-loan")}
          expand="block"
          color="success"
          className="ion-margin-top"
          style={{ color: "white" }} // Ensures white text
        >
          Request a Loan
        </IonButton>
        <IonButton
          expand="block"
          color="success"
          className="ion-margin-top"
          style={{ color: "white" }} // Ensures white text
        >
          View Loan History
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoanPage;
