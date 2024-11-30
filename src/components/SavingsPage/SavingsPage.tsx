import React from "react";
import { IonButtons, IonBackButton,IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import "./SavingsPage.css";


const savingsData = {
  totalSavings: 233500,
  recentContributions: [
    { member: "John Doe", amount: 5000, date: "2024-11-25" },
    { member: "Jane Smith", amount: 3000, date: "2024-11-24" },
  ],
};


const SavingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
  <IonToolbar color="primary">
    <IonButtons slot="start">
      <IonBackButton defaultHref="/dashboard" />
    </IonButtons>
    <IonTitle>Savings Details</IonTitle>
  </IonToolbar>
</IonHeader>
<IonContent className="ion-padding">
  <h2>Total Savings: K {savingsData.totalSavings.toLocaleString()}</h2>
  <h3>Recent Contributions</h3>
  <ul>
    {savingsData.recentContributions.map((contribution, index) => (
      <li key={index}>
        {contribution.member}: K {contribution.amount.toLocaleString()} on {contribution.date}
      </li>
    ))}
  </ul>
</IonContent>

    </IonPage>
  );
};

export default SavingsPage;
