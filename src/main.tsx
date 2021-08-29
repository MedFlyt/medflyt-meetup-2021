import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { GET_PATIENT } from "./PatientCard";

const mocks: ReadonlyArray<MockedResponse> = [
  {
    request: { query: GET_PATIENT, variables: { patientId: 1 } },
    result: {
      data: {
        patient: {
          id: 1,
          firstName: "Jon",
          lastName: "Doe",
          visits: [
            {
              id: 1,
              startTime: new Date("2021-08-30T14:00:00.000Z"),
              endTime: new Date("2021-08-30T20:25:00.000Z")
            },
            {
              id: 2,
              startTime: new Date("2021-08-29T16:30:00.000Z"),
              endTime: new Date("2021-08-29T22:45:00.000Z")
            },
            {
              id: 3,
              startTime: new Date("2021-08-28T13:00:00.000Z"),
              endTime: new Date("2021-08-28T19:00:00.000Z")
            },
            {
              id: 4,
              startTime: new Date("2021-08-27T06:00:00.000Z"),
              endTime: new Date("2021-08-27T12:50:00.000Z")
            }
          ]
        }
      }
    }
  }
];

ReactDOM.render(
  <React.StrictMode>
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
