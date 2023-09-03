import { ReactComponent as CheckSVG} from "./check.svg";
import { ReactComponent as DeleteSVG} from "./delete.svg";
import React from "react";
import './TodoIcon.css'

const iconTypes = {
  'completed': (color)=> (<CheckSVG className="IconSVG" fill={color}/>),
  'delete': (color)=> (<DeleteSVG className="IconSVG" fill={color}/>)
};

function TodoIcon({ type, color, checkOK_del }) {
  return(
    <>
      <span className={`IconSVG ${type}`} onClick={checkOK_del}>
        {iconTypes[type](color)}
      </span>
    </>
  )
}

export { TodoIcon };