import React from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function PricingTableList() {
  return (
    <Section className="position-relative">
      <Section className="row">
        <Section className="col-lg-4">
          <PricingTable
            title="Standard"
            price="10"
            currency="$"
            jobs=""
            features={[
              "1 Custom Jobs",
              "Unlock All Questions",
              "Unlimited Mock Interviews",
            ]}
            btnText="Purchase Now"
          />

          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Professional"
            price="20"
            currency="$"
            jobs="5"
            features={[
              "5 Custom Jobs",
              "Unlock All Questions",
              "Unlimited Mock Interviews",
            ]}
            btnText="Purchase Now"
          />

          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          <PricingTable
            title="Ultimate"
            price="50"
            currency="$"
            jobs="20"
            features={[
              "20 Custom Jobs",
              "Unlock All Questions",
              "Unlimited Mock Interviews",
            ]}
            btnText="Purchase Now"
          />

          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
