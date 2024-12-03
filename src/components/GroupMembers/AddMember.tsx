import { IonContent, IonPage } from "@ionic/react";
import { FormikInit,  RadioGroupInput, SelectInputField, TextInputField } from "../form";
import * as Yup from "yup";


const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dob: Yup.date().required(),
  gender: Yup.string().required(),
  nationalId: Yup.string().required(),
  disability: Yup.string().required(),
  nextOfKin: Yup.string().required(),
  nextOfKinPhone: Yup.string().required().matches(/^\d+$/,),
  nextOfKinAddress: Yup.string().required(),
  region: Yup.string().required(),
  constituency: Yup.string().required(),
  village: Yup.string().required(),

  });

  
  
const AddMember= () => {
    return (

      <IonPage>
<IonContent>
    <FormikInit
    onSubmit={(values: any) => console.log({ values })}
     initialValues={{ firstname: "", lastname: "",dob:"", gender:"",nationalId:"",disability:"",nextofkin:"",nextofkinAddress:"",region:"",constituency:"",village:"" }}
    validationSchema={schema}>

    <TextInputField name="firstname" id="firstname" label="First Name" placeholder="" />
    <TextInputField name="lastname" id="lastname" label="last Name" placeholder="" />
    <TextInputField name="dob" id="dob" label="Date Of Birth" placeholder="" />
    <TextInputField name="nationalId" id="nationalId"  label="National ID" placeholder=""/>
    <TextInputField name="nextofkin" id="nextofkin" label="Next Of Kin" placeholder=""/> 
    <TextInputField name="nextofkinPhone" id="nextofkinPhone" label="Next Of Kin Phone" placeholder=""/>
    <TextInputField name="nextofkinAddress" id="nextofkinAddress" label="Next Of Kin Address" placeholder=""/>
    <TextInputField name="constituency" id="constituency" label="Constituency" placeholder=""/>
    <TextInputField name="village" id="village" label="village" placeholder=""/>


    <SelectInputField
          name="data"
          label="Region"
          selectItems={[
            { label: "North", value: "north" },
            { label: "Central", value: "central" },
            {label:"Southern", value:"southern"}
          ]}/>

    <RadioGroupInput
          name="data"
          label="Disability"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}/>
   

    <RadioGroupInput
          name="gender"
          label="Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}/>
   
   
    
      
      



    </FormikInit>
</IonContent>


      </IonPage>
   
    )
  }
  
  export default AddMember;