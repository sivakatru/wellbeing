import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Button from "../components/Button";
import { ActivityIndicator, View, Text, ScrollView } from "react-native";


export default function Complete({ navigation }) {
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      fetchData();
    }, 20000);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("<URL_OF_BACKEND_APP>/get-data/");
      let json = await response.json();
      json = json["Payload"][0]["data"][0]["decryptedFI"];
      let transactions = json["account"]["transactions"]["transaction"];
      let total_amount = 0;
      let num_debit = 0;
      let num_credit = 0;
      transactions.forEach((element) => {
        if (element["type"] === "DEBIT") {
          num_debit += 1;
          total_amount += +element["amount"];
        }
        if (element["type"] === "CREDIT") {
          num_credit += 1;
          total_amount += +element["amount"];
        }
      });
      const pieData = [
        { value: num_debit, color: "#7928EB", text: "Debit" },
        { value: num_credit, color: "#560CCE", text: "Credit" },
      ];

      setData({
        name: json["account"]["profile"]["holders"]["holder"][0]["name"],
        account: json["account"]["maskedAccNumber"],
        pan: json["account"]["profile"]["holders"]["holder"][0]["pan"],
        balance: json["account"]["summary"]["currentBalance"],
        total_amount: total_amount,
        pie_data: pieData,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <ScrollView style={{ flex: 1 }}>
        {isLoading ? (
          <>
            <Header>Consent successfully approved</Header>
            <Paragraph>
              Please wait while we fetch your financial data.
            </Paragraph>
            <ActivityIndicator size="large" color="#0000ff" />
          </>
        ) : (
          <>
            <Header>Insights from your data</Header>
            <View
              style={{
                height: 2,
                backgroundColor: "#E538C8",
                alignSelf: "stretch",
                marginBottom: 10,
              }}
            />
            <Paragraph
              style={{
                marginBottom: 10,
                textAlign: "left",
              }}
            >
              Name:{" "}
              <Text style={{ color: "#560CCE", fontWeight: "bold" }}>
                {data["name"]}
              </Text>
            </Paragraph>
            <Paragraph
              style={{
                marginBottom: 10,
                textAlign: "left",
              }}
            >
              Acc. Number:{" "}
              <Text style={{ color: "#560CCE", fontWeight: "bold" }}>
                {data["account"]}
              </Text>
            </Paragraph>
            <Paragraph
              style={{
                marginBottom: 10,
                textAlign: "left",
              }}
            >
              PAN:{" "}
              <Text style={{ color: "#560CCE", fontWeight: "bold" }}>
                {data["pan"]}
              </Text>
            </Paragraph>

            <Paragraph
              style={{
                marginBottom: 10,
                textAlign: "left",
              }}
            >
              Balance:{" "}
              <Text style={{ color: "#560CCE", fontWeight: "bold" }}>
                ₹{data["balance"]}
              </Text>
            </Paragraph>

            <View
              style={{
                height: 2,
                backgroundColor: "#E538C8",
                alignSelf: "stretch",
                marginBottom: 10,
              }}
            />
            <Paragraph style={{ fontWeight: "bold", marginBottom: 10 }}>
              Jan, 2021 to Jun, 2021 spending charts
            </Paragraph>
            <Paragraph style={{ fontWeight: "bold" }}>
              Total spendings: ₹{data["total_amount"].toFixed(1)}
            </Paragraph>

            <Button
              mode="outlined"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "StartScreen" }],
                })
              }
            >
              Go home
            </Button>
          </>
        )}
      </ScrollView>
    </Background>
  );
}
