// src/components/Header.tsx
export default function Header() {
  return (
    <header className="w-full flex justify-between items-center z-10 py-4 mb-8 md:mb-12">
      <div className="text-white font-bold text-xl flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 mr-2 text-violet-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
          />
        </svg>
        URL Shortener
      </div>
      
      <a 
        href="/login" 
        className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-all duration-200 text-sm font-medium flex items-center shadow-md hover:shadow-lg"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 mr-1.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
          />
        </svg>
        Sign In
      </a>
    </header>
  );
}