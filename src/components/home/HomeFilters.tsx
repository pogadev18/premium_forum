'use client';

import { HomePageFilters } from '@/constants/filters';
import { Button } from '../ui/button';

const HomeFilters = () => {
  const active = '';

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? 'background-light800_dark400 text-primary-500'
              : 'background-light800_dark400 text-light-500'
          }`}
          key={filter.value}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
