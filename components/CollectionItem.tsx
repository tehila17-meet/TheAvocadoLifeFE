import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import {
    CENTER,
    BOX,
    TEXT_LABEL,
    BG_COLOR,
    HIGHLIGHT_BG_COLOR,
} from "../styles/styles";

export function CollectionItem({ label, iconName, iconColor, isActive, setActive }) {
    return (
        <TouchableOpacity
            style={[
                styles.box,
                {
                    backgroundColor: isActive ? HIGHLIGHT_BG_COLOR : BG_COLOR,
                },
            ]}
            onPress={setActive}
        >
            <FontAwesome5 name={iconName} size={50} color={iconColor} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        ...CENTER,
        ...BOX,
        marginHorizontal: 10,
        width: wp('25%'),
        height: hp('10%'),
    },
    label: {
        ...TEXT_LABEL,
        marginTop: 10,
    },
});