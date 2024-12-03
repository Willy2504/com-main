import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  IonAvatar,
  IonButtons,
} from "@ionic/react";
import { add, menu, refresh, search, peopleOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const GroupMembers: React.FC = () => {
  const [members, setMembers] = useState([
    { name: "Doreen Phiri", subtitle: "Tsabango", phone: "+265883248049" },
    { name: "William Ndau", subtitle: "TBC", phone: "+265880267693" },
  ]);

  const history = useHistory(); // Used for navigation

  const handleAddMember = () => {
    history.push("/add-member"); // Navigate to the Add Member page
  };

  const handleMeetingsClick = () => {
    history.push("/meetings"); // Navigate to the Meetings page
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar style={{ backgroundColor: "#4CAF50" }}>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={menu} />
            </IonButton>
          </IonButtons>
          <IonTitle>Members</IonTitle>
          <IonButtons slot="end">
            {/* Meetings Icon */}
            <IonButton onClick={handleMeetingsClick}>
              <IonIcon icon={peopleOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={search} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding">
        {/* Members List */}
        <IonList>
          {members.map((member, index) => (
            <IonItem key={index} button>
              <IonAvatar slot="start">
                <div
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </IonAvatar>
              <IonLabel>
                <h2>{member.name}</h2>
                <p>{member.subtitle}</p>
              </IonLabel>
              <IonButton fill="clear" slot="end">
                <IonIcon icon={menu} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        {/* Floating Action Button */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="success" onClick={handleAddMember}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default GroupMembers;
