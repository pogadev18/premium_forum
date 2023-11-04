import Link from 'next/link';

import { Button } from '@/components/ui/button';
import LocalSearchBar from '@/components/shared/search/LocalSearchBar';
import Filter from '@/components/shared/Filter';
import HomeFilters from '@/components/home/HomeFilters';
import NoResults from '@/components/shared/NoResults';

import { HomePageFilters } from '@/constants/filters';
import QuestionCard from '@/components/cards/QuestionCard';

const MOCKED_QUESTIONS = [
  {
    _id: '1',
    title: 'How to create a new project?',
    tags: [
      { _id: '1', name: 'React' },
      { _id: '2', name: 'Next.js' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: '/assets/icons/avatar.svg',
    },
    upvotes: 10,
    views: 100,
    answers: [{ _id: '1', author: 'John Doe' }],
    createdAt: new Date('2023-09-01T12:00:00.000Z'),
  },
  {
    _id: '2',
    title: 'How to center a div?',
    tags: [
      { _id: '1', name: 'css' },
      { _id: '2', name: 'Next.js' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: '/assets/icons/avatar.svg',
    },
    upvotes: 5678,
    views: 54230,
    answers: [{ _id: '1', author: 'John Doe' }],
    createdAt: new Date('2021-09-01T12:00:00.000Z'),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] rounded-lg px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {MOCKED_QUESTIONS.length > 0 ? (
          MOCKED_QUESTIONS.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResults
            title="There is no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
