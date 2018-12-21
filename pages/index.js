import Header from "./components/header";
import Head from "next/head";

export default () => (
  <div className="landingBody">
    <Head>
      <title>Black Coffee</title>
      <link rel="stylesheet" type="text/css" href="../static/index.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link rel="stylesheet" type="text/css" href="../static/header.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair Display SC"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <img
      className="dj-logo"
      src="../static/wmLDgPPDA61p6NLO-croppedSAcUf-png"
    />
  </div>
);
