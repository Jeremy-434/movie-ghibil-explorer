export default function Searchbar({value, onChange, placeholder}: {value: string, onChange: (value: string) => void, placeholder: string}) {
  return (
    <div>
      <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      />
    </div>
  );
}