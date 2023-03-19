import React, {useState} from "react";

const Forms = () => {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value},} = event;
    setValue(value);
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello ", value)
  }
  return (
    <form onSubmit = {onSubmit}>
      <input type="text" placeholder={`username`} value={value}
        onChange={onChange}
      />
      <button>login</button>
    </form>
  );
}

export default Forms;