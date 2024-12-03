import React, { useState } from "react";
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
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import {
  shieldOutline,
  walletOutline,
  cashOutline,
  logOutOutline,
  globeOutline,
} from "ionicons/icons";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./Settings.css"; // Import custom CSS for styling

const SettingsPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang); // Update language dynamically
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle className="title-white">{t("settings")}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Account Section */}
        <IonLabel>{t("account")}</IonLabel>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none" className="ion-padding-vertical">
                <IonLabel>
                  <h3>{t("userName")}</h3>
                  <p>{t("phoneNumber")}</p>
                  <p>{t("role")}</p>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonLabel>
          <p>{t("groupSettings")}</p>
        </IonLabel>

        {/* Group Settings Section */}
        <IonList>
          <IonItem button>
            <IonIcon icon={shieldOutline} slot="start" className="custom-icon" />
            <IonLabel>{t("groupRoles")}</IonLabel>
          </IonItem>

          <IonItem button>
            <IonIcon icon={walletOutline} slot="start" className="custom-icon" />
            <IonLabel>{t("loanProducts")}</IonLabel>
          </IonItem>

          <IonItem button>
            <IonIcon icon={cashOutline} slot="start" className="custom-icon" />
            <IonLabel>{t("savingsProducts")}</IonLabel>
          </IonItem>
        </IonList>

        {/* Change Language Section */}
        <IonLabel>
          <p>{t("preferences")}</p>
        </IonLabel>
        <IonList>
          <IonItem>
            <IonIcon icon={globeOutline} slot="start" className="custom-icon" />
            <IonLabel>{t("changeLanguage")}</IonLabel>
            <IonSelect
              value={selectedLanguage}
              placeholder="Select Language"
              onIonChange={(e) => handleLanguageChange(e.detail.value)}
            >
              <IonSelectOption value="en">English</IonSelectOption>
              <IonSelectOption value="ny">Chichewa</IonSelectOption>
            </IonSelect>
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
                {t("logout")}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
