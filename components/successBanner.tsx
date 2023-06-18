import React from "react";
import { HStack, Banner, Button, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function SuccessBanner() { 
    return (
        <Banner
            illustration={props => (
                <Avatar
                    color="primary"
                    icon={props => <Icon name="check" {...props} />}
                    {...props} />
            )}
            text="Added Entry Succesfully!" buttons={null}      />    )
}