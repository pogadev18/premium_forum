import Image from 'next/image';
import Link from 'next/link';

const RightSidebar = () => {
  return (
    <>
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          <Link
            className="flex cursor-pointer items-center justify-between gap-7"
            href="/questions/1"
          >
            <p className="body-medium text-dark500_light700">
              Best practices for data fetching in a Next.js application with
              Server-Side Rendering (SSR)?
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="Arrow right Icon"
            />
          </Link>
          <Link
            className="flex cursor-pointer items-center justify-between gap-7"
            href="/questions/1"
          >
            <p className="body-medium text-dark500_light700">
              Can I get this course for free?
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="Arrow right Icon"
            />
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          <Link
            href="/tags/1"
            className="flex items-center justify-between gap-2"
          >
            <div className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
              nextjs
            </div>
            <p className="small-medium text-dark500_light700">13</p>
          </Link>
          <Link
            href="/tags/1"
            className="flex items-center justify-between gap-2"
          >
            <div className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
              reactjs
            </div>
            <p className="small-medium text-dark500_light700">47</p>
          </Link>
          <Link
            href="/tags/1"
            className="flex items-center justify-between gap-2"
          >
            <div className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
              typescript
            </div>
            <p className="small-medium text-dark500_light700">63</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
