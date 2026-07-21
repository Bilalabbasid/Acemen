"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  MapPin,
  Plane,
  Calendar,
  Users,
  SlidersHorizontal,
  ChevronDown,
  X,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { holidays, departureAirports } from "@/data/holidays";
import type { HolidayPackage } from "@/data/holidays";
import HolidayCard from "@/components/travel/HolidayCard";
import DealModal from "@/components/travel/DealModal";

type SortOption = "price-asc" | "price-desc" | "rating" | "popularity";
type BoardType = "All Inclusive" | "Half Board" | "Bed & Breakfast" | "Room Only";

export default function HolidaysPageClient() {
  // ───── Sticky header ─────
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ───── Search state ─────
  const [destination, setDestination] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // ───── Filter state ─────
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [starFilter, setStarFilter] = useState<number[]>([]);
  const [boardFilter, setBoardFilter] = useState<BoardType[]>([]);
  const [airportFilter, setAirportFilter] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("popularity");

  // ───── UI state ─────
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<HolidayPackage | null>(null);
  const [mobileFilters, setMobileFilters] = useState(false);

  // ───── Search action ─────
  const handleSearch = useCallback(() => {
    setIsLoading(true);
    setHasSearched(true);
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // ───── Auto-show results on mount ─────
  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ───── Filter + sort logic ─────
  const filteredResults = useMemo(() => {
    let results = [...holidays];

    // Destination text search
    if (destination.trim()) {
      const term = destination.toLowerCase();
      results = results.filter(
        (h) =>
          h.name.toLowerCase().includes(term) ||
          h.location.toLowerCase().includes(term)
      );
    }

    // Departure airport (from search bar)
    if (departureAirport) {
      results = results.filter(
        (h) => h.departureAirport === departureAirport
      );
    }

    // Price range
    results = results.filter(
      (h) =>
        h.pricePerPerson >= priceRange[0] &&
        h.pricePerPerson <= priceRange[1]
    );

    // Star rating
    if (starFilter.length > 0) {
      results = results.filter((h) => starFilter.includes(h.stars));
    }

    // Board type
    if (boardFilter.length > 0) {
      results = results.filter((h) => boardFilter.includes(h.boardType));
    }

    // Airport filter (sidebar)
    if (airportFilter) {
      results = results.filter(
        (h) => h.departureAirport === airportFilter
      );
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        results.sort((a, b) => a.pricePerPerson - b.pricePerPerson);
        break;
      case "price-desc":
        results.sort((a, b) => b.pricePerPerson - a.pricePerPerson);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "popularity":
        results.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return results;
  }, [
    destination,
    departureAirport,
    priceRange,
    starFilter,
    boardFilter,
    airportFilter,
    sortBy,
  ]);

  const clearFilters = () => {
    setPriceRange([0, 3000]);
    setStarFilter([]);
    setBoardFilter([]);
    setAirportFilter("");
  };

  const toggleStar = (star: number) => {
    setStarFilter((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
    );
  };

  const toggleBoard = (board: BoardType) => {
    setBoardFilter((prev) =>
      prev.includes(board) ? prev.filter((b) => b !== board) : [...prev, board]
    );
  };

  // ───── Filter sidebar content (shared between desktop & mobile) ─────
  const FilterContent = () => (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h4 className="font-heading font-bold text-navy-800 text-sm mb-3 flex items-center gap-2">
          Price Range
        </h4>
        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={3000}
            step={50}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full accent-gold-500 h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 font-medium">
            <span>£{priceRange[0]}</span>
            <span>£{priceRange[1].toLocaleString()}pp</span>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <h4 className="font-heading font-bold text-navy-800 text-sm mb-3">
          Star Rating
        </h4>
        <div className="space-y-2.5">
          {[5, 4, 3].map((star) => (
            <label
              key={star}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  starFilter.includes(star)
                    ? "bg-gold-500 border-gold-500"
                    : "border-gray-300 group-hover:border-gold-400"
                }`}
              >
                {starFilter.includes(star) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(star)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{star} Star</span>
            </label>
          ))}
        </div>
      </div>

      {/* Board Type */}
      <div>
        <h4 className="font-heading font-bold text-navy-800 text-sm mb-3">
          Board Type
        </h4>
        <div className="space-y-2.5">
          {(
            [
              "All Inclusive",
              "Half Board",
              "Bed & Breakfast",
              "Room Only",
            ] as BoardType[]
          ).map((board) => (
            <label
              key={board}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  boardFilter.includes(board)
                    ? "bg-gold-500 border-gold-500"
                    : "border-gray-300 group-hover:border-gold-400"
                }`}
              >
                {boardFilter.includes(board) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-600">{board}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Departure Airport */}
      <div>
        <h4 className="font-heading font-bold text-navy-800 text-sm mb-3">
          Departure Airport
        </h4>
        <select
          value={airportFilter}
          onChange={(e) => setAirportFilter(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-navy-800 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
        >
          <option value="">All Airports</option>
          {departureAirports.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Clear */}
      <button
        onClick={clearFilters}
        className="text-sm text-gray-400 hover:text-gold-600 underline transition-colors"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-navy-800">
      {/* ════════════ STICKY HEADER ════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-[101] transition-all duration-500 ${
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            : "bg-navy-950/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Left: Brand */}
          <Link
            href="/ventures/ticketing-travel"
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm tracking-[0.2em] text-white leading-none">
                ASCEND
              </span>
              <span className="font-heading font-bold text-[10px] tracking-[0.3em] text-gold-400 mt-1 leading-none">
                BY ACEMEN
              </span>
            </div>
          </Link>

          {/* Center: Nav pills */}
          <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-full p-1">
            {["Holidays", "Flights", "Hotels"].map((tab) => (
              <span
                key={tab}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  tab === "Holidays"
                    ? "bg-white/15 text-gold-400"
                    : "text-white/50 cursor-not-allowed"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Right: Back */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Acemen</span>
          </Link>
        </div>
      </header>

      {/* ════════════ HERO ════════════ */}
      <section className="relative pt-16 min-h-[62vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
            alt="Luxury beach resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/80" />
          <div className="absolute inset-0 dot-pattern opacity-10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] mb-6">
              <span className="text-gold-400 font-medium text-sm tracking-wide">
                Ascend by Acemen Ventures
              </span>
            </div>
            <h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4 text-balance leading-[1.08]">
              Find Your Perfect Holiday
            </h1>
            <p className="text-gray-300/80 text-base sm:text-lg max-w-2xl mx-auto">
              Handpicked luxury destinations, curated by our elite travel architects
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-2xl shadow-premium-xl p-4 sm:p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Destination */}
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-800 placeholder:text-gray-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                />
              </div>

              {/* Departure Airport */}
              <div className="relative">
                <Plane className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={departureAirport}
                  onChange={(e) => setDepartureAirport(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-800 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white appearance-none"
                >
                  <option value="">Any Airport</option>
                  {departureAirports.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Check-in */}
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-800 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                />
              </div>

              {/* Guests */}
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <div className="flex items-center gap-1 pl-10 pr-2 py-1.5 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-1.5 flex-1">
                    <span className="text-xs text-gray-400">Adults</span>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-navy-800 flex items-center justify-center text-sm font-bold transition-colors"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-bold text-navy-800">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.min(9, adults + 1))}
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-navy-800 flex items-center justify-center text-sm font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="flex items-center gap-1.5 flex-1 pl-1">
                    <span className="text-xs text-gray-400">Kids</span>
                    <button
                      type="button"
                      onClick={() =>
                        setChildren(Math.max(0, children - 1))
                      }
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-navy-800 flex items-center justify-center text-sm font-bold transition-colors"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-bold text-navy-800">
                      {children}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setChildren(Math.min(6, children + 1))
                      }
                      className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-navy-800 flex items-center justify-center text-sm font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="btn-gold !py-3 text-sm font-black tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ FILTER + RESULTS ════════════ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ── Desktop Sidebar ── */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="lg:sticky lg:top-24 card-premium p-6">
              <h3 className="font-heading font-bold text-navy-800 text-base mb-6 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gold-500" />
                Filters
              </h3>
              <FilterContent />
            </div>
          </aside>

          {/* ── Mobile filter toggle ── */}
          <div className="lg:hidden flex items-center justify-between mb-2">
            <span className="font-heading font-bold text-navy-800">
              {filteredResults.length} holiday
              {filteredResults.length !== 1 ? "s" : ""} found
            </span>
            <button
              onClick={() => setMobileFilters(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-navy-800 hover:border-gold-500 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* ── Mobile filter drawer ── */}
          <AnimatePresence>
            {mobileFilters && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-navy-950/50 backdrop-blur-sm z-[150] lg:hidden"
                  onClick={() => setMobileFilters(false)}
                />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white z-[151] p-6 overflow-y-auto shadow-premium-xl lg:hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading font-bold text-navy-800 text-lg flex items-center gap-2">
                      <SlidersHorizontal className="w-5 h-5 text-gold-500" />
                      Filters
                    </h3>
                    <button
                      onClick={() => setMobileFilters(false)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-navy-800 hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <FilterContent />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* ── Results ── */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <span className="font-heading font-bold text-navy-800 text-lg">
                {filteredResults.length} holiday
                {filteredResults.length !== 1 ? "s" : ""} found
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="pl-4 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm text-navy-800 font-semibold focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white appearance-none cursor-pointer"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Sort for mobile */}
            <div className="flex lg:hidden items-center justify-end mb-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="pl-4 pr-10 py-2 rounded-xl border border-gray-200 text-sm text-navy-800 font-semibold focus:border-gold-500 outline-none bg-white appearance-none cursor-pointer"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Loading Skeleton */}
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden border border-gray-100"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[skeleton_1.5s_ease-in-out_infinite]" />
                    <div className="p-6 space-y-3">
                      <div className="h-5 w-3/4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[skeleton_1.5s_ease-in-out_infinite] rounded-lg" />
                      <div className="h-4 w-1/2 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[skeleton_1.5s_ease-in-out_infinite] rounded-lg" />
                      <div className="h-4 w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[skeleton_1.5s_ease-in-out_infinite] rounded-lg" />
                      <div className="h-4 w-2/3 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[skeleton_1.5s_ease-in-out_infinite] rounded-lg" />
                      <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div className="h-7 w-24 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[skeleton_1.5s_ease-in-out_infinite] rounded-lg" />
                        <div className="h-10 w-28 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-[skeleton_1.5s_ease-in-out_infinite] rounded-xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Results Grid */}
            {!isLoading && hasSearched && filteredResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredResults.map((holiday, i) => (
                  <motion.div
                    key={holiday.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <HolidayCard
                      holiday={holiday}
                      onViewDeal={setSelectedDeal}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* No Results */}
            {!isLoading && hasSearched && filteredResults.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-gold-500" />
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-xl mb-2">
                  No holidays match your criteria
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-gold !py-3 !px-8 text-sm"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER STRIP ════════════ */}
      <footer className="bg-navy-950 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm mb-3">
            © {new Date().getFullYear()} Ascend by Acemen Ventures. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="text-gold-400/70 hover:text-gold-400 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Back to Acemen Ventures
          </Link>
        </div>
      </footer>

      {/* ════════════ DEAL MODAL ════════════ */}
      <DealModal holiday={selectedDeal} onClose={() => setSelectedDeal(null)} />
    </div>
  );
}
