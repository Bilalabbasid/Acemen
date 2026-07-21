"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Star,
  MapPin,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
} from "lucide-react";
import type { HolidayPackage, Room } from "@/data/holidays";

interface DealModalProps {
  holiday: HolidayPackage | null;
  onClose: () => void;
}

export default function DealModal({ holiday, onClose }: DealModalProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<number>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: 2,
    checkIn: "",
    checkOut: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  if (!holiday) return null;

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % holiday.images.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + holiday.images.length) % holiday.images.length
    );

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {holiday && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-xl z-[200]"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[201] flex items-start justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-premium-xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-navy-800 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Booking Confirmation Overlay */}
              <AnimatePresence>
                {isBooked && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 rounded-3xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 15,
                        delay: 0.1,
                      }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6"
                    >
                      <Check className="w-10 h-10 text-navy-900" />
                    </motion.div>
                    <h3 className="display-heading text-3xl text-navy-800 mb-3">
                      Booking Confirmed
                    </h3>
                    <p className="text-gray-500 max-w-md">
                      Your luxury holiday at {holiday.name} has been reserved.
                      Our concierge team will contact you shortly with your
                      itinerary details.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Image Gallery */}
              <div className="relative aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={holiday.images[currentImage]}
                    alt={`${holiday.name} - Photo ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Image nav arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-navy-800 hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-navy-800 hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {holiday.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === currentImage
                          ? "bg-white scale-110"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>

                {/* Badge */}
                {holiday.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase ${
                        holiday.badge === "SALE"
                          ? "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900"
                          : holiday.badge === "POPULAR"
                          ? "bg-venture-travel text-white"
                          : "bg-gradient-to-r from-navy-600 to-navy-800 text-gold-400"
                      }`}
                    >
                      {holiday.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 px-6 sm:px-8 py-3 overflow-x-auto">
                {holiday.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      i === currentImage
                        ? "border-gold-500 shadow-glow-gold"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="px-6 sm:px-8 pb-8">
                {/* Hotel Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(holiday.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-gold-500 text-gold-500"
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-lg bg-venture-travel/10 text-venture-travel font-bold text-sm">
                      {holiday.rating}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {holiday.reviewCount.toLocaleString()} reviews
                    </span>
                  </div>
                  <h2 className="display-heading text-3xl sm:text-4xl text-navy-800 mb-1">
                    {holiday.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {holiday.location}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {holiday.description}
                  </p>
                </div>

                {/* Room Options */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-navy-800 text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gold-500" />
                    Select Your Room
                  </h3>
                  <div className="space-y-3">
                    {holiday.rooms.map((room, i) => (
                      <button
                        key={room.name}
                        onClick={() => setSelectedRoom(i)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 ${
                          selectedRoom === i
                            ? "border-gold-500 bg-gold-50/30 shadow-glow-gold"
                            : "border-gray-100 hover:border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-heading font-bold text-navy-800">
                            {room.name}
                          </span>
                          <span className="font-display text-xl font-bold text-navy-800">
                            £{room.pricePerNight}
                            <span className="text-xs text-gray-400 font-body font-normal">
                              /night
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            Up to {room.maxGuests} guests
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {room.amenities.map((a) => (
                            <span
                              key={a}
                              className="text-[11px] bg-gray-100 text-gray-600 rounded-full px-2.5 py-1"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleBook}>
                  <h3 className="font-heading font-bold text-navy-800 text-lg mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold-500" />
                    Complete Your Booking
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy-800 placeholder:text-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy-800 placeholder:text-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Check-in
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) =>
                          setFormData({ ...formData, checkIn: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy-800 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Check-out
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) =>
                          setFormData({ ...formData, checkOut: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy-800 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Guests
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              guests: Math.max(1, formData.guests - 1),
                            })
                          }
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-navy-800 flex items-center justify-center font-bold transition-colors"
                        >
                          −
                        </button>
                        <span className="font-heading font-bold text-navy-800 text-lg w-8 text-center">
                          {formData.guests}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              guests: Math.min(
                                holiday.rooms[selectedRoom].maxGuests,
                                formData.guests + 1
                              ),
                            })
                          }
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-navy-800 flex items-center justify-center font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price summary */}
                  <div className="bg-gradient-to-r from-navy-50/50 to-gold-50/30 rounded-2xl p-5 mb-5 border border-gold-200/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          {holiday.rooms[selectedRoom].name} ·{" "}
                          {holiday.duration}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {holiday.boardType} · {holiday.departureAirport}
                        </p>
                      </div>
                      <div className="text-right">
                        {holiday.originalPrice && (
                          <span className="line-through text-gray-400 text-sm mr-2">
                            £{holiday.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="font-display text-3xl font-bold text-navy-800">
                          £{holiday.pricePerPerson.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 ml-1">pp</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold !py-4 text-sm font-black tracking-wider uppercase"
                  >
                    Book Now — £{holiday.pricePerPerson.toLocaleString()}pp
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
