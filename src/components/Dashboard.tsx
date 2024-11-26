import React from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from '@ionic/react';

import './Dashboard.css'; // Include custom CSS

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar style={{ backgroundColor: '#4CAF50' }}>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          {/* Summary Cards */}
          <IonRow>
            <IonCol size="6">
              <IonCard className="custom-green-card">
                <IonCardHeader>
                  <IonCardSubtitle>Total Savings</IonCardSubtitle>
                  <IonCardTitle>K 233,500</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Contributions made by all group members.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard className="custom-green-card">
                <IonCardHeader>
                  <IonCardSubtitle>Total Loans</IonCardSubtitle>
                  <IonCardTitle>K 400,200</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Amount loaned out to members.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Recent Transactions */}
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Recent Transactions</IonCardSubtitle>
                  <IonCardTitle>Activity</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li>John contributed $500</li>
                    <li>Jane repaid $200</li>
                    <li>Loan of $1,000 approved for Sarah</li>
                  </ul>
                  <IonButton expand="block" className="custom-green-button">
                    View All
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Group Members */}
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Group Members</IonCardSubtitle>
                  <IonCardTitle>Active Members</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li>John Doe</li>
                    <li>Jane Smith</li>
                    <li>Sarah Brown</li>
                    <li>David Lee</li>
                  </ul>
                  <IonButton expand="block" className="custom-green-button">
                    Manage Members
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
