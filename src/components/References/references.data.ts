export const referencesData: Record<
  string,
  { title: string; description: string; link: string }[]
> = {
  Mobile: [
    {
      title: "React Native",
      description:
        "A framework for building native mobile apps using React and JavaScript.",
      link: "https://reactnative.dev/",
    },
    {
      title: "Expo",
      description:
        "A platform and set of tools built around React Native to help you build, deploy, and iterate on iOS, Android, and web apps.",
      link: "https://expo.dev/",
    },
    {
      title: "Expo Vector Icons",
      description:
        "A curated collection of popular icon sets (FontAwesome, MaterialIcons, Ionicons, and more) optimized for Expo and React Native.",
      link: "https://icons.expo.fyi/",
    },
  ],
  Frontend: [
    {
      title: "MDN Web Docs",
      description: "Comprehensive documentation for HTML, CSS, and JavaScript.",
      link: "https://developer.mozilla.org/",
    },
    {
      title: "Can I Use",
      description: "Browser support tables for modern web technologies.",
      link: "https://caniuse.com/",
    },
    {
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      link: "https://reactjs.org/",
    },
    {
      title: "React Icons",
      description:
        "Popular icon packs (Font Awesome, Heroicons, etc.) as React components. Easily customizable and lightweight.",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      title: "Redux Toolkit",
      description:
        "The official, recommended way to write Redux logic. Simplifies store setup, reduces boilerplate, and includes powerful tools like createSlice and createAsyncThunk.",
      link: "https://redux-toolkit.js.org/",
    },
    {
      title: "Vite",
      description:
        "A fast, opinionated frontend build tool that serves your code via native ESM and bundles it with lightning-fast Rollup.",
      link: "https://vitejs.dev/",
    },
    {
      title: "Next.js",
      description:
        "A full-stack React framework with built-in SSR, API routes, and file-based routing.",
      link: "https://nextjs.org/",
    },
    {
      title: "i18next",
      description:
        "Internationalization-framework written in and for JavaScript. Provides comprehensive i18n support for browser, Node.js, React, and more.",
      link: "https://www.i18next.com/",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
      link: "https://tailwindcss.com/",
    },
    {
      title: "Tailwind UI",
      description:
        "Beautifully crafted components and templates built by the creators of Tailwind CSS, designed to help you build modern UIs faster.",
      link: "https://tailwindui.com/",
    },
  ],
  "Design / UI Resources": [
    {
      title: "Cascadia Code",
      description:
        "A monospaced font designed for code, optimized for readability and includes programming ligatures.",
      link: "https://github.com/microsoft/cascadia-code",
    },
    {
      title: "Google Fonts",
      description:
        "A library of open-source fonts optimized for the web, easily integrated with web projects via CSS.",
      link: "https://fonts.google.com/",
    },
    {
      title: "Unsplash",
      description:
        "A platform offering high-resolution, royalty-free images for creative use by developers, designers, and marketers.",
      link: "https://unsplash.com/",
    },
    {
      title: "Pexels",
      description:
        "Free stock photos and videos shared by talented creators for personal and commercial use.",
      link: "https://www.pexels.com/",
    },
    {
      title: "Pinterest",
      description:
        "A visual discovery platform widely used for design inspiration, mood boards, and creative reference ideas in UI/UX, branding, and more.",
      link: "https://www.pinterest.com/",
    },
    {
      title: "Storyset",
      description:
        "Free customizable illustrations for your web projects. Easily edit colors, style, and format.",
      link: "https://storyset.com/",
    },
    {
      title: "unDraw",
      description:
        "Open-source illustrations for any idea you can imagine and create. Free to use without attribution.",
      link: "https://undraw.co/",
    },
    {
      title: "ILoveIMG",
      description:
        "A handy online toolkit for image compression, resizing, cropping, and more — all in one place.",
      link: "https://www.iloveimg.com/",
    },
    {
      title: "Logo.com",
      description:
        "An easy-to-use logo maker that helps you create professional-quality logos with AI assistance, brand kits, and templates.",
      link: "https://logo.com/",
    },
    {
      title: "GIMP",
      description:
        "A free and open-source image editor for tasks such as photo retouching, image composition, and graphic design. Often seen as a free alternative to Photoshop.",
      link: "https://www.gimp.org/",
    },
    {
      title: "SVGRepo",
      description:
        "A huge collection of free SVG vectors and icons for personal and commercial use. Ideal for UI design, presentations, and web projects.",
      link: "https://www.svgrepo.com/",
    },
  ],
  Backend: [
    {
      title: "SQLite",
      description:
        "A lightweight, serverless, self-contained SQL database engine, ideal for embedded use.",
      link: "https://www.sqlite.org/",
    },
    {
      title: "PostgreSQL",
      description: "A powerful, open-source object-relational database system.",
      link: "https://www.postgresql.org/",
    },
    {
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome’s V8 engine for building scalable network applications.",
      link: "https://nodejs.org/",
    },
    {
      title: "Express.js",
      description:
        "A minimal and flexible Node.js web application framework providing a robust set of features.",
      link: "https://expressjs.com/",
    },
    {
      title: "NestJS",
      description:
        "A progressive Node.js framework for building efficient server-side applications.",
      link: "https://nestjs.com/",
    },
    {
      title: "TypeORM",
      description:
        "A modern ORM for TypeScript and JavaScript (ES7+), supporting Active Record and Data Mapper patterns.",
      link: "https://typeorm.io/",
    },
    {
      title: "Prisma",
      description:
        "Next-generation Node.js and TypeScript ORM. Type-safe, performant, and intuitive for modern app development.",
      link: "https://www.prisma.io/",
    },
    {
      title: "Passport.js",
      description:
        "Simple, unobtrusive authentication for Node.js. Supports over 500 strategies for social login, JWT, OAuth, and more.",
      link: "https://www.passportjs.org/",
    },
    {
      title: "Redis",
      description:
        "An open-source, in-memory data structure store, used as a database, cache, and message broker.",
      link: "https://redis.io/",
    },
    {
      title: "Socket.IO",
      description:
        "A real-time bidirectional communication library for web apps using WebSockets and fallbacks.",
      link: "https://socket.io/",
    },
  ],
  "DevOps / Testing": [
    {
      title: "Ubuntu",
      description:
        "A popular open-source Linux distribution based on Debian, widely used in servers, development, and security testing.",
      link: "https://ubuntu.com/",
    },
    {
      title: "Nginx",
      description:
        "A high-performance web server, reverse proxy, and load balancer for HTTP, HTTPS, and more.",
      link: "https://nginx.org/",
    },
    {
      title: "Docker",
      description:
        "An open platform for developing, shipping, and running applications using containerization.",
      link: "https://www.docker.com/",
    },
    {
      title: "Git",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
      link: "https://git-scm.com/",
    },
    {
      title: "GitHub",
      description:
        "A web-based platform for hosting and collaborating on Git repositories, widely used for open source and enterprise development.",
      link: "https://github.com/",
    },
    {
      title: "PM2",
      description: "Production process manager for Node.js applications.",
      link: "https://pm2.keymetrics.io/",
    },
    {
      title: "Vitest",
      description: "A blazing fast unit test framework powered by Vite.",
      link: "https://vitest.dev/",
    },
  ],
  "Infrastructure / Hosting": [
    {
      title: "Vultr",
      description:
        "Cloud computing platform offering high-performance SSD VPS, bare metal, and Kubernetes hosting worldwide.",
      link: "https://www.vultr.com/",
    },
    {
      title: "DigitalOcean",
      description:
        "Cloud infrastructure provider offering scalable compute, storage, and networking solutions, popular among developers and startups.",
      link: "https://www.digitalocean.com/",
    },
    {
      title: "Domain.com",
      description:
        "A domain name registrar offering domain names, email, and hosting solutions.",
      link: "https://www.domain.com/",
    },
    {
      title: "Namecheap",
      description:
        "Affordable domain registration, web hosting, and privacy protection services.",
      link: "https://www.namecheap.com/",
    },
    {
      title: "GoDaddy",
      description:
        "Popular domain registrar and hosting provider offering domains, email, and website services.",
      link: "https://www.godaddy.com/",
    },
  ],
  "Cloud Platforms / Developer Consoles": [
    {
      title: "OpenAI",
      description:
        "AI research and deployment company offering APIs for language models, embeddings, image generation, and more.",
      link: "https://openai.com/",
    },
    {
      title: "Google Cloud Console",
      description:
        "Web-based UI for managing Google Cloud services including compute, storage, databases, and APIs.",
      link: "https://console.cloud.google.com/",
    },
    {
      title: "Facebook for Developers",
      description:
        "Platform to manage Facebook apps, access APIs like Facebook Login, Graph API, and integrate social features.",
      link: "https://developers.facebook.com/",
    },
  ],
  "Security / Pentesting": [
    {
      title: "Let's Encrypt",
      description:
        "Free, automated, and open SSL/TLS certificate authority to enable HTTPS on websites.",
      link: "https://letsencrypt.org/",
    },
    {
      title: "SSH.com",
      description:
        "Secure Shell (SSH) resources, tools, and best practices for secure remote access and file transfer.",
      link: "https://www.ssh.com/",
    },
    {
      title: "OAuth 2.0",
      description:
        "An open standard for access delegation, widely used for secure authorization across web and mobile platforms.",
      link: "https://oauth.net/2/",
    },
    {
      title: "CIS Benchmarks",
      description:
        "Security best practices for configuring systems and cloud infrastructure.",
      link: "https://www.cisecurity.org/cis-benchmarks/",
    },
    {
      title: "OWASP",
      description:
        "Open Web Application Security Project – web app security best practices.",
      link: "https://owasp.org/",
    },
    {
      title: "OSINT Framework",
      description: "A structured collection of OSINT tools and resources, organized by categories to aid in intelligence gathering and investigations.",
      link: "https://osintframework.com/"
    },
    {
      title: "Maigret",
      description:
        "OSINT Tool for collecting a digital footprint of a username across 500+ websites.",
      link: "https://github.com/soxoj/maigret",
    },
    {
      title: "SpiderFoot",
      description: "An open-source OSINT automation tool that scans domains, IPs, emails, and more to gather intelligence from hundreds of sources automatically.",
      link: "https://www.spiderfoot.net/"
    },
    {
      title: "theHarvester",
      description:
        "OSINT Tool for gathering emails, subdomains, hosts, employee names, and more from public sources.",
      link: "https://github.com/laramies/theHarvester",
    },
    {
      title: "Nmap",
      description:
        "A powerful open-source network scanner used for network discovery, security auditing, and penetration testing.",
      link: "https://nmap.org/",
    },
    {
      title: "Metasploit",
      description:
        "A penetration testing framework that helps security professionals find, exploit, and validate vulnerabilities.",
      link: "https://www.metasploit.com/",
    },
    {
      title: "Wireshark",
      description:
        "A network protocol analyzer that lets you capture and interactively browse traffic running on a computer network.",
      link: "https://www.wireshark.org/",
    },
  ],
  "Docs / Tools": [
    {
      title: "Big-O Cheat Sheet",
      description:
        "Quick reference for time and space complexity of common data structures and algorithms.",
      link: "https://www.bigocheatsheet.com/",
    },
    {
      title: "cppreference",
      description:
        "An extensive wiki-style reference for C++ language and standard libraries, covering modern C++ features and best practices.",
      link: "https://en.cppreference.com/",
    },
    {
      title: "TypeScript",
      description:
        "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "YAML.org",
      description:
        "Official site for YAML, a human-readable data serialization standard used in configuration files and data exchange.",
      link: "https://yaml.org/",
    },
    {
      title: "JSON.org",
      description:
        "Official website for the JSON (JavaScript Object Notation) data format, with syntax diagrams and specifications.",
      link: "https://www.json.org/json-en.html",
    },
    {
      title: "JWT.io",
      description:
        "A tool for decoding, verifying, and learning about JSON Web Tokens, along with libraries and implementation tips.",
      link: "https://jwt.io/",
    },
    {
      title: "Agile Manifesto",
      description:
        "The foundational document outlining the core values and principles of Agile software development.",
      link: "https://agilemanifesto.org/",
    },
    {
      title: "Roadmap.sh",
      description:
        "Community-driven collection of comprehensive roadmaps, guides, and resources for developers in various domains.",
      link: "https://roadmap.sh/",
    },
    {
      title: "ECMAScript (ECMA-262)",
      description:
        "The standard specification on which JavaScript is based, maintained by ECMA International. Defines core language features.",
      link: "https://tc39.es/ecma262/",
    },
    {
      title: "W3C (World Wide Web Consortium)",
      description:
        "The main international standards organization for the World Wide Web. Publishes specifications like HTML, CSS, and accessibility guidelines.",
      link: "https://www.w3.org/",
    },
    {
      title: "Udacity Git Commit Style Guide",
      description:
        "A concise guide on writing clear, consistent Git commit messages — covering structure, formatting, and best practices.",
      link: "https://udacity.github.io/git-styleguide/",
    },
    {
      title: "CSS-Tricks",
      description:
        "A popular web design and development blog featuring articles, tutorials, and tips—especially focused on CSS and front-end technologies.",
      link: "https://css-tricks.com/",
    },
    {
      title: "Prettier",
      description:
        "An opinionated code formatter that supports many languages and integrates with most editors. Helps maintain consistent code style.",
      link: "https://prettier.io/",
    },
    {
      title: "RegexPal",
      description:
        "An online tool to test and debug regular expressions in real-time with highlighted matches and instant feedback.",
      link: "https://www.regexpal.com/",
    },
    {
      title: "Markdown Guide",
      description:
        "Comprehensive reference for writing Markdown, covering basic syntax to advanced formatting.",
      link: "https://www.markdownguide.org/",
    },
    {
      title: "Get BEM",
      description:
        "A guide to the BEM (Block, Element, Modifier) CSS methodology for writing maintainable styles.",
      link: "https://getbem.com/",
    },
  ],
};
