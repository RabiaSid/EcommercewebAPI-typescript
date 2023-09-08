import { ReactNode } from "react";
import { Layout } from "antd";
import AppHeader from "../component/header";
import AppFooter from "../component/footer";
// import { FooterSectionImage } from "../assets";
// import BackToTop from "../components/back-to-top/index";

const { Header, Footer, Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  return <>
      <Layout style={{}}>
        <Header
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            height:"auto",
            // background:'#ffffff'
            background: "var(--transparency-quantinery, rgba(119, 83, 223, 0.15))",
          }}
          className="position-fixed fixed-top"
        >
          <AppHeader />
        </Header>
        
        <Content
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "auto",
            marginTop:"80px",
            background:'transparent'
          }}
        >
          {/* <PagesMenu /> */}
          {children}
        </Content>
        {/* <BackToTop /> */}
        <Footer
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            // background: `url(${FooterSectionImage})`,
            backgroundAttachment: " fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <AppFooter />
        </Footer>
      </Layout>
    </>
}
