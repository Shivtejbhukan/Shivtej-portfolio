# Shivtej Bhukan Portfolio Website

A premium personal portfolio website built with HTML5, CSS3, Bootstrap 5 and Vanilla JavaScript.

## How to edit personal information
1. Open `index.html`.
2. Update the hero section text, the about description, personal details, and service titles.
3. Replace any placeholder URLs in links for GitHub, LinkedIn, email, and social media.

## How to replace profile photo
1. Add your image to `images/profile.jpg`.
2. Replace the placeholder file with your real image using the same file name.
3. The hero image will automatically display the new photo.

## How to replace resume
1. Place your resume in `resume/resume.pdf`.
2. Keep the file name as `resume.pdf`.
3. The download and view buttons on the website will use that file.

## How to update project screenshots
1. Place screenshot files in `images/projects/`.
2. Replace `project1.png`, `project2.png`, and `project3.png` with your own images.
3. Keep the file names or update the `src` paths in `index.html` to match your new file names.

## How to update project links
1. Open `index.html`.
2. Locate each project card and update the `href` values for GitHub and Live Demo.
3. Update the modal `data-image`, `data-title`, `data-description`, and `data-tech` attributes if needed.

## How to configure EmailJS
1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Create a new service and template.
3. Open `js/script.js`.
4. Replace `YOUR_EMAILJS_SERVICE_ID`, `YOUR_EMAILJS_TEMPLATE_ID`, and `YOUR_EMAILJS_PUBLIC_KEY` with your EmailJS values.
5. Update the template fields if your EmailJS template uses different names.

## How to update social media links
1. Open `index.html`.
2. Replace the placeholder profile URLs in the footer, hero buttons, contact cards, and coding profile cards.
3. Use your actual GitHub, LinkedIn, Instagram, Twitter, LeetCode, HackerRank, CodeChef, Codeforces, and GeeksforGeeks links.

## How to deploy on Vercel
1. Sign in to [Vercel](https://vercel.com/).
2. Import the repository from GitHub.
3. Set the root directory to the project root.
4. Deploy. Vercel will serve static HTML, CSS, and JS automatically.

## How to deploy on Netlify
1. Sign in to [Netlify](https://netlify.com/).
2. Create a new site from Git.
3. Select the repository and set the build command to none.
4. Set the publish directory to `/`.
5. Deploy the site.

## Folder structure explanation
- `index.html` — the main portfolio page.
- `css/style.css` — custom styles for layout, theme, and glassmorphism.
- `js/script.js` — theme toggle, typed text, project search, EmailJS, particles, and counters.
- `images/` — profile photo, favicon, and project screenshots.
- `resume/resume.pdf` — downloadable resume.
- `assets/` — reserved for additional resources.
- `manifest.json` — PWA manifest and mobile theme support.

## SEO customization
1. Update the `<meta>` tags in `index.html` for `description`, `keywords`, `author`, and social sharing tags.
2. Change `og:url` and `twitter:image` values to match your deployed site and images.
3. Update the `canonical` link to your actual domain.

## How to add a custom domain
1. Add your custom domain in Vercel or Netlify settings.
2. Configure DNS records with your domain provider.
3. Use `CNAME` or `A` records as provided by the platform.
4. Verify that the domain points to your deployed site.

## How to update the visitor counter
1. Open `js/script.js`.
2. Modify the `totalKey` and `todayKey` values in `updateVisitorCount()` if you want a different CountAPI namespace or key.
3. Save and redeploy the site.

## How to add more projects in the future
1. Copy an existing project card block inside the `#projectGrid` container in `index.html`.
2. Update the image, title, description, tags, and links.
3. Add or update the button `data-` attributes for the project modal.
4. Save your changes and refresh the site.
