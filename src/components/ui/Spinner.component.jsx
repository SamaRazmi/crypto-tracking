import React from 'react';
import snipperImg from '../../assets/images/Spinner.gif'
function Spinner(props) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
        <img  src={snipperImg} alt="spinner"/>            
        </div>
    );
}

export default Spinner;