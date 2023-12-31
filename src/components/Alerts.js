import React from 'react'

export default function Alerts(props) {
    const capitalise = (str) => {
        let lower = str.toLowerCase();
        let firstLetterCapital = lower.charAt(0).toUpperCase() + lower.slice(1);
        return firstLetterCapital;
    }
  return (
    props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalise(props.alert.type)}</strong> {props.alert.msg}
        </div>
      )
  );
}
