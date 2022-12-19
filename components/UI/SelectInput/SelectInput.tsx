import React from 'react';
import classes from './SelectInput.module.scss';
import Select from 'react-select'

interface Option {
  value: any,
  label: string
}
export interface SelectInputProps {
  placeholder?: ""
  value?: Option
  options: Option[]
  className?: string
  instanceId: string
}

const SelectInput = ({ options, placeholder, className, ...props }: SelectInputProps) => {



  const inputFontCss = {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 13,
    // lineHeight: 16,
    color: "#7B869B"
  }


  return <div  className={`${classes.SelectInput} ${className}`}>
    <Select
      instanceId={props.instanceId}
      // defaultValue={{
      // value: "Популярные"
      // }}
      // defaultValue={{
      // value: "Популярные"
      // }}
      options={options}
      placeholder={placeholder}
      // value={{
      //   value: "Популярные"
      // }}
      value={props.value}
      styles={{
        control: (baseStyles, state) => {
          // debugger
          return {
            ...baseStyles,
            borderRadius: 8,
            cursor: 'pointer',
            minHeight: 36,
            height: 36,
            backgroundColor: "transparent",
            borderColor: "rgba(181, 188, 203, 0.33)",
            "&:hover": {
              border: "1px solid rgba(181, 188, 203, 0.33)",
              borderColor: "rgba(181, 188, 203, 0.33)",
              boxShadow: "unset"
            }
          }
        },
        indicatorSeparator: (baseStyles, state) => {
          return {
            ...baseStyles,
            border: 'none',
            backgroundColor: "transparent"
          }
        },
        container: (baseStyles, state) => {
          return {
            ...baseStyles,
            width: 200,
            height: 36,
            minHeight: 36
          }
        },
        singleValue: (baseStyles, state) => {
          return {
            ...baseStyles,
            ...inputFontCss
          }
        },
        placeholder: (baseStyles, state) => {
          return {
            ...baseStyles,
            ...inputFontCss
          }
        },
        valueContainer: (baseStyles, state) => {
          return {
            ...baseStyles,
            paddingLeft: 16
          }
        },
        dropdownIndicator: base => ({
          ...base,
          color: "#1D1D1B" // Custom colour
        })
      }} />
  </div>;
};
export default SelectInput;
