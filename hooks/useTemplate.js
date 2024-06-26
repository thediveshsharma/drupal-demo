import dynamic from "next/dynamic";
import { useMemo } from "react";
import {
  BLOG_TEMPLATE,
  HOME_TEMPLATE,
  BLOG_LISTING_TEMPLATE,
} from "../utils/templateConstants";

const HomeTemplate = dynamic(() => import("../component/homepage"));
const BlogTemplate = dynamic(() => import("../component/blog"));
const BlogListingTemplate = dynamic(() => import("../pages/bloglisting"));

const returnTemplate = (template) => {
  console.log(template, "templateName");
  switch (template) {
    case HOME_TEMPLATE:
      return HomeTemplate;
    case BLOG_TEMPLATE:
      return BlogTemplate;
    // case BLOG_LISTING_TEMPLATE:
    //   return BlogListingTemplate;
    default:
      return HomeTemplate;
  }
};

const useTemplate = ({ template }) => {
  console.log("template in useTemplate", template);
  const Component = returnTemplate(template);
  const isError = !Component;
  return useMemo(
    () => ({ Component, isError, templateName: template }),
    [template]
  );
};

export default useTemplate;
