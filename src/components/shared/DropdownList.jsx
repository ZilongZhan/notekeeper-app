import "./DropdownList.css";

export const DropdownList = ({ selectedOption, OPTIONS }) => {
  return (
    <select id="status" className="dropdown-list" defaultValue={selectedOption}>
      {Object.values(OPTIONS).map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
