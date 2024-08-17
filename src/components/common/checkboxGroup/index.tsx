import React, { ReactNode, useState } from "react";

interface CheckboxGroupProps {
    children: ReactNode;
    onChange: (checkedValues: string[]) => void;
  }
  
  interface CheckboxProps {
    value: string;
    checked?: boolean;
    onChange?: (value: string, checked: boolean) => void;
  }
  
  export const Checkbox: React.FC<CheckboxProps> = ({ value, checked = false, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(value, e.target.checked);
      }
    };
  
    return (
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {value}
      </label>
    );
  };
  
  export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ children, onChange }) => {
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
  
    const handleCheckboxChange = (value: string, checked: boolean) => {
      setCheckedValues((prevCheckedValues) => {
        const newCheckedValues = checked
          ? [...prevCheckedValues, value]
          : prevCheckedValues.filter((v) => v !== value);
  
        onChange(newCheckedValues);
        return newCheckedValues;
      });
    };
  
    const clonedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement<CheckboxProps>(child) && child.type === Checkbox) {
        return React.cloneElement(child, {
          onChange: handleCheckboxChange,
          checked: checkedValues.includes(child.props.value),
        });
      }
      return child;
    });
  
    return <div>{clonedChildren}</div>;
  };
  
  // Example usage
  const App: React.FC = () => {
    const handleGroupChange = (checkedValues: string[]) => {
      console.log('Checked values:', checkedValues);
    };
  
    return (
      <CheckboxGroup onChange={handleGroupChange}>
        <Checkbox value="Option 1" />
        <Checkbox value="Option 2" />
        <Checkbox value="Option 3" />
      </CheckboxGroup>
    );
  };
  
  export default App;