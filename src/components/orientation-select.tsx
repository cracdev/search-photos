type Props = {
    setFilterParam: (value: string) => void;
};

export const OrientationSelect: React.FC<Props> = ({ setFilterParam }) => {
  const handleFilterOnChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFilterParam(event.target.value);
  };

  return (
    <div className="select">
      <select
        name="orientation"
        id="orientation"
        onChange={handleFilterOnChange}
        className="text-sm outline-none focus:outline-none bg-transparent"
      >
        <option value="all">Orientation</option>
        <option value="landscape">Landscape</option>
        <option value="portrait">Portrait</option>
        <option value="squarish">Squarish</option>
      </select>
    </div>
  );
};
