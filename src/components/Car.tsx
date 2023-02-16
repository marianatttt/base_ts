import {FC, ReactNode} from "react";
import {ICar} from "../interfaces";
import {useNavigate} from "react-router-dom";



interface IProps {
    car: ICar,
    children?:ReactNode
}



const Car:FC<IProps> = ({car}) => {
    const {id, price, year, brand} = car;

    const navigate = useNavigate();


 return (
  <div>
      <div>id:{id}</div>
      <div>price:{price}</div>
      <div>year:{year}</div>
      <div>brand:{brand}</div>
      <button onClick={()=>navigate(id.toString(), {state: car})}>details</button>
  </div>
 );
};

export {Car};