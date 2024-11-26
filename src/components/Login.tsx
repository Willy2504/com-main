import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonItem, IonLabel, IonImg } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
  const [groupId, setGroupId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    console.log('Group ID:', groupId);
    console.log('PIN:', pin);
    // Add login logic here
  };

  return (
    <IonPage>
      
      <IonContent className="ion-padding login-content">
        <div className="login-header">
          <h2>Welcome Back!</h2>
          <p>Please log in to continue.</p>
        </div>
        <IonImg src="/comsip.jpg" className="login-img" />
        <IonItem>
          <IonLabel position="floating">Group ID</IonLabel>
          <IonInput
            type="text"
            value={groupId}
            onIonChange={(e) => setGroupId(e.detail.value!)}
            placeholder="Enter your Group ID"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">PIN</IonLabel>
          <IonInput
            type="password"
            value={pin}
            onIonChange={(e) => setPin(e.detail.value!)}
            placeholder="Enter your PIN"
            inputmode="numeric"
          />
        </IonItem>
        <IonButton
          expand="block"
          color="success"
          onClick={handleLogin}
          style={{ marginTop: '1em' }}
        >
          Log In
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
