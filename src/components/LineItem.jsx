/* eslint-disable react/prop-types */
import {FaTrashAlt} from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item">
                <input
                    type="checkbox"
                    checked={item.checked}
                    // onClick={()=>handleCheck(item.id)}
                    onChange={()=>handleCheck(item.id)}
                />
                <label
                    onDoubleClick={()=>handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt
                    className="delete-btn"
                    role="button"
                    tabIndex="0"
                    onClick={()=>handleDelete(item.id)}
                    aria-label={`Delete ${item.item}`}
                />
            </li>
  )
}

export default LineItem