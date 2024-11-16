import { Navbar, Footer, Blogs } from "./components";
import useFetch from "./hooks/useFetch";
export default function App() {
  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;
  return (
    <>
      <Navbar />
      <Blogs blogs={data ? data : ""} />
      <Footer />
    </>
  );
}
