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
  IonAvatar,
  IonPopover,
  IonInput,
} from "@ionic/react";
import { create } from "ionicons/icons"; // Removed menu icon import
import { useHistory } from "react-router-dom";

const Grouproles: React.FC = () => {
  const [members, setMembers] = useState([
    { role: "Chairperson", name: "" },
    { role: "Vice Chairperson", name: "" },
    { role: "Secretary", name: "" },
    { role: "Treasurer", name: "" },
    { role: "Publicity", name: "" },
  ]);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const history = useHistory();

  const handleAddMember = () => {
    history.push("/add-member");
  };

  const handleEditRole = (role: string, event: React.MouseEvent) => {
    setSelectedRole(role);
    //setAnchorElement(event.currentTarget);
    setPopoverOpen(true);
  };

  const handleUpdateName = () => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.role === selectedRole ? { ...member, name: nameInput } : member
      )
    );
    setPopoverOpen(false);
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar style={{ backgroundColor: "#4CAF50", color: "white" }}>
          {/* Removed the menu icon */}
          <IonTitle style={{ color: "#4CAF50" }}>Group Roles</IonTitle> {/* Changed the title color to green */}
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
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
                  {member.role
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </IonAvatar>
              <IonLabel>
                <h2>{member.role}</h2>
                <p>{member.name || "Not Assigned"}</p>
              </IonLabel>
              <IonButton
                fill="clear"
                slot="end"
                onClick={(e) => handleEditRole(member.role, e)}
              >
                <IonIcon
                  icon={create}
                  style={{ color: "white", fontSize: "20px" }}
                />
              </IonButton>
            </IonItem>
          ))}
        </IonList>

        {/* Popover for editing the name of the person for a role */}
        <IonPopover
          isOpen={popoverOpen}
          event={anchorElement}
          onDidDismiss={() => setPopoverOpen(false)}
        >
          <IonContent>
            <div style={{ padding: "20px" }}>
              <h2>Edit {selectedRole}</h2>
              <IonInput
                value={nameInput}
                placeholder="Enter Name"
                onIonChange={(e) => setNameInput(e.detail.value!)}
                style={{ marginBottom: "20px" }}
              />
              <IonButton expand="block" onClick={handleUpdateName}>
                Update Name
              </IonButton>
              <IonButton
                expand="block"
                color="danger"
                style={{ marginTop: "10px" }}
                onClick={() => setPopoverOpen(false)}
              >
                Cancel
              </IonButton>
            </div>
          </IonContent>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default Grouproles;
