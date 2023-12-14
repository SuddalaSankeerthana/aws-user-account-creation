// import { useForm } from "react-hook-form";
export const InputComponent = ({ lable, placeholder }: any) => {
  return (
    <section>
      <div className="inputItem">
        <div style={{ fontFamily: "fantasy" }}>
          <label>{lable}</label>
        </div>
        <input type="text" placeholder={placeholder}></input>
      </div>
    </section>
  );
};
