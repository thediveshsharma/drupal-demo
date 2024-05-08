import React, { Fragment } from "react";
import withPageContent from "../component/withContent";
import useTemplate from "../hooks/useTemplate";

export const getServerSideProps = withPageContent({ additional: true });

export default function Template({ content }) {
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
