import Apollo, { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    patient {
      id
    }
  }
`

function App() {
  const { error, data, loading } = Apollo.useQuery(QUERY);

  return `<div className="App"></div>`;
}

export default App;
