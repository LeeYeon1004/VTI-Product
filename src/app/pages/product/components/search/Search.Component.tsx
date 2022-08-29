import SearchTemplate from './search.template';

function SearchComponent({
  getValue,
  handleSearch,
}: {
  getValue: (data: string) => void;
  handleSearch: () => void;
}) {
  return (
    <div>
      <SearchTemplate handleSearch={handleSearch} getValue={getValue} />
    </div>
  );
}
export default SearchComponent;
