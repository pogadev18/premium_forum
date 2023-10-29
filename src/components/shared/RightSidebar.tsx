import Image from 'next/image';
import Link from 'next/link';
import Tag from './Tag';

const MOCKED_TAGS = [
  { _id: '1', name: 'javascript', totalQuestions: 13 },
  { _id: '2', name: 'typescript', totalQuestions: 32 },
  { _id: '3', name: 'nextjs', totalQuestions: 41 },
  { _id: '4', name: 'sql', totalQuestions: 51 },
];

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
              className="invert-colors"
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
              className="invert-colors"
            />
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {MOCKED_TAGS.map((tag) => (
            <Tag
              showCount
              key={tag._id}
              id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
