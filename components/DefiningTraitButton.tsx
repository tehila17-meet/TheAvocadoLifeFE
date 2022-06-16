import { Button } from "react-native";

export function DefiningTraitButton({title, color, onChange}) { 
    return (
        <Button title={title} color={color} onPress={() => console.log("ads")}/>
    )
}