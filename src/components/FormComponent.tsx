import { InputComponent } from "./InputComponent";
import { useForm } from "react-hook-form";
export const DataComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <div style={{ padding: "20px", border: "20px" }}>
        <p style={{ color: "gray" }}>Please fill the below details.</p>
        <div>
          <InputComponent
            lable={"First Name"}
            placeholder={"Enter first name"}
          ></InputComponent>
        </div>
        <div>
          <InputComponent
            lable={"Last Name"}
            placeholder={"Enter last name"}
          ></InputComponent>
        </div>
        <div style={{ padding: "20px" }}>
          <div style={{ padding: "20px" }}>
            <text style={{ fontFamily: "fantasy" }}>
              Upload your profile below
            </text>
          </div>
          <div style={{ padding: "10px" }}>
            <input type="file"></input>
          </div>
        </div>
        <div style={{ justifyContent: "right" }}>
          <button style={{ marginRight: 10 }} type="submit">
            Create account
          </button>
          <button style={{ paddingLeft: 20 }} type="reset">
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
