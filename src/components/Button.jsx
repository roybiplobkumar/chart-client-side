import PropsTypes from 'prop-types';
const Button = ({
  laval= '' ,
  className = '' ,
  isDisiable = false ,
  type= 'button'
}) => {
 return (
 <div>
  <button disabled={isDisiable} type={type} className={className} >{laval}</button>
 </div>
 );
};

Button.propTypes ={
  laval : PropsTypes.string ,
  className  : PropsTypes.string ,
  isDisiable  : PropsTypes.bool ,
  type  : PropsTypes.string ,
}

export default Button;