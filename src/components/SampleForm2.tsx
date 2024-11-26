import { FormikInit, SelectInputField, TextInputField } from "./form";
import * as Yup from "yup";

const schema = Yup.object().shape({
    name: Yup.string().min(20),
    age: Yup.string(),
    district: Yup.string()


  });
  
const SampleForm2 = () => {
    return (
     <FormikInit
    onSubmit={(values: any) => console.log({ values })}
     initialValues={{ name: "", age: "" }}
    validationSchema={schema}>

    <TextInputField name="name" id="name" label="Name" placeholder="Mike Banda" />
    <TextInputField name="age" id="age" label="age" placeholder="18 above" />
    <TextInputField name="District" id="district" label="District" placeholder="Lilongwe" />
    <TextInputField name="Phone No" id="Phone No" label="Phone No" placeholder="+265 **********" />
   
   
    
      
      



    </FormikInit>
    )
  }
  
  export default SampleForm2