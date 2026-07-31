import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiMic,
  FiCamera,
} from "react-icons/fi";

import SearchSuggestions from "./SearchSuggestions";

const SearchBar = ({
  query,
  setQuery,
  filteredProducts,
}) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleSearch = () => {
    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice search is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;

      setQuery(text);

      navigate(`/search?q=${encodeURIComponent(text)}`);
    };
  };

  const handleImageSearch = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    console.log(file);

    // Future:
    // Upload image and perform AI image search.
  };

  return (
    <div className="flex justify-center pl-10">
      <div className="relative w-full max-w-[650px]">

        <div
          className="
            flex
            h-14
            items-center
            overflow-hidden
            rounded-full
            border
            border-slate-200
            bg-white
            px-5
            shadow-lg
            transition-all
            focus-within:border-blue-500
            focus-within:ring-4
            focus-within:ring-blue-100
          "
        >
          <button
            onClick={handleSearch}
            className="mr-3 text-slate-500 hover:text-blue-600"
          >
            <FiSearch size={22} />
          </button>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search products, brands & categories..."
            className="
              flex-1
              bg-transparent
              text-slate-700
              outline-none
              placeholder:text-slate-400
            "
          />

          <div className="mx-3 h-6 w-px bg-slate-300" />

          <button
            onClick={handleVoiceSearch}
            className="p-2 text-slate-500 transition hover:text-blue-600"
            title="Voice Search"
          >
            <FiMic size={20} />
          </button>

          <button
            onClick={handleImageSearch}
            className="ml-1 p-2 text-slate-500 transition hover:text-blue-600"
            title="Search by Image"
          >
            <FiCamera size={20} />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </div>

        <SearchSuggestions
          query={query}
          results={filteredProducts}
        />

      </div>
    </div>
  );
};

export default SearchBar;