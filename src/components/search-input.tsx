import React from 'react';
import useDebounce from '@/hooks/useDebounce'
type Props = {
  setFilterParam: (value: string) => void;
  callSearch: () => void;
};

export const SearchInput: React.FC<Props> = ({ setFilterParam, callSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleClick = () => {
    searchQuery && callSearch()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      callSearch();
    }
  };

  React.useEffect(() => {
    setFilterParam(debouncedSearchQuery)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[debouncedSearchQuery])

  return (
    <div className="rounded flex items-center w-full search-input-color">
      <button className="outline-none focus:outline-none" onClick={handleClick}>
        <svg
          className=" w-5 text-gray-600 h-5 cursor-pointer"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>

      <input
        type="search"
        name=""
        id=""
        value={searchQuery}
        placeholder="search for images"
        x-model="q"
        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
