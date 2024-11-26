
import { FormikInit, SelectInputField, TextInputField } from "./form";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().min(20),
  test: Yup.string(),
  data: Yup.string(),
  age: Yup.number(),
});

export const SampleForm = () => {
  return (
    <FormikInit
      onSubmit={(values: any) => console.log({ values })}
      initialValues={{ name: "", test: "" }}
      validationSchema={schema}
    >
      <TextInputField name="name" id="name" label="Name" placeholder="Mike Banda" />
      
      <TextInputField name="age" id="age" label="Age" type="number" />
    

        <SelectInputField
          name="data"
          label="Gender"
          selectItems={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
      />
      
      
      
    </FormikInit>
  );
};
//isPlatform
