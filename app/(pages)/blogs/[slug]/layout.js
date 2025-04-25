import { blogsData } from "../data";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogsData.find((b) => b.link.includes(slug));

  if (blog) {
    return {
      title: blog.metatitle,
      description: blog.metadesc,
    };
  }
  return {
    title: "Blog - Carewise",
    description: "Explore our latest blogs on various topics.",
  };
}

export default function RootLayout({ children }) {
  return <>{children}</>;
}
