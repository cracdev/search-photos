type Props = {
  setFilterParam: (value: string) => void;
};

export const ColorSelect: React.FC<Props> = ({ setFilterParam }) => {
  const handleFilterOnChange = (event: React.ChangeEvent<HTMLSelectElement>,) => {
    setFilterParam(event.target.value);
  };

  return (
    <div className="select">
      <select
        name="color"
        id="color"
        onChange={handleFilterOnChange}
        className="text-sm outline-none focus:outline-none bg-transparent"
      >
        <option value="all">Color</option>
        <option value="black_and_white">Black & White</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="purple">Purple</option>
        <option value="magenta">Magenta</option>
        <option value="green">Green</option>
        <option value="teal">Teal</option>,<option value="blue">Blue</option>
      </select>
    </div>
  );
};
