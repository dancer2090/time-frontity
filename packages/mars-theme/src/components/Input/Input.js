import React, { useRef, useState, useEffect } from 'react';
import {
  Field,
  TextArea,
  ErrorMessage,
} from './styles';

const Input = (props) => {
  const {
    type = 'text',
    textarea = false,
    placeholder,
    value,
    error,
    className,
    onChange,
  } = props;
  const textareaRef = useRef(null);
  const [heightArea, setHeightArea] = useState('49px');

  useEffect(() => {
    if (textareaRef.current) {
      const heightTextArea = textareaRef.current.offsetHeight;

      setHeightArea(heightTextArea);
    }
  }, []);

  const onChangeTextArea = (e) => {
    onChange(e);
    setHeightArea('auto');
    setHeightArea(`${e.target.scrollHeight}px`);
  };

  return (
    <>
      {
        textarea
          ? (
            <TextArea
              placeholder={placeholder}
              value={value}
              className={className}
              error={error}
              ref={textareaRef}
              style={{ height: heightArea }}
              {...props}
              onChange={(e) => onChangeTextArea(e)}
            />
          )
          : (
            <Field
              type={type}
              placeholder={placeholder}
              value={value}
              className={className}
              error={error}
              onChange={(e) => onChange(e)}
              {...props}
            />
          )
      }
      {
        error && <ErrorMessage>{ error }</ErrorMessage>
      }
    </>
  );
};

export default Input;
