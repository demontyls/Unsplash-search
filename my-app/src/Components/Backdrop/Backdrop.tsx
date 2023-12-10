import React, {useEffect} from 'react';
import './Backdrop.scss';
import { useModal } from "../../Store/Store";
import Modal from "../Modal/Modal";

const Backdrop = () => {
  const isShow = useModal( value => value.isShow);
  const setIsShow = useModal( value => value.setIsShow);
  
  return (
    <>
      {isShow &&
        <div className="backdrop" onClick={ ()=> setIsShow(false)}>
          <Modal/>
          <button className="btn" onClick={()=> setIsShow(false)}>
              <i className="fa-close" style={{color: "white"}}/>
          </button>
        </div>
      }
    </>
  );
};

export default Backdrop;