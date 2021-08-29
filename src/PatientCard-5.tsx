import { gql, useQuery } from "@apollo/client";
import React from "react";
import GraphQL from "./graphql";
import "./PatientCard.css"

export const GET_PATIENT = GraphQL.query<
  {
    patient: {
      id: string;
      firstName: string;
      lastName: string;
      visits: ReadonlyArray<{ id: string; startTime: Date; endTime: Date }>;
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
        id
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

      <h2>Recent visits</h2>
      <ul>
        {data.patient.visits.map((visit) => (
          <li key={visit.id}>
            <span>{visit.startTime.toLocaleDateString()}</span>
            <span>{visit.startTime.toLocaleTimeString()} &raquo; {visit.endTime.toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientCard;
