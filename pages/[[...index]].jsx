import React, { Fragment, useEffect } from "react";
import withPageContent from "../component/withContent";
import useTemplate from "../hooks/useTemplate";
import axios from "axios";

export const getServerSideProps = withPageContent({ additional: true });

export default function Template({ content }) {
  console.log(content, "content");
  const { Component, isError, templateName } = useTemplate(content);

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <Fragment>
      <Component />
    </Fragment>
  );
}
