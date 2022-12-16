import Head from "next/head";
import { useRouter } from "next/router";

export default function Home2(pageProps: any) {
  console.log("pageProps", pageProps);
  const router = useRouter();
  const { dynamic } = router.query;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="dynamic" content={(pageProps.dynamic as string) || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello2 {dynamic}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      dynamic: context.params.dynamic,
    },
  };
}
