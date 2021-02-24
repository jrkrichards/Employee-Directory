import React from "react";

function SortButton(props) {
    return (
        <div className='row justify-content-md-center'>
            <div className="dropdown mx-1">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                    Sort By
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={() => props.sort()}><a className="dropdown-item">Age</a></li>
                </ul>
            </div>
            <div className="dropdown mx-1">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                    Filter By
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={() => props.filterMale()}><a className="dropdown-item">Male</a></li>
                    <li onClick={() => props.filterFemale()}><a className="dropdown-item">Female</a></li>
                </ul>
            </div>
        </div>
    );
}
  
  export default SortButton;