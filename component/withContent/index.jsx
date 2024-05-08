import axios from "axios";
import API from "../../utils/endpoint";
import { STATUS_CODE_200 } from "../../utils/magicNumberFile";
import {
  HOME_TEMPLATE,
  MIGRATE_COUNTRY_TEMPLATE,
} from "../../utils/templateConstants";
import parseHtml from "../helpers/parseHtml";
import exclusions from "../../utils/exclusions";

const API_BASE_URL = `${API.baseUrl}${API.contentBaseUrl}`;

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
  if (![HOME_TEMPLATE, MIGRATE_COUNTRY_TEMPLATE].includes(data.template)) {
    return { newsData: [], blogsData: [], JobsData: [] };
  }

  try {
    const query = `category=${category}&date=${date}&skip=0`;
    const [newsRes, blogRes, jobRes] = await Promise.all([
      axios.get(`${API.baseUrl}${API.newsPageUrl}/?${query}&limit=1`),
      axios.get(`${API.baseUrl}${API.blogPageUrl}/?${query}&limit=2`),
      axios.get(`${API.baseUrl}${API.jobsPageUrl}/?${query}&limit=3`),
    ]);

    return {
      JobsData: jobRes.data.data,
      newsData: newsRes.data.data,
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

  // Check if the resolved URL contains any of the forbidden patterns
  if (exclusions.some((pattern) => resolvedUrl.includes(pattern))) {
    return pageNotFound();
  }

  const isAmp = query.amp === "1"; // Check if the page is AMP (query.amp will be '1' for AMP pages)

  // Cache headers
  res.setHeader(
    "Cache-Control",
    "public, max-age=604800, stale-while-revalidate=3600"
  ); //1 week cache

  // Check if user is a mobile user or not
  const isMobile = Boolean(req?.headers["cloudfront-is-mobile-viewer"]);

  // Get the content endpoint
  const ENDPOINT = getContentEndpoint(resolvedUrl, options?.endpoint, query);

  // Invalid route handler
  const isUpperCase = () => /[A-Z]/.test(ENDPOINT);
  if (isUpperCase()) return pageNotFound();

  // Header, Footer content with page content
  const [response, globalResponse] = await Promise.all([
    axios.get(`${API_BASE_URL}${ENDPOINT}`),
    axios.get(`${API_BASE_URL}/global`),
  ]);
  // Error handler if content fetch fails
  if (
    globalResponse.data.code !== Number(STATUS_CODE_200) ||
    response.data.code !== Number(STATUS_CODE_200)
  ) {
    return pageNotFound();
  }
  // /home shoud redirect to 404 page
  if (ENDPOINT === "/home/") {
    return pageNotFound();
  }

  //blog issue resolved
  if (response.data.data.type === "blog" && !resolvedUrl.includes("/blog/")) {
    return pageNotFound();
  }

  // Additional API data on specific pages
  let additionalData =
    isAmp && options?.additional
      ? await getAdditionalData(response.data, query)
      : null;

  // Handle extended getServerSideProps functionality
  const pageProps = getServerSideProps
    ? (await getServerSideProps(context)).props
    : null;

  if (pageProps?.notFound) {
    return pageNotFound();
  }

  const plainHtml = parseHtml(
    `<div>${response?.data?.data?.field_content_component}</div>`
  );
  const modifiedContent = {
    ...response.data.data,
    field_content_component: plainHtml,
  };

  return {
    props: {
      isMobile,
      ...pageProps,
      ...additionalData,
      content: modifiedContent,
      seoData: pageProps?.seoData || {},
      globalPageContent: globalResponse.data.data,
    },
  };
};

export default withPageContent;
