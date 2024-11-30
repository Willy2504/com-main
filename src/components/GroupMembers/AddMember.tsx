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
  IonButton,
  IonSelect,
  IonSelectOption,
  IonButtons,
  IonBackButton,
  IonAvatar,
  IonText,
} from "@ionic/react";

const AddMember: React.FC = () => {
  // State hooks for the form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [disability, setDisability] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [nextOfKinPhone, setNextOfKinPhone] = useState("");
  const [nextOfKinAddress, setNextOfKinAddress] = useState("");
  const [region, setRegion] = useState("");
  const [constituency, setConstituency] = useState("");
  const [village, setVillage] = useState("");

  // Handle form save
  const handleSave = () => {
    console.log("New Member Details:", {
      firstName,
      lastName,
      dob,
      gender,
      nationalId,
      disability,
      nextOfKin,
      nextOfKinPhone,
      nextOfKinAddress,
      region,
      constituency,
      village,
    });
    // You can save the member details here (e.g., to a database or state)
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar style={{ backgroundColor: "#4CAF50" }}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/group-members" />
          </IonButtons>
          <IonTitle>Add Member</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding" style={{ backgroundColor: "#f4f7fa" }}>
        <IonText>
          <h2 style={{ color: "#4CAF50", textAlign: "center" }}>Add New Member</h2>
        </IonText>

        {/* First Name */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>First Name</IonLabel>
          <IonInput
            value={firstName}
            placeholder="Enter first name"
            onIonChange={(e) => setFirstName(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Last Name */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Last Name</IonLabel>
          <IonInput
            value={lastName}
            placeholder="Enter last name"
            onIonChange={(e) => setLastName(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Date of Birth */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Date of Birth</IonLabel>
          <IonInput
            type="date"
            value={dob}
            onIonChange={(e) => setDob(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Gender */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Gender</IonLabel>
          <IonSelect
            value={gender}
            onIonChange={(e) => setGender(e.detail.value)}
            placeholder="Select Gender"
            style={{ borderColor: "#4CAF50" }}
          >
            <IonSelectOption value="male">Male</IonSelectOption>
            <IonSelectOption value="female">Female</IonSelectOption>
            <IonSelectOption value="other">Other</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* National ID */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>National ID</IonLabel>
          <IonInput
            value={nationalId}
            placeholder="Enter National ID"
            onIonChange={(e) => setNationalId(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Disability */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Disability</IonLabel>
          <IonSelect
            value={disability}
            onIonChange={(e) => setDisability(e.detail.value)}
            placeholder="Select Disability Status"
            style={{ borderColor: "#4CAF50" }}
          >
            <IonSelectOption value="yes">Yes</IonSelectOption>
            <IonSelectOption value="no">No</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Next of Kin */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Next of Kin</IonLabel>
          <IonInput
            value={nextOfKin}
            placeholder="Enter next of kin name"
            onIonChange={(e) => setNextOfKin(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Next of Kin Phone */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Next of Kin Phone Number</IonLabel>
          <IonInput
            value={nextOfKinPhone}
            placeholder="Enter next of kin phone number"
            onIonChange={(e) => setNextOfKinPhone(e.detail.value!)}
            type="tel"
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Next of Kin Address */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Next of Kin Address</IonLabel>
          <IonInput
            value={nextOfKinAddress}
            placeholder="Enter next of kin address"
            onIonChange={(e) => setNextOfKinAddress(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Region */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Region</IonLabel>
          <IonSelect
            value={region}
            onIonChange={(e) => setRegion(e.detail.value)}
            placeholder="Select Region"
            style={{ borderColor: "#4CAF50" }}
          >
            <IonSelectOption value="northern">Northern</IonSelectOption>
            <IonSelectOption value="southern">Southern</IonSelectOption>
            <IonSelectOption value="central">Central</IonSelectOption>
          </IonSelect>
        </IonItem>

        {/* Constituency */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Constituency</IonLabel>
          <IonInput
            value={constituency}
            placeholder="Enter constituency"
            onIonChange={(e) => setConstituency(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Village */}
        <IonItem style={{ marginBottom: "10px", backgroundColor: "#ffffff" }}>
          <IonLabel position="stacked" style={{ color: "#4CAF50" }}>Village</IonLabel>
          <IonInput
            value={village}
            placeholder="Enter village"
            onIonChange={(e) => setVillage(e.detail.value!)}
            style={{ borderColor: "#4CAF50" }}
          />
        </IonItem>

        {/* Save Button */}
        <IonButton
          expand="block"
          color="success"
          onClick={handleSave}
          style={{
            color: "#fff", // Ensure text is white
          }}
        >
          Save Member
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddMember;
