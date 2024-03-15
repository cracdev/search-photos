import React from 'react';
import { SearchInput, ColorSelect, OrientationSelect } from '@/components';
import { toQueryString } from '@/lib/utils';

type Props = {
  isError: boolean;
  setParams: (value: string) => void
};

export const Search: React.FC<Props> = ({ setParams, isError }) => {
  const [orientationFilterParam, setOrientationFilterParam] = React.useState<string | null>(null);
  const [colorFilterParam, setColorFilterParam] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);

  const getImages = () => {
    if (searchQuery) {
      const params = {
        query: searchQuery,
        ...((colorFilterParam && colorFilterParam !=='all') && { color: colorFilterParam }),
        ...((orientationFilterParam && orientationFilterParam !=='all') && { orientation: orientationFilterParam }),
      };
      setParams(toQueryString(params));
    }
  };

  React.useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchQuery])

  return (
    <>
      <div className="box pt-6">
        <div className="box-wrapper">
          <SearchInput setFilterParam={setSearchQuery} callSearch={getImages} />
          <div className="flex justify-start mt-3 gap-4">
            <div className="filter-title">
              <p>Filter By:</p>
            </div>
            <OrientationSelect setFilterParam={setOrientationFilterParam} />
            <ColorSelect setFilterParam={setColorFilterParam} />
          </div>
        </div>
      </div>
      {isError && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Error!!</span> getting images, try
          again. <a href="/"> Click here to reload the page!!</a>
        </div>
      )}
    </>
  );
};

export default Search;
