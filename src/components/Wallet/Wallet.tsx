import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonRouterLink,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { cashOutline, walletOutline, shieldOutline } from 'ionicons/icons';
import './Wallet.css';

const Wallet: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* Header Text */}
        <IonGrid>
          <IonRow>
            <IonCol className="text-center">
              <h1 className="main-header">/Digi_Training_Center_Uchizi</h1>
              <p className="sub-header">Your cash as a group</p>
            </IonCol>
          </IonRow>

          {/* First Container - Green Card */}
          <IonRow>
            <IonCol>
              <IonCard
                className="custom-green-card"
                button
                onClick={() => navigateTo('/cashbox-details')} // Navigate to the Cashbox details page
              >
                <IonCardHeader>
                  <IonCardSubtitle className="ion-card-subtitle-custom">
                    <IonIcon icon={cashOutline} className="icon-subtitle" />
                    Cashbox
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  This is the cash you have saved as a group and kept in your lockbox.
                </IonCardContent>
                <div className="balance-section">
                  <p className="balance-text">Available Cashbox Balance</p>
                  <IonCardTitle className="balance-amount">K 500,000</IonCardTitle>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Second Container - Green Card */}
          <IonRow>
            <IonCol>
              <IonCard
                className="custom-green-card"
                button
                onClick={() => navigateTo('/wallet-details')} // Navigate to the Wallet details page
              >
                <IonCardHeader>
                  <IonCardSubtitle className="ion-card-subtitle-custom">
                    <IonIcon icon={walletOutline} className="icon-subtitle" />
                    Group Wallet
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Keep group savings securely in a mobile money wallet.
                </IonCardContent>
                <div className="balance-section">
                  <p className="balance-text">Available Wallet Balance</p>
                  <IonCardTitle className="balance-amount">K 200,000</IonCardTitle>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Third Container - Blue Card */}
          <IonRow>
            <IonCol>
              <IonCard
                className="custom-blue-card"
                button
                onClick={() => navigateTo('/reserve-wallet-details')} // Navigate to the Reserve Wallet details page
              >
                <IonCardHeader>
                  <IonCardSubtitle className="ion-card-subtitle-custom">
                    <IonIcon icon={shieldOutline} className="icon-subtitle" />
                    Reserve Wallet
                  </IonCardSubtitle>
                  <IonCardTitle>Accessible Reserve</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  This is the reserve cash you can access via the reserve wallet.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Wallet;
