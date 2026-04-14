// components/DateRangePicker.jsx
export default function DateRangePicker({ startDate, endDate, onDateChange }) {
  return (
    <div className="date-range-picker">
      <label>
        De:
        <input
          type="date"
          value={startDate}
          onChange={(e) => onDateChange(e.target.value, endDate)}
        />
      </label>
      <label>
        Até:
        <input
          type="date"
          value={endDate}
          onChange={(e) => onDateChange(startDate, e.target.value)}
        />
      </label>
    </div>
  )
}