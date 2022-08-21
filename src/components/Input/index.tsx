import React from "react";
import { TextInput } from "react-native";
import { InputProps } from "../../models";
import { maskPhone, maskCpf } from "../../utils/masks";

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
    function handleChange(text: string) {
        if (mask === "cpf") {
        const value = maskCpf(text);
        inputMaskChange(value);
        }
        if (mask === "phone") {
        const value = maskPhone(text);
        inputMaskChange(value);
        }
    }
    return (
        <>
          <TextInput
            onChangeText={(text: string) => handleChange(text)}
            {...rest}
          />
        </> 
      );
    };
export default Input;