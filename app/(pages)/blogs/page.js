import Image from "next/image";
import { blogsData } from "./data";
import { rightNEArrowIcon } from "@/app/components/UI/icons";
import Link from "next/link";

export default function Blogs() {
  // Get the last blog in the array
  const featuredBlog = blogsData?.length
    ? blogsData[blogsData.length - 1]
    : null;

  return (
    <section className="blogs">
      <div className="header bg-primary-blue flex justify-center md:items-center flex-col gap-5 text-white pb-5 px-4">
        <p className="text-white/70 text-base font-bold">BLOGS</p>
        <h3 className="font-montserrat text-10.5 md:text-20.5 leading-1.2 font-medium -tracking-2">
          Carewise Resource Library
        </h3>
        <p className="text-xl/1.4">
          Explore expert tips, industry news, and helpful resources to keep your
          practice ahead.
        </p>
      </div>

      {/* Featured (last) blog */}
      {featuredBlog && (
        <Link
          href={featuredBlog.link}
          className="c-container-px flex flex-col gap-5 -mt-20 pb-20"
        >
          <Image
            src={`/images/blogs/${featuredBlog.slug}/${featuredBlog.cover.src}`}
            alt={featuredBlog.cover.alt}
            width={1216}
            height={646}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm font-extrabold">
              {featuredBlog.date}
            </p>
            <div className="flex w-full justify-between items-center">
              <p className="text-c-text-3 text-2xl/1.2 font-semibold font-montserrat">
                {featuredBlog.title}
              </p>
              <span>{rightNEArrowIcon}</span>
            </div>
            <p className="text-c-text-4 text-abse">{featuredBlog.desc}</p>
          </div>
          <div className="flex gap-2">
            {featuredBlog?.categories?.map((category, catIndex) => (
              <p key={catIndex} className="pill">
                {category}
              </p>
            ))}
          </div>
        </Link>
      )}

      {/* <div className="c-container-px flex flex-col gap-8 pb-20">
        <p className="font-montserrat text-2xl/1.2">All blog posts:</p>
        {blogsData?.length >= 2 ? (
          <BlogsGrid excludeLastBlog={true} />
        ) : (
          <div className="flex flex-col gap-3 items-center">
            <Image
              src={"/images/hourglass.png"}
              alt="hourglass-vector-image"
              width={58}
              height={58}
            />
            <p className="font-montserrat text-8/normal font-semibold">
              More Blogs coming soon!
            </p>
          </div>
        )}
      </div> */}
    </section>
  );
}
