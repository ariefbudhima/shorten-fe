// src/components/URLShortenerForm.tsx
import { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";

export default function URLShortenerForm() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Backend API endpoint
  const API_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_API_URL + "/shorten";

  const isValidUrl = (urlString: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return pattern.test(urlString);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    // Validasi URL
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL (e.g., example.com or https://example.com)");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await axios.post(API_ENDPOINT, { originalUrl: url }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      
      setShortenedUrl(response.data.shortUrl);
    } catch (err) {
      console.error("Failed to shorten URL:", err);
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!shortenedUrl) return;
    navigator.clipboard.writeText(shortenedUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your long URL here"
            required
            className="flex-grow"
          />
          <Button
            type="submit"
            disabled={isLoading || !url}
            isLoading={isLoading}
          >
            Generate
          </Button>
        </div>
      </form>
      
      {error && (
        <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-200 text-sm">
          {error}
        </div>
      )}
      
      {shortenedUrl && (
        <div className="mt-6 bg-white/5 p-4 rounded-2xl border border-violet-500/30 animate-fade-in">
          <p className="text-gray-300 text-sm mb-2">Your shortened URL:</p>
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1">
              <Input
                value={shortenedUrl}
                onChange={() => {}}
                readOnly
                className="w-full rounded-xl text-sm"
              />
            </div>
            <button
              onClick={copyToClipboard}
              className="shrink-0 h-[42px] px-4 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 rounded-xl transition border border-violet-500"
              type="button"
              aria-label={isCopied ? "Copied" : "Copy to clipboard"}
            >
              <div className="flex items-center justify-center gap-2">
                {isCopied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-sm whitespace-nowrap">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white text-sm whitespace-nowrap">Copy</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}