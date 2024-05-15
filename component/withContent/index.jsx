import axios from "axios";
const API_BASE_URL = "http://122.176.75.250:4548/content/get.json";

/**
 * Get the content endpoint based on the resolved URL and the specified endpoint.
 * @param {string} resolvedUrl - The resolved URL of the page.
 * @param {string} endpoint - The specified endpoint (optional).
 * @returns {string} The content endpoint.
 */
const getContentEndpoint = (resolvedUrl, endpoint, query) => {
  const baseEndpoint =
    resolvedUrl.split("?")[0] === "/" && query
      ? "/home"
      : resolvedUrl.split("?")[0];
  return endpoint || baseEndpoint;
};

/**
 * Fetch additional data based on the page template, category, and date.
 * @param {object} data - The response data containing the template information.
 * @param category - The category of the page (optional).
 * @param date - The date of the page (optional).
 * @param {object} options - The additional data options.
 * @returns {Promise<object>} A Promise that resolves to the additional data.
 */
const getAdditionalData = async ({ data }, { category = "", date = "" }) => {
  try {
    const blogRes = axios.get(API.baseUrl);
    console.log(blogRes, "DIVESH");

    return {
      blogsData: blogRes.data.data,
    };
  } catch (error) {
    return { newsData: [], blogsData: [], JobsData: [] };
  }
};

/**
 * Return a redirect response for page not found.
 * @returns {object} The redirect response object.
 */
const pageNotFound = () => ({ notFound: true });
/**
 * Higher-order function that enhances getServerSideProps functionality with page content retrieval.
 * @param {object} options - The options for page content retrieval.
 * @param {string} options.endpoint - The custom endpoint for fetching content (optional).
 * @param {boolean} options.additional - Whether to fetch additional data based on the page (optional).
 * @param {function} getServerSideProps - The original getServerSideProps function (optional).
 * @returns {function} The enhanced getServerSideProps function.
 */
const withPageContent = (options, getServerSideProps) => async (context) => {
  const { resolvedUrl, req, res, query } = context;

  // Cache headers
  res.setHeader(
    "Cache-Control",
    "public, max-age=604800, stale-while-revalidate=3600"
  ); //1 week cache

  // Get the content endpoint
  const ENDPOINT = getContentEndpoint(resolvedUrl, options?.endpoint, query);

  const postData = { alias: ENDPOINT };

  const dataOptions = {
    method: "post",
    url: `${API_BASE_URL}`, // Assuming this is your API endpoint
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: postData, // Stringify the post data
  };
  const postDataGlobal = { alias: "/global" };

  const globalDataOptions = {
    method: "post",
    url: `${API_BASE_URL}`, // Assuming this is your API endpoint
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: postDataGlobal, // Stringify the post data
  };

  try {
    var [response, globalResponse] = await Promise.all([
      axios(dataOptions),
      axios(globalDataOptions),
    ]);
    // console.log(
    //   "<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>",
    //   globalResponse.data.code,
    //   response
    // ); // Handle response data here
  } catch (error) {
    console.error("Error:", error);
  }

  //   axios.get(`${API_BASE_URL}/global`),
  //   Error handler if content fetch fails

  if (response.data.code !== 200 || globalResponse.data.code !== 200) {
    return pageNotFound();
  }

  // Additional API data on specific pages
  let additionalData = options?.additional
    ? await getAdditionalData(response.data, query)
    : null;

  // Handle extended getServerSideProps functionality
  const pageProps = getServerSideProps
    ? (await getServerSideProps(context)).props
    : null;

  if (pageProps?.notFound) {
    return pageNotFound();
  }
  console.log(additionalData, "KRUNAL");
  return {
    props: {
      ...pageProps,
      ...additionalData,
      content: response?.data?.data || {},
      //   seoData: pageProps?.seoData || {},
      globalPageContent: globalResponse.data.data,
    },
  };
};

export default withPageContent;
