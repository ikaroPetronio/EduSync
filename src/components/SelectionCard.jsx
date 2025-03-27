import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function SelectionCard({
  item,
  selected,
  onClick,
  icon,
  colorClass,
  multiple = false
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-3 px-4 rounded-lg border-2 transition-all duration-150 flex items-center justify-center text-center font-medium ${
        selected
          ? `${colorClass} border-blue-500 scale-[1.02] shadow-sm`
          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {item}
      {multiple && selected && (
        <CheckCircleIcon className="h-5 w-5 ml-2 text-blue-500" />
      )}
    </button>
  );
}