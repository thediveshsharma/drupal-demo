import Header from "@/component/header";
import Footer from "@/component/footer";

export default function Layout({ children, pageProps }) {
  console.log(pageProps, "page");
  const headerData =
    pageProps?.globalPageContent?.field_global_flexy_body[0].component?.content;
  const footerData =
    pageProps?.globalPageContent?.field_global_flexy_body[1].component?.content;
  return (
    <>
      <Header content={headerData} />
      {children}
      <Footer content={footerData} />
    </>
  );
}
