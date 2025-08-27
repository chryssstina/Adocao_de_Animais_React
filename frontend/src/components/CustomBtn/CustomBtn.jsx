import { Link } from "react-router-dom";
import './CustomBtn.css';


function CustomBtn({ label, route, className="", icon=""}) {
    // btn é classe padrão do bootstrap
    const baseClass = `btn custom-btn-class ${className}`.trim();


    if (route) {
        return <Link to={route} className={baseClass}>
                    {label} 
                    {icon && <i className={`${icon} custom-icon ms-2`}></i>}
                </Link>;
    } else {
        return <button type="button" className={baseClass}>
                    {label}
                    {icon && <i className={`${icon} custom-icon ms-2`}></i>}
                </button>;
    }

}

export default CustomBtn;