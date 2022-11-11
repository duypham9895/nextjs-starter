import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/p1">NextJS is a framework</Link>
        </li>
        <li>
          <Link href="/news/p2">React</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
