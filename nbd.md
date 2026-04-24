# NO BROKE DAYZ — Complete Launch Playbook
### Everything you need to do, in order, from zero to live product.

**Current status:** Landing page built ✅  
**Target:** Functional MVP live at UNILAG, real students transacting, ready to raise or expand.

---

## READ THIS FIRST

This document is your single source of truth. Every phase, every task, every cost, every account — it's all here. Work through it top to bottom. Don't skip phases. Don't start Phase 2 before Phase 1 is done.

The order matters. CAC registration must exist before Paystack unlocks payouts. Paystack must work before you build the wallet. The wallet must work before you go live.

Tick every box before you launch. Every single one.

---

---

# PHASE 0 — FOUNDATION
### Before you write a single line of backend code
### Estimated time: 2–4 weeks | Cost: ₦40,000–₦70,000

---

## 0.1 — Register Your Business (CAC)

This is not optional. Without a registered business, Paystack will not activate the Transfer API. Without Transfer API, you cannot pay workers. Without paying workers, ZBD does not exist.

**What to register:**
- Business Name Registration (cheapest option, sufficient for MVP)
- Name options: "Zero Broke Days", "ZBD Technologies", "NoBrokeDayz Ltd"
- Check availability at: https://search.cac.gov.ng

**How to do it:**
- [ ] Go to https://pre.cac.gov.ng
- [ ] Create an account
- [ ] Search for your business name to confirm it's available
- [ ] Fill the BN1 form (Business Name Registration)
- [ ] Pay the CAC filing fee online
- [ ] Submit supporting documents (ID, passport photo, signature)
- [ ] Collect your Certificate of Registration (7–14 business days)

**Cost:** ₦10,000–₦15,000 (CAC fees)  
**Optional — use a CAC agent:** ₦25,000–₦40,000 all-in (faster, less stress, they handle the process)  
**Where to find agents:** Search "CAC registration agent Lagos" on Twitter/X or ask in Nigerian startup WhatsApp groups.

**Documents you'll need:**
- [ ] Valid government-issued ID (NIN slip, international passport, or driver's license)
- [ ] Passport photograph
- [ ] Proof of address (utility bill or bank statement)
- [ ] Business address (your home address is fine for now)

**After registration, you'll receive:**
- CAC Certificate with your RC Number
- Keep this document safe — you'll need it for Paystack, banking, and future fundraising.

---

## 0.2 — Open a Business Bank Account

You need a bank account in the business name, separate from your personal account. ZBD's money must not mix with your personal money — this protects you legally and financially.

**Recommended banks (fast business account opening):**
- **Opay Business** — opens in 24–48 hours, requires CAC cert, minimal stress
- **Moniepoint Business** — excellent for SMEs, fast, good transfer APIs
- **GTBank / Access Bank** — traditional but more features; takes 1–2 weeks

**What you'll need:**
- [ ] CAC Certificate (from 0.1)
- [ ] BVN of the proprietor (you)
- [ ] Valid ID
- [ ] Passport photo
- [ ] Utility bill / proof of address

**Action:**
- [ ] Open business bank account (Moniepoint or Opay Business recommended for speed)
- [ ] Note your account number and sort code
- [ ] Set up internet banking

**Cost:** Free (most business accounts have no opening fee)

---

## 0.3 — Get a Domain Name

Your domain is your identity online. Buy it now before someone else does.

**Recommended domain:**
- `nbrokedays.com` or `zerobroke.ng` or `zerobrokedays.com`
- `.com` is stronger internationally; `.com.ng` is fine for Nigeria-only

**Where to buy:**
- [ ] Go to https://www.qservers.net (Nigerian, pay in naira, supports .ng domains)
- [ ] Or https://namecheap.com (pay with card, USD)
- [ ] Search your preferred domain name
- [ ] Buy for 2 years minimum (cheaper per year, less renewal risk)

**Cost:**
- `.com` domain: ~₦10,000–₦15,000/year on Qservers
- `.com.ng` domain: ~₦5,000–₦8,000/year

**Action:**
- [ ] Buy domain
- [ ] Note your domain login credentials somewhere safe
- [ ] Do NOT let this expire — set up auto-renew

---

## 0.4 — Create All Required Accounts

Create these accounts now. All free. Do it in one sitting.

### Development & Hosting
- [ ] **GitHub** — https://github.com — Create account. Create a private repo called `zbd-mvp`. This is where all your code lives.
- [ ] **Vercel** — https://vercel.com — Sign up with your GitHub account. This hosts your web app. Free forever for this scale.
- [ ] **Supabase** — https://supabase.com — Sign up. This is your entire backend (database, auth, storage, realtime). Create a new project called `zbd-mvp`. **Save your project URL and anon key — you'll need these.**

### Payments
- [ ] **Paystack** — https://paystack.com/ng — Create a business account.
  - Use your CAC details (from 0.1) + business bank account (from 0.2)
  - Get verified (takes 1–3 business days after submitting docs)
  - After verification: go to Settings → API Keys → copy your **Secret Key** and **Public Key** and store them safely
  - Go to Settings → Transfers → enable Transfer API
  - **Without verification, you cannot send money to bank accounts. Do this early.**

### SMS
- [ ] **Termii** — https://termii.com — Create account. This sends OTP texts and notifications to Nigerian numbers. Top up with ₦5,000 to start. Note your API key.

### Email
- [ ] **Resend** — https://resend.com — Create account. Free for 3,000 emails/month. Get your API key. Add your domain for professional emails (e.g., hello@zerobrokedays.com).

### Communication & Management
- [ ] **Notion** — https://notion.so — Free. Use this to track user feedback, bug reports, and campus ambassador activity.
- [ ] **Google Workspace** (optional but recommended) — https://workspace.google.com — ₦1,200/month for a professional email address (e.g., founder@zerobrokedays.com). Makes you look serious to partners.

### Analytics
- [ ] **Google Analytics** — https://analytics.google.com — Free. Add to your site to track visits, signups, and user behaviour from Day 1.
- [ ] **PostHog** — https://posthog.com — Free tier. Tracks user events inside the app (who clicked what, where people drop off). Critical for improving the product.

---

## 0.5 — Organise Your Credentials

Before you build anything, store all your API keys and passwords securely.

- [ ] Create a **Bitwarden** account (https://bitwarden.com) — free password manager
- [ ] Store every password, API key, and account credential there
- [ ] Never store API keys in your code — use environment variables (`.env` files)
- [ ] Create a `.env` file in your project root, add it to `.gitignore` immediately

Your `.env` will eventually look like this:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key  (backend only, never expose)
TERMII_API_KEY=your_termii_key
RESEND_API_KEY=your_resend_key
```

---

## 0.6 — Decide: Build Yourself or Hire

Be honest with yourself right now.

**Can you build this yourself?**
- You need: React (intermediate), Supabase JS SDK (learnable in a week), Paystack API (simple), basic SQL queries
- If yes: proceed to Phase 1. Timeline: 8–12 weeks.
- If no or unsure: hire a developer before starting Phase 1.

**If hiring:**
- [ ] Write a clear brief (link them to this doc + the PRD)
- [ ] Budget: ₦200,000–₦400,000 for the full MVP build
- [ ] Where to find Nigerian developers:
  - Twitter/X: post "looking for React + Supabase developer, Lagos/remote, MVP build"
  - UNILAG CS/Engineering departments (final year students, talented, affordable)
  - Ingressive for Good community: https://ingressive.org
  - Risevest Tech Talent: search their community
  - Nigerian dev Slack/Discord communities
- [ ] Vet them: ask to see one previous project with Supabase or a similar backend
- [ ] Pay in milestones: 30% upfront, 40% at mid-point, 30% on completion
- [ ] Get a simple written agreement (WhatsApp message confirming scope + pay is fine for MVP)

**Phase 0 Checkpoint — before moving to Phase 1:**
- [ ] CAC Certificate received
- [ ] Business bank account open
- [ ] Domain purchased
- [ ] All 7 accounts created (GitHub, Vercel, Supabase, Paystack, Termii, Resend, Notion)
- [ ] Paystack verified and Transfer API enabled
- [ ] Credentials stored in Bitwarden
- [ ] Developer ready (you or hired)

---

---

# PHASE 1 — BUILD THE PRODUCT
### Estimated time: 8–12 weeks | Additional cost: ₦0–₦400,000 (depending on dev)

---

## 1.1 — Set Up Your Database (Supabase)

Before building any screen, set up the database. Everything else depends on this.

Go to your Supabase dashboard → SQL Editor and create these tables:

**Tables to create:**

- [ ] **users** — `id, email, phone, full_name, university, faculty, level, hostel, avatar_url, is_verified, student_id_url, bvn_verified, wallet_balance, rating, completed_gigs_count, created_at`

- [ ] **gigs** — `id, poster_id, title, description, category, price, is_negotiable, location_tag, spots_available, spots_filled, status (open/active/completed/cancelled), is_urgent, expires_at, created_at`

- [ ] **applications** — `id, gig_id, worker_id, status (pending/accepted/rejected), message, created_at`

- [ ] **transactions** — `id, gig_id, poster_id, worker_id, amount, platform_fee, worker_payout, paystack_reference, status (escrow/released/refunded/disputed), created_at`

- [ ] **messages** — `id, conversation_id, sender_id, content, created_at, is_read`

- [ ] **conversations** — `id, gig_id, poster_id, worker_id, created_at`

- [ ] **reviews** — `id, gig_id, reviewer_id, reviewee_id, stars, comment, created_at`

- [ ] **notifications** — `id, user_id, type, message, is_read, link, created_at`

**Set up Row Level Security (RLS) on every table** — Supabase has docs on this. It means users can only see their own data unless you specifically allow otherwise.

**Action:**
- [ ] Create all 8 tables
- [ ] Enable RLS on all tables
- [ ] Write policies (e.g., "users can only read their own wallet_balance")
- [ ] Test by inserting dummy data in the dashboard

---

## 1.2 — Set Up Authentication

Supabase Auth handles this. Students sign up with email or phone.

**Auth flow for ZBD:**
1. User enters phone number → receives OTP via Termii → confirms → account created
2. OR: User enters email → receives confirmation link → clicks → account created
3. After auth, user is prompted to complete profile (university, faculty, level, hostel)
4. User uploads student ID photo → admin reviews → account marked `is_verified = true`

**Action:**
- [ ] Enable Phone Auth in Supabase (Settings → Auth → Phone)
- [ ] Connect Termii as the SMS provider in Supabase (Settings → Auth → SMS Provider → Custom → paste Termii config)
- [ ] Enable Email Auth as backup
- [ ] Build the Sign Up screen
- [ ] Build the OTP confirmation screen
- [ ] Build the Onboarding screen (fill profile after first login)
- [ ] Build the "Pending Verification" holding screen (shown until admin approves student ID)

---

## 1.3 — Build All 13 Screens

Build in this exact order — each one depends on the previous:

**1. Landing Page (already done ✅)**
- [ ] Connect "Join Waitlist" form to Supabase (save emails to a `waitlist` table)
- [ ] Add Google Analytics tracking

**2. Sign Up / Login**
- [ ] Phone number entry + OTP verify
- [ ] Email fallback
- [ ] "Already have an account? Log in" toggle
- [ ] Redirect to Onboarding after first signup

**3. Onboarding**
- [ ] Full name
- [ ] Select University (dropdown — start with UNILAG only)
- [ ] Faculty / Department (text input or dropdown)
- [ ] Level (100 — 600 + postgrad)
- [ ] Hostel / off-campus location
- [ ] Student ID upload (photo of ID card)
- [ ] Submit → show "Pending Verification" screen
- [ ] Save everything to `users` table

**4. Home / Gig Feed**
- [ ] List of open gigs (sorted by recency + proximity)
- [ ] Category filter tabs: All / Urgent / Academic / Errand / Manual / Social / Creative / Technical
- [ ] Gig card: title, pay, category badge, location, time posted, spots left
- [ ] Search bar (search by keyword)
- [ ] Floating "Post a Gig" button (bottom right)
- [ ] Pull-to-refresh
- [ ] Empty state if no gigs match filter

**5. Gig Detail Page**
- [ ] Full gig description
- [ ] Poster profile summary (name, rating, completed gigs, verified badge)
- [ ] Spots available counter
- [ ] Location tag
- [ ] "Apply Now" button → opens application modal
- [ ] Application modal: name + phone pre-filled (from profile), optional message, submit
- [ ] If already applied: show "Application Pending" state
- [ ] If application accepted: show "Chat with Poster" button

**6. Post a Gig**
- [ ] Title (required)
- [ ] Description (required, min 30 characters)
- [ ] Category selector (7 options)
- [ ] Price (₦ input — fixed or "negotiable" toggle)
- [ ] Location (hostel / building / zone on campus)
- [ ] Spots available (1–50)
- [ ] Urgency toggle (marks gig with URGENT banner)
- [ ] Expiry (today / 3 days / 1 week)
- [ ] Preview before submit
- [ ] On submit: confirm payment for escrow (Paystack modal opens — poster pays the gig amount upfront, money locks in ZBD wallet)

**7. My Gigs (Poster view)**
- [ ] List of gigs I've posted
- [ ] For each: status badge (Open / Active / Completed / Cancelled)
- [ ] For Open gigs: see applicants, select one
- [ ] For Active gigs: see worker, open chat, mark complete
- [ ] For Completed: see rating received, rate the worker

**8. My Applications (Worker view)**
- [ ] List of gigs I applied for
- [ ] Status: Pending / Accepted / Rejected / Completed
- [ ] For Accepted: open chat button
- [ ] For Completed: rate the poster

**9. Messages**
- [ ] List of all conversations (with poster name, gig title, last message, unread count)
- [ ] Sorted by most recent message

**10. Chat Screen**
- [ ] Real-time messages (Supabase Realtime)
- [ ] Show gig title at top
- [ ] Worker can mark "I've arrived" (sets gig status to In Progress)
- [ ] Worker can mark "Done" (triggers poster to confirm)
- [ ] Poster sees "Mark as Complete" button → clicking releases escrow → pays worker
- [ ] Read receipts

**11. Wallet**
- [ ] Current balance (₦0.00)
- [ ] Transaction history (deposits, earnings, withdrawals)
- [ ] "Top Up" button → Paystack payment modal (for posters funding escrow)
- [ ] "Withdraw" button → enter bank name + account number + amount → confirm → Paystack Transfer API sends money
- [ ] Withdrawal minimum: ₦500
- [ ] Processing status shown per transaction

**12. Profile**
- [ ] My photo, name, university, faculty, level, hostel
- [ ] Verified badge
- [ ] Star rating (average of all reviews received)
- [ ] Number of completed gigs
- [ ] Reviews received (list of stars + comments)
- [ ] Edit profile button
- [ ] "View as others see me" toggle

**13. Admin Panel** (`/admin` — password protected, only you access this)
- [ ] Pending student ID verifications queue
  - Show user name, university, uploaded ID photo
  - "Approve" / "Reject" buttons
  - On approve: sets `is_verified = true` in users table
- [ ] All gigs list (with flag/remove option)
- [ ] Flagged gigs queue (reported by users)
- [ ] Open disputes queue
- [ ] Transaction log (every payment in/out)
- [ ] Basic user search by name / phone / email

---

## 1.4 — Build the Payment Flow (Most Critical Part)

This is the most technically complex part. Take your time here. Test it thoroughly.

**The full money flow:**

```
POSTING A GIG:
Poster fills form → submits → Paystack modal opens
→ Poster pays gig amount (e.g., ₦2,000)
→ Paystack confirms payment → webhook fires to your server
→ Your backend: create transaction record (status: escrow)
→ Gig goes live

COMPLETING A GIG:
Worker marks Done → Poster sees "Mark Complete" in chat
→ Poster clicks "Mark Complete"
→ Your backend calculates: worker gets 91%, ZBD keeps 9%
  e.g. ₦2,000 gig → worker gets ₦1,820 → ZBD keeps ₦180
→ Call Paystack Transfer API → send ₦1,820 to worker's bank account
→ Transaction status → released
→ Both parties prompted to rate each other
```

**What you need to build on the backend:**
- [ ] Paystack webhook endpoint (receives payment confirmation from Paystack)
- [ ] Paystack Transfer function (calls Transfer API to pay workers)
- [ ] Fee calculation function (9% to ZBD, 91% to worker)

**How to handle the backend code:**
Since Supabase is your backend, use **Supabase Edge Functions** (TypeScript serverless functions) for:
- [ ] Paystack webhook handler
- [ ] Transfer trigger (called when poster marks gig complete)
- [ ] Wallet balance updater

**Paystack resources:**
- Docs: https://paystack.com/docs
- Initialize payment: https://paystack.com/docs/payments/accept-payments
- Transfer API: https://paystack.com/docs/transfers/single-transfers
- Webhooks: https://paystack.com/docs/payments/webhooks

**Action:**
- [ ] Create Paystack test keys for development (use test mode until you're live)
- [ ] Build and test the payment modal (use Paystack's test card: 4084084084084081)
- [ ] Build and test the webhook endpoint
- [ ] Test a full cycle: post gig → pay → apply → accept → complete → payout
- [ ] Do this 5 times before moving on

---

## 1.5 — Student ID Verification Flow

This is your trust mechanism. Keep it manual for MVP.

**How it works:**
1. Student uploads photo of their student ID during onboarding
2. Photo saved to Supabase Storage
3. You (admin) see it in `/admin` → verification queue
4. You look at it, confirm it's a real UNILAG ID, click Approve
5. User gets an SMS ("Your ZBD account is now verified ✅")
6. User can now post and apply for gigs

**Action:**
- [ ] Build file upload in onboarding (Supabase Storage — create a `student-ids` bucket, set it to private)
- [ ] Add image viewer in admin panel
- [ ] Approve/reject triggers `is_verified` flag + sends Termii SMS notification
- [ ] Max file size: 5MB. Accept JPEG and PNG only.
- [ ] Tell users: "Verification takes up to 24 hours"

**For MVP:** Manual verification by you is fine. You're targeting 500–2,000 users. You can verify 50 IDs a day in 20 minutes.

---

## 1.6 — Notifications

Users need to know what's happening in real time.

**Notification triggers to build:**
- [ ] "Your application was accepted" — SMS + in-app
- [ ] "You have a new applicant" — in-app
- [ ] "Your gig is about to expire" (24hr warning) — in-app
- [ ] "Payment received: ₦X credited to your wallet" — SMS + in-app
- [ ] "Your withdrawal of ₦X is processing" — in-app
- [ ] "New message from [name]" — in-app
- [ ] "Your account is now verified" — SMS + in-app

**What to use:**
- **SMS:** Termii (for critical money and verification alerts only — don't spam SMS, it costs money)
- **In-app:** Store in `notifications` table, show as a bell icon with unread count
- **Email:** Resend (for signup confirmation and weekly digest — optional for MVP)

---

## 1.7 — PWA Setup (So It Installs Like an App on Phones)

This turns your web app into something students can install on their phone's home screen — no App Store needed.

**Action:**
- [ ] Create a `manifest.json` file in your `/public` folder with app name, icons, theme colour
- [ ] Create app icons in these sizes: 192×192 and 512×512 (use your ZBD logo)
- [ ] Register a service worker (Vite has a PWA plugin: `vite-plugin-pwa` — install it)
- [ ] Test on Android Chrome: you should see "Add to Home Screen" prompt
- [ ] Test on iOS Safari: manually "Add to Home Screen" works

**Vite PWA plugin:**
```bash
npm install vite-plugin-pwa
```

This is a one-day task. Do it before launch.

---

## 1.8 — Testing (Do Not Skip This)

Before you let a single real student use it, break it yourself.

**Test every single flow:**
- [ ] Sign up as a new student (phone OTP)
- [ ] Complete onboarding, upload a fake student ID
- [ ] Approve your own ID in admin panel
- [ ] Post 3 different types of gigs (Academic, Errand, Social)
- [ ] Apply for a gig from a second test account
- [ ] Accept the application from the poster account
- [ ] Open chat, send messages back and forth
- [ ] Mark gig as Done (from worker)
- [ ] Mark gig as Complete (from poster)
- [ ] Confirm payout hits the worker's test bank account
- [ ] Rate each other
- [ ] Test a dispute: don't mark complete, use admin to resolve
- [ ] Test withdrawal to bank account
- [ ] Test on mobile (Chrome on Android, Safari on iOS)
- [ ] Test on slow internet (throttle in Chrome DevTools to "Slow 3G")

**Bug tracking:**
- [ ] Create a Notion page for bugs
- [ ] Every bug: screenshot, steps to reproduce, severity (High/Medium/Low)
- [ ] Fix all High severity bugs before launch
- [ ] Medium bugs can be patched in Week 1 post-launch
- [ ] Low bugs can wait

---

**Phase 1 Checkpoint — before moving to Phase 2:**
- [ ] All 13 screens built
- [ ] Payment flow tested end-to-end (5 full cycles)
- [ ] Paystack Switch from Test Mode to Live Mode
- [ ] Student ID verification working
- [ ] Chat working in real time
- [ ] Wallet top-up and withdrawal working
- [ ] Notifications working (in-app + SMS)
- [ ] PWA installable on Android and iOS
- [ ] Zero High-severity bugs

---

---

# PHASE 2 — PRE-LAUNCH PREPARATION
### Estimated time: 2–3 weeks | Cost: ₦20,000–₦50,000

---

## 2.1 — Recruit Campus Champions

These are the people who will make or break your UNILAG launch. You need 10–15 students who are trusted, well-known, and believe in ZBD.

**Ideal campus champion profile:**
- Active in their department or hostel
- Has a significant WhatsApp group admin role
- Is trusted — people listen to them
- Preferably from a mix of faculties (Sci, Social Sci, Law, Arts, Engineering)
- Can be hustlers who want to earn by signing people up

**What they do:**
- Get 50+ people signed up from their faculty/hostel
- Be the first to post and take gigs (seed the platform)
- Report bugs and user confusion
- Attend the launch event
- Run word-of-mouth in their networks

**What they get:**
- "Founding Hustler" badge (permanent on profile)
- ₦5,000 bonus when 50 of their referrals complete their first gig
- First priority for the best gigs in their area

**Action:**
- [ ] Identify 15 target students (ask people you know at UNILAG, or post in UNILAG student groups)
- [ ] Have a 15-minute call/voice note with each one — explain the vision
- [ ] Send them this doc and the PRD
- [ ] Create a WhatsApp group for them: "ZBD Campus Team — UNILAG"
- [ ] Give each one a unique referral code (track who they sign up)

---

## 2.2 — Seed the Platform with Real Gigs

On launch day, the gig feed cannot be empty. Nobody applies to a ghost town.

**Before going live, pre-load at least 30 real gigs** — you and your campus champions post them. Use real tasks people on campus actually need.

**Gig seeding plan:**
- [ ] You post 5 gigs yourself (real tasks you or friends actually need done)
- [ ] Each campus champion posts 2 gigs minimum
- [ ] Mix categories: 10 Academic, 8 Errand, 5 Manual, 4 Social, 3 Creative
- [ ] At least 8 must be URGENT tagged
- [ ] At least 5 must be under ₦500 (low barrier to first transaction)

---

## 2.3 — Create Legal Documents

You need these on your website before accepting real money.

**Documents to create:**
- [ ] **Terms of Service** — what users agree to when they sign up
  - ZBD is a marketplace, not an employer
  - Users are responsible for the legality of their gigs
  - Payment terms and fee structure
  - Account suspension rules
  - Dispute resolution process

- [ ] **Privacy Policy** — how you handle user data (required by NDPR)
  - What data you collect (name, phone, email, student ID, location)
  - How you use it (matching gigs, sending notifications)
  - How long you keep it
  - How to request deletion

- [ ] **Acceptable Use Policy** — what gigs are prohibited
  - List of banned gig types (illegal, sexual, discriminatory, etc.)

**How to create them quickly:**
- Use https://termly.io or https://getterms.io — they generate Nigerian-law-compliant docs
- Budget ₦5,000–₦15,000 for a proper legal document
- Or use a template and have a Nigerian lawyer review: ₦20,000–₦50,000

**Action:**
- [ ] Generate/write all 3 documents
- [ ] Add them to your website footer (Terms | Privacy | Acceptable Use)
- [ ] Add checkbox to signup: "I agree to the Terms of Service and Privacy Policy"

---

## 2.4 — Set Up Customer Support

Students will have problems. They'll have questions. They'll panic if their money doesn't arrive. You need to be reachable.

- [ ] **WhatsApp Business account** — set up on a dedicated number (not your personal number)
  - Business name: Zero Broke Days Support
  - Set up automated greeting message: "Hi! We've received your message and will respond within 2 hours. For urgent payment issues, include your transaction ID."
  - Download WhatsApp Business (separate app)

- [ ] **Email support** — support@zerobrokedays.com (set up via Google Workspace or Resend)

- [ ] **Create a FAQ page** on your website covering:
  - How do I get paid?
  - How long does payment take?
  - What if a poster doesn't confirm my gig?
  - How do I dispute a gig?
  - How do I get verified?
  - Can I post any type of gig?

- [ ] **Response time commitment:** reply to every support message within 4 hours during MVP. You are the support team. This is non-negotiable during launch.

---

## 2.5 — Create Social Media Presence

You need to be findable before launch.

**Platforms to set up (in priority order for UNILAG students):**

- [ ] **Instagram** — @zerobrokedays
  - Profile bio: "Campus gig platform 🎓 | Post anything, earn same day 💸 | Launching @UNILAG first"
  - Link in bio: your website
  - Pre-load: 6–9 posts before launch (mockup screenshots, "what's a ZBD gig?" explainers, testimonial-style graphics)

- [ ] **Twitter/X** — @zerobrokedays or @nobrokedayz
  - Post 1 tweet per day from 2 weeks before launch
  - Type of content: "You can post a gig to get someone to queue at the Registrar's for you on ZBD. Launching soon at UNILAG."
  - Engage with UNILAG student Twitter accounts

- [ ] **WhatsApp Channel** — "Zero Broke Days"
  - Post updates, gig highlights, success stories

- [ ] **TikTok** (optional but powerful for Gen Z students)
  - Short videos: "Name a gig you'd post on ZBD" → comment section becomes your market research

---

## 2.6 — Run a Closed Beta (100 Students)

Before the full launch, do a quiet 2-week beta with 100 students. These are real people using the real product with real money.

**Who to invite:**
- Your 15 campus champions + their close network
- Students from at least 4 different faculties
- Mix of "hustlers" (will take gigs) and "seekers" (will post gigs)

**Beta goals:**
- At least 50 gigs posted
- At least 30 gigs completed with payment
- 0 money lost or stuck due to bugs
- Collect 20 written feedback responses

**Beta feedback collection:**
- [ ] Create a Google Form: "ZBD Beta Feedback" (10 questions max)
- [ ] Send to all beta users at end of Week 1 and Week 2
- [ ] Questions: What gig did you post/take? Was payment smooth? What confused you? What would make you use this every week?

**Action:**
- [ ] Invite 100 students to beta (send unique invite link)
- [ ] Monitor everything in Supabase dashboard daily
- [ ] Fix any payment bugs within 24 hours of discovery
- [ ] Personally message every user who had a problem

---

## 2.7 — Plan the Launch Event

You are launching a movement, not an app. The launch should feel like that.

**Event concept: "ZBD LAUNCH — UNILAG"**
- Venue: somewhere visible on campus (SUB common area, a faculty auditorium, or just a large open space)
- Time: Week 1 of a new semester (when students are back, fresh, broke, and motivated)
- Attendance: invite at minimum your 15 champions + their networks, target 100–200 people

**What happens at the event:**
- 15-minute pitch: what ZBD is, why it exists, what makes it different
- Live demo: post a gig on stage, have someone apply and "get paid" in real time
- First live gig posted on stage with a real ₦2,000 transaction
- Sign-up drive: QR code on screen, get people to sign up in the room
- Giveaways: first 50 sign-ups get ₦500 ZBD credit each

**Budget for launch event:**
- Venue: ₦0–₦10,000 (try to get a faculty/dept to host, or use an outdoor space)
- Printed flyers/banners: ₦5,000–₦15,000
- Giveaway credits (50 × ₦500): ₦25,000 (this is subsidised by you as a launch cost — you make it back in transaction fees)
- Total: ₦30,000–₦50,000

---

**Phase 2 Checkpoint — before Phase 3:**
- [ ] 15 campus champions recruited and briefed
- [ ] 30+ gigs pre-loaded on platform
- [ ] Legal documents live on website
- [ ] WhatsApp Business support set up
- [ ] Instagram + Twitter set up and active
- [ ] Closed beta complete — 30+ gigs completed successfully
- [ ] All critical beta bugs fixed
- [ ] Launch event planned, venue confirmed, date set

---

---

# PHASE 3 — LAUNCH DAY
### The day everything goes public

---

## 3.1 — The Week Before Launch

- [ ] Switch Paystack from Test Mode to Live Mode
- [ ] Test one real payment (pay ₦100 to a test bank account from your live Paystack account — confirm it arrives)
- [ ] Update all environment variables to live Paystack keys
- [ ] Deploy final build to Vercel
- [ ] Connect your domain to Vercel (DNS settings)
- [ ] Test the full site on your domain (https://zerobrokedays.com)
- [ ] Test on mobile (Android + iOS)
- [ ] Make sure SSL certificate is active (Vercel handles this automatically)
- [ ] Send reminder messages to all beta users: "We go live [date]. Tell your friends."
- [ ] Print 200 flyers with QR code linking to your site
- [ ] Brief all campus champions — they know what to do on launch day
- [ ] Pre-write your launch tweet and Instagram caption

---

## 3.2 — Launch Day Checklist

**Morning (before the event):**
- [ ] Check Supabase dashboard — everything running normally
- [ ] Check Paystack — live mode active, balance visible
- [ ] Post on Instagram and Twitter: "We go live today. 🔓 @UNILAG — link in bio."
- [ ] Send WhatsApp blast to entire waitlist: "ZBD is live. Sign up now: [link]"
- [ ] Campus champions distribute flyers across hostels and faculties

**At the event:**
- [ ] Live demo on screen — walk through posting and completing a gig
- [ ] First real transaction happens on stage
- [ ] Collect signups via QR code (track in real time on Supabase dashboard)
- [ ] Photograph everything for social media

**Evening:**
- [ ] Post "We're live" recap on Instagram Stories and Twitter
- [ ] Respond to every DM, comment, and WhatsApp message
- [ ] Check Supabase: how many signups? How many gigs posted?
- [ ] Check for any payment errors in Paystack dashboard

---

## 3.3 — Launch Day Targets

Know what success looks like on Day 1:

| Metric | Target |
|---|---|
| Signups | 200+ |
| Verified users | 50+ (manual verification will be your bottleneck) |
| Gigs posted | 40+ |
| Gigs with applications | 20+ |
| Gigs completed with payment | 5+ |
| WhatsApp support messages received | Handle all within 4 hrs |

---

---

# PHASE 4 — FIRST 30 DAYS AFTER LAUNCH
### Keep the machine running. Gather data. Improve fast.

---

## 4.1 — Daily Operations (Week 1–2)

**Every single day:**
- [ ] Check Supabase — new signups, gigs posted, transactions
- [ ] Verify student IDs in admin panel (target: clear the queue daily)
- [ ] Respond to all support messages within 4 hours
- [ ] Monitor Paystack — flag any failed payments or stuck transfers
- [ ] Post one piece of content on Instagram or Twitter

**Every week:**
- [ ] Review the 5 most common support issues — build a solution into the product
- [ ] Review 3 most common types of gigs being posted — feature them more prominently
- [ ] Message your 15 campus champions — what are they hearing from students?

---

## 4.2 — What to Measure

Track these weekly. If you're not measuring, you don't know if you're winning.

| Metric | Where to check |
|---|---|
| New signups per day | Supabase → users table |
| Verified users | Supabase → users where is_verified = true |
| Gigs posted per day | Supabase → gigs table |
| Gig completion rate | completed gigs ÷ total gigs |
| Average gig value | avg of transactions.amount |
| Total GMV (money transacted) | sum of transactions.amount |
| Platform revenue (9% of GMV) | sum of transactions.platform_fee |
| Dispute rate | disputed transactions ÷ total transactions |
| Average time-to-first-application | avg time between gig posted and first application |

**Target for 30 days post-launch:**
- 500+ registered users
- 100+ verified users
- 200+ gigs posted
- 100+ gigs completed
- ₦500,000+ in total GMV
- Dispute rate below 5%

---

## 4.3 — Iterate Fast

The MVP will have problems. That's expected. What matters is how fast you fix them.

**Prioritisation framework for post-launch bugs and improvements:**
1. **Fix immediately (same day):** payment bugs, money stuck, users locked out
2. **Fix this week:** friction in core flows (posting, applying, chat)
3. **Fix this month:** UX improvements, non-critical features
4. **Backlog:** nice-to-haves, future features

**What to improve in the first 30 days (based on common early-stage issues):**
- [ ] Speed up student ID verification (if queue is building up, verify faster or add auto-approval for clear cases)
- [ ] Add a "Gig Posted Successfully" share card (students share to WhatsApp — free marketing)
- [ ] Add a "Payment Received" animation (feels good, encourages repeat use)
- [ ] Add a way to report a gig as inappropriate (flag button on gig cards)

---

## 4.4 — Collect Success Stories

Your early user stories are your most powerful marketing asset. Collect them aggressively.

- [ ] After every completed gig, send a message: "How did it go? Mind if we share your story? (anonymous is fine)"
- [ ] Collect screenshots of wallet payouts (with user permission)
- [ ] Document the most unusual, memorable gigs (the hostel-light errand, the event seats gig — these are the stories that make people understand ZBD)
- [ ] Use these stories on Instagram, Twitter, and in your pitch to investors

---

## 4.5 — Start Planning University 2

While UNILAG is live and growing, start laying groundwork for the next campus.

**Decide on University 2 (choose based on where you have the best personal network):**
Options: UI (Ibadan), OAU (Ile-Ife), UNN (Nsukka), LASU (Ojo)

- [ ] Identify 3–5 students at target university who can be early champions
- [ ] Have a call with them — gauge interest
- [ ] Share the UNILAG case study once you have 30-day data
- [ ] Plan a soft launch for University 2 in Month 3

---

---

# COST SUMMARY — EVERYTHING IN ONE PLACE

## One-Time Costs

| Item | Min | Max |
|---|---|---|
| CAC Business Name Registration | ₦10,000 | ₦50,000 (with agent) |
| Domain name (2 years) | ₦10,000 | ₦20,000 |
| Legal documents (Terms, Privacy) | ₦5,000 | ₦50,000 (lawyer review) |
| Launch event (venue, flyers, giveaway credits) | ₦30,000 | ₦60,000 |
| Developer fee (if hiring) | ₦0 (build yourself) | ₦400,000 |
| Logo + brand assets | ₦0 (already done) | ₦0 |
| **TOTAL ONE-TIME** | **₦55,000** | **₦580,000** |

---

## Monthly Running Costs (MVP Phase)

| Service | Free Tier | Paid |
|---|---|---|
| Vercel (hosting) | ✅ Free | N/A |
| Supabase (database + auth + storage + realtime) | ✅ Free (up to 50K MAU) | $25/mo = ₦40,000 |
| Paystack (payment processing) | ✅ Free | 1.5% + ₦100 per txn |
| Termii (SMS) | No free tier | ~₦3,000–₦5,000/mo |
| Resend (email) | ✅ Free (3K emails/mo) | $20/mo when you scale |
| Domain (monthly equiv.) | — | ₦700–₦900/mo |
| Google Workspace (email) | No | ₦1,200/mo |
| **TOTAL MONTHLY** | **₦0** | **~₦5,000–₦7,800/mo** |

*Paystack fees are variable — you collect them from gig value, so they're self-funding.*

---

## Revenue Projection (If Things Go Well)

| Month | Active Users | GMV | ZBD Revenue (9%) |
|---|---|---|---|
| Month 1 (launch) | 150 | ₦540,000 | ₦48,600 |
| Month 2 | 400 | ₦1.6M | ₦144,000 |
| Month 3 | 800 | ₦3.2M | ₦288,000 |
| Month 6 | 2,500 | ₦10M | ₦900,000 |
| Month 12 | 8,000 | ₦32M | ₦2.88M |

*Revenue pays for all infrastructure costs from Month 2 onwards.*

---

---

# FULL ACCOUNT / SUBSCRIPTION CHECKLIST

## Accounts to Create (all free to set up)
- [ ] GitHub — github.com
- [ ] Vercel — vercel.com
- [ ] Supabase — supabase.com
- [ ] Paystack Business — paystack.com/ng (requires CAC + bank account)
- [ ] Termii — termii.com
- [ ] Resend — resend.com
- [ ] Bitwarden — bitwarden.com (store all passwords here)
- [ ] Notion — notion.so (product management, feedback, bugs)
- [ ] Google Analytics — analytics.google.com
- [ ] PostHog — posthog.com
- [ ] Instagram — @zerobrokedays
- [ ] Twitter/X — @nobrokedayz (or @zerobrokedays)
- [ ] WhatsApp Business — separate number for support

## Paid Subscriptions (what you'll actually pay monthly)
- [ ] Termii — top up ₦5,000 before launch, refill as needed
- [ ] Domain — auto-renew annually
- [ ] Google Workspace — ₦1,200/mo (optional but recommended)
- [ ] Supabase Pro — $25/mo only when you exceed free tier (you'll know when)

## One-Time Purchases
- [ ] Domain name (Qservers.net or Namecheap)
- [ ] CAC registration (cac.gov.ng or through an agent)

---

---

# THE MOBILE APP — WHAT COMES AFTER MVP

When the MVP has proven itself (500+ active users, consistent transactions, stable product), you build the mobile app.

**Stack:** React Native + Expo
- 60–70% of your React web code can be reused
- Supabase JS SDK works identically in React Native
- Paystack has a React Native SDK

**Timeline for mobile app (after MVP is validated):** 6–10 weeks additional development

**Store submission:**
- [ ] Google Play Console — $25 one-time fee — play.google.com/console
- [ ] Apple App Store Connect — $99/year — developer.apple.com

**App review times:**
- Google Play: 3–7 days
- Apple App Store: 7–14 days (stricter, requires more preparation)

**Before submitting to stores:**
- [ ] App icon (1024×1024 PNG, no rounded corners — stores add them)
- [ ] App screenshots (minimum 3 per device size)
- [ ] App Store description (max 4,000 characters — write it carefully)
- [ ] Privacy policy URL (already created in Phase 2)
- [ ] Age rating questionnaire

**Name your app:** "ZBD — No Broke Days" or "Zero Broke Days"

---

---

# THINGS THAT WILL TRY TO STOP YOU — AND HOW TO HANDLE THEM

| Problem | What to do |
|---|---|
| Paystack Transfer API keeps failing | Test with smaller amounts first. Check webhook logs. Call Paystack support (they're responsive). |
| Nobody is posting gigs at launch | Your campus champions must have 30 gigs ready. You seed the demand. |
| Students don't trust the payment | Do a public demo of a real ₦1,000 transfer to someone's bank account on your Instagram Live. |
| UNILAG admin asks what you're doing | Have a one-page explainer: "ZBD is a student peer-to-peer marketplace. We are not affiliated with UNILAG but operate on campus. All users are verified students." Be polite, proactive, and transparent. |
| A payment gets stuck and a student is upset | Manually transfer from your ZBD Paystack balance to their account. Apologise. Fix the bug. This will happen once. |
| Someone posts an inappropriate gig | Admin panel flag → delete immediately → suspend account if repeat offender. |
| Student claims work was done but poster won't confirm | Review chat history. If work is evidenced, force-release payment. Update your Terms to formalize this. |
| Competitor copies the idea | Execution is the moat. You have the campus relationships, the verified users, the trust. A copy without community is nothing. Move faster. |

---

---

# FINAL CHECKLIST — LAUNCH-READY AUDIT

You are ready to launch when every box below is ticked.

## Legal & Business
- [ ] CAC registered
- [ ] Business bank account open
- [ ] Paystack business account verified
- [ ] Paystack Transfer API enabled
- [ ] Terms of Service live on site
- [ ] Privacy Policy live on site
- [ ] Acceptable Use Policy live on site

## Product
- [ ] All 13 screens built
- [ ] Payment flow tested end-to-end (5+ times)
- [ ] Student ID verification working
- [ ] Chat working in real time
- [ ] Wallet working (top up + withdrawal)
- [ ] Notifications working (SMS + in-app)
- [ ] PWA installable on Android + iOS
- [ ] Admin panel working
- [ ] No High-severity bugs
- [ ] Site loads on mobile in under 3 seconds on 4G
- [ ] Paystack on LIVE mode

## Operations
- [ ] 15 campus champions briefed
- [ ] 30+ gigs pre-loaded
- [ ] WhatsApp Business support ready
- [ ] Closed beta complete (30+ successful transactions)
- [ ] Google Analytics active on site
- [ ] PostHog event tracking active

## Marketing
- [ ] Domain live and connected to Vercel
- [ ] Instagram account active with 6+ posts
- [ ] Twitter/X active with 10+ tweets
- [ ] Launch event planned (date, venue, agenda)
- [ ] 200 flyers printed

---

*"Every student who is willing to work should be able to eat today. Not next week. Today. That is what Zero Broke Days is for."*

*— NBD Founding Document*

---

**Document version:** 1.0  
**Last updated:** 2026  
**Owner:** Zero Broke Days Founding Team
