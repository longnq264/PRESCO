"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
const LayoutSite = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <div className="container-layout">
        <Header />
        <>{children}</>
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default LayoutSite;
