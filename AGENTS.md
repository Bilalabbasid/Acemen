# ACEMEN Luxury Brand — Agent Guidelines & Changelog

## Brand Identity & Vision
- **Brand**: ACEMEN
- **Category**: World-Class Luxury Leather Goods, Footwear, Outerwear & Aviation Sartorial
- **Aesthetic Benchmark**: Louis Vuitton (eu.louisvuitton.com)
  - Clean, editorial, restrained luxury aesthetic.
  - Generous whitespace, razor-sharp typography hierarchy.
  - High-fashion campaign hero photography, dual-angle product hover reveals of the exact same piece.
  - Fluid, understated slide-over drawers (Cart, Wishlist, Search).
  - Authentic craftsmanship & London atelier storytelling.

## Design System Tokens
- **Palette**:
  - `noir-950`: `#080808`
  - `noir-900`: `#0F0F0F`
  - `noir-800`: `#171717`
  - `ivory-50`: `#FAF8F5`
  - `ivory-100`: `#F5F2EB`
  - `leather-cognac`: `#8C5835`
  - `leather-saddle`: `#A06A3B`
  - `gold-accent`: `#C5A869`
- **Typography**:
  - Display: `Cormorant Garamond` (high-contrast luxury editorial serif)
  - Utility/Heading: `Outfit` & `Inter` (tracked uppercase sans-serif)

## Verified Brand Data
- **Address**: 551 Staines Road, Hounslow, Middlesex, London TW4 5DL, United Kingdom
- **Phone**: +44 7587 386522
- **Email**: info@acemen.co.uk
- **Logo**: `/images/logo.png`

## Product Ecosystem & Categories
1. **The Footwear Atelier**:
   - The Regent Classic Oxford (French Box Calfskin, Goodyear-welted, mirror toe burnish)
   - The Savile Double Monk Strap (Hand-Patinated Cognac / Espresso with solid brass buckles)
   - The Mayfair Leather Chelsea Boot (Dainite Sole, Seamless Upper, woven ACEMEN pull-tabs)
   - The Piccadilly Blucher Derby (Bavarian Full-Grain Hide)
2. **Sartorial Leather Outerwear**:
   - The Sovereign Classic Leather Jacket (French Box Calfskin, Cupro Lining, Swiss Riri Hardware)
   - The Signature Leather Bomber (Bavarian Calfskin, Merino Wool Ribbing, Espresso Dark Brown)
3. **Fine Leather Bags**:
   - The Grand Sovereign Weekender, The Audley Briefcase, The Kensington Tote
4. **Wallets & Pocket Leather Goods**:
   - The Sovereign Bifold Wallet, The Cavendish Slim Cardholder
5. **Sartorial Belts**:
   - Reversible & Dress Belts with solid brass buckles
6. **Trunks & Travel**:
   - The Sovereign Cabin Trolley Case

## Changelog & Progress
- [x] Initialized luxury design tokens and visual benchmarks.
- [x] Generated and integrated bespoke editorial campaign & studio product photography across bags, wallets, footwear, and outerwear.
- [x] Removed all third-party stock / Unsplash photos.
- [x] Implemented `src/data/products.ts` with comprehensive catalog, rich descriptions, and sizing matrices (`39`-`46` for shoes, `S`-`XXL` for jackets).
- [x] Fixed hover interaction in `ProductCard.tsx` to strictly reveal the secondary angle / macro detail of the **exact same product** (or apply refined slow zoom when single view is active).
- [x] Removed Pilot Collection across catalog, navigation, home layout, and metadata.
- [x] Built Products Catalog, dynamic Collection Views (`/collections/shoes`, `/collections/jackets`, `/collections/bags`, `/collections/wallets`, `/collections/belts`, `/collections/travel`, `/collections/women`, `/collections/men`), and Product Detail Pages (PDP).
- [x] Full production build verification with zero type or build errors.
