import SearchTemplate from './search.template';

function SearchComponent({
  getValue,
  handleSearch,
  handleAction,
}: {
  getValue: (data: string) => void;
  handleSearch: () => void;
  handleAction: () => void;
}) {
  return (
    <div>
      <SearchTemplate
        handleAction={handleAction}
        handleSearch={handleSearch}
        getValue={getValue}
      />
    </div>
  );
}
export default SearchComponent;
