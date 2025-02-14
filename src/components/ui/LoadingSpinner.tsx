export default function LoadingSpinner() {
  return (
    <div className="inline-flex items-center">
      <div className="w-4 h-4 border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      <span className="ml-2">Loading...</span>
    </div>
  )
} 