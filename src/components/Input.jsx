import PropsType from 'prop-types' ;
const Input = ({
  laval = '',
  name = "",
  type = "text",
  className = "",
  isRequire = false,
  placeholder = " ",
  value = "" ,
  onChange = ""
}) => {
 return (
 <div className='flex flex-col justify-center  w-full'>
  <label htmlFor={name} className='mb-2'> {laval}</label>
  <input value={value}  onChange={onChange}  className='border  p-1' id={name} type={type}  placeholder={placeholder} required={isRequire} />
 </div>
 );
};

Input.propTypes={
  laval: PropsType.string ,
  name: PropsType.string ,
  type : PropsType.string ,
  className : PropsType.string ,
  isRequire : PropsType.bool ,
  placeholder : PropsType.string ,
  value :PropsType.string ,
  onChange : PropsType.func ,
}

export default Input;