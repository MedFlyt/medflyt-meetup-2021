import { DocumentNode, TypedDocumentNode } from "@apollo/client";

const GraphQL = {
  query<Res, Args>(gql: DocumentNode): TypedDocumentNode<Res, Args> {
    return gql;
  }
};

export default GraphQL;