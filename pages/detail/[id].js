import Detail from "../../Components/Detail";
import portfolio from "../../Data/Portfolio";

export default function DetailPage({ id }) {
  return <Detail id={id} />;
}

export async function getStaticPaths() {
  const paths = portfolio.projects.map((_, i) => ({
    params: { id: String(i) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } };
}
