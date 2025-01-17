import Input from "../../components/Input";

const Form = () => {
  return (
    <div className="bg-white shadow-lg h-[500px] w-[600px] flex flex-col justify-center items-center">
      <div className="text-3xl">Welcome</div>
      <div className="font-light">singup up now to get started</div>
       <div className="p-4 ">
       <Input className="l" isRequire="true" laval="Full Name" name="name" placeholder="enter your msg" type="text" />
      <Input className="l" isRequire="true" laval="Email" name="email" placeholder="enter your email" type="email" />
      <Input className="l" isRequire="true" laval="Password" name="password" placeholder="enter your password" type="password" />
       </div>
    </div>
  );
};

export default Form;