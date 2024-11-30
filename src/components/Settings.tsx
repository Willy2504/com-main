import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  shieldOutline,
  walletOutline,
  cashOutline,
  closeOutline,
  logOutOutline,
} from "ionicons/icons";
import "./Settings.css"; // Import custom CSS for styling



const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle className="title-white">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Account Section */}
        <IonLabel>Account</IonLabel>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none" className="ion-padding-vertical">
                <IonLabel>
                  <h3>Uchizi Nyirongo</h3>
                  <p>+265984227262</p>
                  <p>Money Counter</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonLabel>
          <p>Group Settings</p>
        </IonLabel>

        {/* Group Settings Section */}
        <IonList>
          <IonItem button>
            <IonIcon icon={shieldOutline} slot="start" className="custom-icon" />
            <IonLabel>Group Roles</IonLabel>
          </IonItem>

          <IonItem button>
            <IonIcon icon={walletOutline} slot="start" className="custom-icon" />
            <IonLabel>Loan Products</IonLabel>
          </IonItem>

          <IonItem button>
            <IonIcon icon={cashOutline} slot="start" className="custom-icon" />
            <IonLabel>Savings Products</IonLabel>
          </IonItem>

          <IonItem button>
            <IonIcon icon={closeOutline} slot="start" className="custom-icon" />
            <IonLabel>Close Cycle</IonLabel>
          </IonItem>
        </IonList>

        {/* Logout Button */}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                color="success"
                className="logout-button ion-margin-top"
              >
                <IonIcon icon={logOutOutline} slot="start" className="custom-icon" />
                Logout
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
