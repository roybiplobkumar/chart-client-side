import PropsTypes from 'prop-types'
import Input from "../../components/Input";
import Button from './../../components/Button';

const Form = ({
  isSinginPage = true
}) => {
  return (
    <div className="bg-white shadow-lg h-[500px] w-[600px] flex flex-col justify-center items-center">
      <div className="text-3xl">Welcome {isSinginPage && 'Back'}</div>
      <div className="font-light"> {isSinginPage ? "Singin to get explore" : "singup up now to get started"}</div>
      <div className="p-4 w-1/2 ">
        {!isSinginPage && <Input className="l" isRequire="true" laval="Full Name" name="name" placeholder="enter your msg" type="text" />}
        <Input className="l" isRequire="true" laval="Email" name="email" placeholder="enter your email" type="email" />
        <Input className="l" isRequire="true" laval="Password" name="password" placeholder="enter your password" type="password" />
      </div>
      <div className=" my-2" > 
        <Button laval={isSinginPage? 'Singin':'Singup'}className="btn bg-primary hover:bg-slate-500 text-white px-2 py-1 rounded-md capitalize " ></Button>
      </div>
      <div>{isSinginPage? "Don't have account": "Already have a account" }   <span className="text-primary underline ">{isSinginPage? "Singup":"Singin"} </span></div>
    </div>
  );
};

Form.propTypes = {
  isSinginPage: PropsTypes.bool
}
export default Form;