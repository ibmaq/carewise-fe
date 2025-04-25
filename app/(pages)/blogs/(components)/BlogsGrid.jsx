import Link from "next/link";
import { blogsData } from "../data";
import Image from "next/image";

export default function BlogsGrid({ slug, excludeLastBlog = false }) {
  let blogsToDisplay = blogsData;

  if (slug) {
    blogsToDisplay = blogsToDisplay.filter((blog) => blog.slug !== slug);
  }

  if (excludeLastBlog && blogsToDisplay.length > 0) {
    blogsToDisplay = blogsToDisplay.slice(0, -1);
  }

  if (slug) {
    blogsToDisplay = blogsToDisplay.slice(0, 3);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogsToDisplay.map((blog, blogIndex) => (
        <Link
          key={blogIndex}
          href={blog.link}
          className="flex flex-col gap-5 cursor-pointer group hover:scale-105 hover:drop-shadow-lg transition-all duration-300 ease-in-out"
        >
          <Image
            src={`/images/blogs/${blog.slug}/${blog.cover.src}`}
            alt={blog.cover.alt}
            width={500}
            height={240}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <p className="font-extrabold text-sm text-gray-400">{blog.date}</p>
            <div className="flex gap-4">
              <h4 className="w-full !font-extrabold">{blog.title}</h4>
              <span className="size-6 mt-1 group-hover:rotate-45 transition-transform ease-in-out duration-150">
                <svg
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33301 17L17.333 7M17.333 7H7.33301M17.333 7V17"
                    stroke="#101828"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <p className="text-secondary-text/60 text-base font-normal">
              {blog.desc}
            </p>
          </div>
          <div className="flex gap-2">
            {blog?.categories?.map((category, catIndex) => (
              <p key={catIndex} className="pill">
                {category}
              </p>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
