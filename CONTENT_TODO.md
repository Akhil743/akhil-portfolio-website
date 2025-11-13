# Portfolio Content Checklist

This document contains all the content placeholders that need to be filled in to complete your portfolio website.

## Priority 1: Essential Content

### Resume & Profile
- [ ] **Upload Resume PDF** - Add your latest resume as `resume.pdf` in the root directory
- [ ] **Update Profile Photo** - Replace `profile.jpg` with your professional headshot (square, min 800x800px)
- [ ] **Update Bio** - Review and update the hero section bio in `index.html` (lines 104-108)

### Contact Form Setup
- [ ] **Web3Forms API Key** - Get free API key from https://web3forms.com
  - Sign up with your email
  - Copy your access key
  - Replace `YOUR_ACCESS_KEY_HERE` in `index.html` (line 778)
  - Also update in `config.js` (line 29)

### Favicon
- [ ] **Create Favicon** - Generate and add favicon files
  - Use https://realfavicongenerator.net/
  - Upload your logo/photo
  - Download the package
  - Place files in root directory
  - Update `<link>` tag in `index.html` (line 63)

## Priority 2: Content Updates

### Hero Section
- [ ] Review availability badge text (line 99)
- [ ] Update hero headline if needed (line 102)
- [ ] Review tagline (line 103)

### About Section
- [ ] Review "About Me" content (lines 120-132)
- [ ] Update statistics if needed (lines 134-149)
- [ ] Verify education details are accurate

### Experience Timeline
- [ ] Verify all dates are current
- [ ] Update achievement tags for each role
- [ ] Add any missing recent positions
- [ ] Review metrics and impact statements

### Projects Section
- [ ] **Add Project Images** - Create placeholder images or screenshots for each project
  - Recommended size: 1200x675px (16:9 ratio)
  - Add to project cards header
- [ ] Review all project descriptions for accuracy
- [ ] Update project metrics with latest numbers
- [ ] Verify project categories are correctly assigned

### Skills Section
- [ ] Review all skill levels (percentages in `index.html`)
- [ ] Update skill list to reflect current expertise
- [ ] Remove or add skill categories as needed
- [ ] Consider removing emoji icons from skill category headings (lines 464-467, 505-508, 546-549)

### Writing/Articles Section
- [ ] **Add Real Articles** - Replace "Coming Soon" placeholders with actual published articles
  - Update article titles
  - Add publication dates
  - Update article links
  - Add article cover images or keep placeholder
- [ ] If no articles yet, consider removing this section temporarily

## Priority 3: Testimonials & Social Proof

### Testimonials Section
- [ ] **Collect Testimonials** - Reach out to colleagues/managers for recommendations
  - Export LinkedIn recommendations
  - Format for website (keep quotes concise, ~2-3 sentences)
  - Get permission to use publicly
- [ ] **Add Testimonial Content** in `index.html` (lines 668-720)
  - Replace placeholder text
  - Add author names and titles
  - Optionally add author photos (recommended size: 96x96px, circular crop)
- [ ] If no testimonials available, remove section or add note "Testimonials coming soon"

## Priority 4: Technical & SEO

### Meta Tags & SEO
- [x] Updated domain to akhilrajs.com
- [x] Added structured data (JSON-LD)
- [ ] **Verify SEO** - Test with:
  - Google Rich Results Test: https://search.google.com/test/rich-results
  - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
  - Twitter Card Validator: https://cards-dev.twitter.com/validator

### Analytics Setup (Optional)
- [ ] **Google Analytics 4** setup
  - Create GA4 property
  - Get measurement ID (G-XXXXXXXXXX)
  - Update in `config.js` (line 38)
  - Add GA script to `index.html` `<head>` section
  
### Accessibility
- [ ] Test with screen reader
- [ ] Check color contrast ratios
- [ ] Verify all images have alt text
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit in Chrome DevTools

## Priority 5: Polish & Testing

### Cross-Browser Testing
- [ ] Chrome (Desktop & Mobile)
- [ ] Safari (Desktop & Mobile) 
- [ ] Firefox
- [ ] Edge

### Mobile Responsiveness
- [ ] Test on actual mobile device
- [ ] Check all sections are readable
- [ ] Verify CTAs are easily clickable
- [ ] Test navigation menu on mobile
- [ ] Check form usability on mobile

### Content Review
- [ ] Proofread all text for typos
- [ ] Verify all links work
- [ ] Check all images load properly
- [ ] Test contact form submission
- [ ] Review page load speed

### Final Checks
- [ ] Test project filtering buttons
- [ ] Verify smooth scrolling navigation
- [ ] Check all animations work smoothly
- [ ] Test on slow internet connection
- [ ] Get feedback from 2-3 trusted colleagues

## Deployment Checklist

### Pre-Deploy
- [ ] Remove all TODO comments from HTML
- [ ] Update README.md with deployment info
- [ ] Test locally one more time
- [ ] Compress images (use TinyPNG or similar)

### Deploy to Vercel (Recommended)
1. [ ] Create Vercel account
2. [ ] Connect GitHub repository
3. [ ] Configure custom domain (akhilrajs.com)
4. [ ] Set up DNS records in GoDaddy
5. [ ] Enable HTTPS
6. [ ] Test live site

### Post-Deploy
- [ ] Submit sitemap to Google Search Console
- [ ] Share on LinkedIn
- [ ] Update LinkedIn profile with website link
- [ ] Add website to email signature
- [ ] Monitor contact form submissions

## Quick Reference: Key Files to Update

- `index.html` - Main content (text, links, project details)
- `config.js` - Configuration values (API keys, social links)
- `resume.pdf` - Your latest resume
- `profile.jpg` - Your profile photo
- `style.css` - Design tweaks (mostly complete)
- `script.js` - Functionality (mostly complete)

## Support & Resources

- **Web3Forms Docs**: https://docs.web3forms.com/
- **Vercel Deployment**: https://vercel.com/docs
- **GoDaddy DNS Setup**: https://www.godaddy.com/help/manage-dns-records-680
- **Image Optimization**: https://tinypng.com/
- **Favicon Generator**: https://realfavicongenerator.net/
- **Accessibility Checker**: https://wave.webaim.org/

---

**Last Updated**: November 2025  
**Version**: 2.0 - Modern Minimalist Redesign

