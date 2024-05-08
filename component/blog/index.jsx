import Contact from "@/component/contact";
import React from "react";

function Page({ content }) {
  console.log(content, "blogpage");
  return <Contact content={content} />;
}

export default Page;
