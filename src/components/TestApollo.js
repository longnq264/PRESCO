"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import GET_BOOKS from "@/graphql/queries/get-books";

const TestApollo = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
};

export default TestApollo;
