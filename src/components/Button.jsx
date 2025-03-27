export default function Button({ children, onClick, className = '' }) {
    return (
      <button
        onClick={onClick}
        className={`relative px-6 py-3 font-medium rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
          className || 'bg-blue-600 text-white hover:bg-blue-700'
        } hover:shadow-md hover:translate-y-[-2px] active:translate-y-0 active:shadow-none`}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
      </button>
    );
  }