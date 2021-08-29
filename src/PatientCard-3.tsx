import { gql, useQuery } from "@apollo/client";
import React from "react";
import GraphQL from "./graphql";

const GET_PATIENT = GraphQL.query<
  { patient: { id: string; firstName: string; lastName: string } },
  { patientId: number }
>(gql`
  query ($patientId: Int!) {
    patient(id: $patientId) {
      id
      firstName
      lastName
    }
  }
`);

interface Props {
  id: number;
}

function PatientCard(props: Props) {
  const { data } = useQuery(GET_PATIENT, { variables: { patientId: props.id } });

  if (data === undefined) {
    return "Patient not found";
  }

  return (
    <div className="PatientCard">
      <h1>
        {data.patient.firstname} {data.patient.lastName}
      </h1>
    </div>
  );
}
