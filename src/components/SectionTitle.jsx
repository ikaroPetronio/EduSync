export default function SectionTitle({ children }) {
    return (
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {children}
        </span>
      </h2>
    );
  }