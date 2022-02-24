import React, { useState } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import TextInput from "../components/TextInput";
import { ActivityIndicator } from "react-native";
import { numberValidator } from "../helpers/numberValidator";

export default function StartScreen({ navigation }) {
  const [number, setNumber] = useState({ value: "", error: "" });
  const [isLoading, setLoading] = useState(false);

  const getURL = async () => {
    setLoading(true);
    const numberError = numberValidator(number.value);

    if (numberError) {
      setNumber({ ...number, error: numberError });
      setLoading(false);
    } else {
      try {
        // const response = await fetch("http://localhost:5000/consent/" + number.value);
        // const json = await response.text();
        // navigation.navigate("Dashboard", { param: json });
        navigation.navigate("Insights");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Financial Wellbeing</Header>
      <Paragraph>
        Reflect on your habits - learn from the spending patterns, create personalized value-add based on the payment categorization data for users and financial information providers eventually
      </Paragraph>
      <TextInput
        label="Mobile number"
        returnKeyType="next"
        value={number.value}
        onChangeText={(text) => setNumber({ value: text, error: "" })}
        error={!!number.error}
        errorText={number.error}
        keyboardType="number-pad"
      />
      <Button mode="contained" onPress={getURL}>
       Get Onboard
      </Button>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
    </Background>
  );
}
