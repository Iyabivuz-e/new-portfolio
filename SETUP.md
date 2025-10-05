# Setup Instructions

## Environment Variables

1. Create a `.env.local` file in the root directory
2. Copy the contents from `.env.example`
3. Fill in your actual values:

### Required Environment Variables:

#### Resend API (for contact form)
- `RESEND_API_KEY`: Get your API key from [Resend](https://resend.com/api-keys)

#### Public Contact Information
- `NEXT_PUBLIC_EMAIL`: Your email address
- `NEXT_PUBLIC_PHONE`: Your phone number

#### Social Media URLs
- `NEXT_PUBLIC_LINKEDIN_URL`: Your LinkedIn profile URL
- `NEXT_PUBLIC_GITHUB_URL`: Your GitHub profile URL
- `NEXT_PUBLIC_TWITTER_URL`: Your Twitter/X profile URL
- `NEXT_PUBLIC_INSTAGRAM_URL`: Your Instagram profile URL
- `NEXT_PUBLIC_FACEBOOK_URL`: Your Facebook profile URL

## Project Images

### Required Image
Add the following image to the `/public` directory:

- **`ai-paper-explainer.png`** - Screenshot or preview image of the AI Paper Explainer project

### Recommended Image Specifications:
- Format: PNG or JPG
- Dimensions: 1200x800px (or similar aspect ratio)
- File size: Optimized for web (< 500KB)
- Quality: High resolution for retina displays

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Start Production

```bash
npm start
```

## Contact Form Setup

The contact form now uses Resend for email delivery. You'll need to:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file as `RESEND_API_KEY`
4. Emails will be sent to `iyabivuzed@gmail.com` (configured in the code)

Note: With the free Resend plan, you can send emails from `onboarding@resend.dev`. To use your own domain, you'll need to verify it in the Resend dashboard.
