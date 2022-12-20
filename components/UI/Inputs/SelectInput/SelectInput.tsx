import React from 'react';
import classes from './SelectInput.module.scss';
import Select from 'react-select'

interface Option {
  value: any,
  label: string
}
export interface SelectInputProps {
  placeholder?: string
  width?: string | number
  height?: string | number
  value?: Option
  options: Option[]
  className?: string
  instanceId: string
  fontStyles?: React.CSSProperties
  borderColor?: string
  borderRadius?: string | number
}

const SelectInput = ({ options, placeholder, className, ...props }: SelectInputProps) => {



  const inputFontCss = {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 13,
    color: "#7B869B",
    ...props.fontStyles
  }

  const borderColor = props.borderColor || "rgba(181, 188, 203, 0.33)";
  const borderRadius = props?.borderRadius || 8;

  return <div className={`${classes.SelectInput} ${className}`}>
    <Select
      instanceId={props.instanceId}
      options={options}
      placeholder={placeholder}
      value={props.value}
      styles={{
        control: (baseStyles, state) => {
          return {
            ...baseStyles,
            borderRadius: borderRadius,
            cursor: 'pointer',
            minHeight: props?.height || 36,
            height: props?.height || 36,
            backgroundColor: "transparent",
            borderColor: borderColor,
            "&:hover": {
              border: `1px solid ${borderColor}`,
              borderColor: borderColor,
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
            width: props?.width || 200,
            height: props?.height || 36,
            minHeight: props?.height || 36
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
