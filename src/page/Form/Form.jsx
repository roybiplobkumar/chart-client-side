import PropsTypes from 'prop-types'
import Input from "../../components/Input";
import Button from './../../components/Button';
import { useState } from 'react';

const Form = ({
  isSinginPage = false
}) => {
  const [data, setData] = useState({
    ...(!isSinginPage && {
      fullName: ""
    }),
    email: "",
    password: ""
  });
  console.log({ data })

  return (
    <div className="bg-white shadow-lg h-[500px] w-[600px] flex flex-col justify-center items-center">
      <div className="text-3xl">Welcome {isSinginPage && 'Back'}</div>
      <div className="font-light"> {isSinginPage ? "Singin to get explore" : "singup up now to get started"}</div>
      <form className="p-4 w-1/2 ">
        {!isSinginPage && <Input onChange={(e) => setData({ ...data, fullName: e.target.value })} value={data.fullName} className="l" isRequire={true} laval="Full Name" name="name" placeholder="enter your msg" type="text" />}
        <Input onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} className="l" isRequire={true} laval="Email" name="email" placeholder="enter your email" type="email" />
        <Input onChange={(e) => setData({ ...data, password: e.target.value })} value={data.password} className="l" isRequire={true} laval="Password" name="password" placeholder="enter your password" type="password" />

        <div className=" my-2" >
          <Button type='submit' laval={isSinginPage ? 'Singin' : 'Singup'} className="btn bg-primary hover:bg-slate-500 text-white px-2 py-1 rounded-md capitalize " ></Button>
        </div>
      </form>
      <div>{isSinginPage ? "Don't have account" : "Already have a account"}   <span className="text-primary underline ">{isSinginPage ? "Singup" : "Singin"} </span></div>
    </div>
  );
};

Form.propTypes = {
  isSinginPage: PropsTypes.bool
}
export default Form;