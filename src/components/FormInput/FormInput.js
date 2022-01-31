import React, { useState } from 'react';
import './formInput.css'

export function FormInput({ label, errorMessage, ...rest }) {

  const [canShowMessage, setCanShowMessage] = useState(false);

  const handleFocus = (e) => {
    setCanShowMessage(true)
  }

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...rest}
        onBlur={handleFocus}
        canShowError={canShowMessage.toString()}
        onFocus={() => rest.name === "confirmPassword" && setCanShowMessage(true)} />
      <span>{errorMessage}</span>
    </div>
  )
}
