export const Hero = () => {
  return (
    <div className="bg-hero-blogs relative overflow-hidden px-4 2xl:px-0">
      <div className="container mx-auto  h-screen max-h-80 md:max-h-hero-xl flex justify-center items-center pt-16 relative">
        <div className="flex flex-col gap-12 items-center md:px-8 w-full max-w-946">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-primary-text font-extrabold text-10.5/120 md:text-16/120 -tracking-2.6 text-center relative">
              Blogs & Updates
            </h1>
            <p className="text-secondary-text/60 text-center font-normal text-xl -tracking-1.2 px-5 md:px-0">
              Explore expert tips, industry news, and helpful resources to keep
              your practice ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
