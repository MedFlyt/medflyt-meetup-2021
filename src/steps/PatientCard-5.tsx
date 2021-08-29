import { gql, useQuery } from "@apollo/client";
import React from "react";
import GraphQL from "./graphql";

const GET_PATIENT = GraphQL.query<
  {
    patient: {
      id: string;
      firstName: string;
      lastName: string;
      visits: ReadonlyArray<{ startTime: Date; endTime: Date }>;
    };
  },
  { patientId: number }
>(gql`
  query ($patientId: Int!) {
    patient(id: $patientId) {
      id
      firstName
      lastName
      visits {
        startTime
        endTime
      }
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
        {data.patient.firstName} {data.patient.lastName}
      </h1>
      <h2>Visits</h2>
      {data.patient.visits.map((visit) => {
        return `${visit.startTime.toDateString()} - ${visit.endTime.toDateString()}`;
      })}
    </div>
  );
}
