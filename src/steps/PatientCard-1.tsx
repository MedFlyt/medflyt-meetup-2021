import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_PATIENT = gql`
  query ($patientId: Int!) {
    patient(id: $patientId) {
      id
      firstName
      lastName
    }
  }
`;

interface Props {
  id: number;
}

function PatientCard(props: Props) {
  const { data } = useQuery(GET_PATIENT, { variables: { patientId: props.id } });

  return (
    <div className="PatientCard">
      <h1>
        {data.patient.firstname} {data.patient.lastName}
      </h1>
    </div>
  );
}
