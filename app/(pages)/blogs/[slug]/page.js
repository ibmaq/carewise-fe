import Image from "next/image";
import { blogsData } from "../data";
import { CommonMedicalBillingMistakes } from "../(components)/CommonMedicalBillingMistakes";
import BlogsGrid from "../(components)/BlogsGrid";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  const getBlogContent = () => {
    switch (slug) {
      case "common-medical-billing-mistakes":
        return <CommonMedicalBillingMistakes slug={slug} />;
      default:
        return <>No content found for this blog!</>;
    }
  };

  return (
    <>
      <div className="blog blog-container mx-auto py-20 lg:pt-36 flex flex-col gap-16 privacy-policy px-4 2xl:px-0">
        {/* Common Section */}
        <Image
          src={`/images/blogs/${slug}/${blog.cover.src}`}
          alt={blog.cover.alt}
          width={720}
          height={400}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-3 md:gap-5">
          <p className="font-extrabold text-sm text-gray-400 whitespace-nowrap md:hidden">
            {blog.date}
          </p>
          <h2 className="w-full !font-extrabold font-montserrat text-8/1.2  2xl:text-10.5/1.2">
            {blog.title}
          </h2>
          <div className="flex">
            <div className="flex gap-2 w-full items-center">
              {blog?.categories?.map((category, catIndex) => (
                <p key={catIndex} className="pill">
                  {category}
                </p>
              ))}
            </div>
            <p className="font-extrabold text-sm text-gray-400 whitespace-nowrap hidden md:block">
              {blog.date}
            </p>
          </div>
        </div>
        {/* Blog content */}
        {getBlogContent()}
      </div>
      <BlogsGrid slug={slug} />
    </>
  );
}
