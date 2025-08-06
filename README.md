# NGO Website (Frontend Only)

A modern, responsive NGO website built using **React**, **Vite**, and **Tailwind CSS**.  
This project is a frontend-only implementation, ideal for showcasing your organization's mission, projects, events, and more.

---

## ✨ Features

- **Home Page:** Hero section, mission, impact, and quick links to projects, gallery, blog, and volunteer form.
- **About Us:** Vision, mission, values, and founder's message.
- **Volunteer Registration:** Simple form for volunteers to sign up.
- **Donate:** Donation form and bank details.
- **Contact:** Contact form and social media links.
- **Blog/News:** Latest updates and stories.
- **Events:** Upcoming and past events.
- **Gallery:** Photo showcase of NGO activities.
- **Projects:** Details of ongoing and completed projects.
- **Responsive Design:** Works on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PalaniRahulDravid/NGO-Website.git
cd ngo-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

---

## 📁 Project Structure

```
ngo-website/
├── public/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Navbar and shared components
│   ├── pages/            # All main pages (Home, About, Blog, Events, etc.)
│   ├── App.jsx           # Main app with routing
│   ├── index.css         # Tailwind CSS import
│   └── main.jsx          # React entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 📝 Customization

- **Update Content:**  
  Edit files in `src/pages/` to change text, images, and links.
- **Add/Remove Pages:**  
  Add new pages in `src/pages/` and update routes in `src/App.jsx`.
- **Styling:**  
  Modify `src/index.css` or use Tailwind utility classes in your components.

---

## ⚠️ Notes

- **Frontend Only:**  
  This project does not include any backend or database integration.
- **Demo Images:**  
  Gallery and hero images use sample URLs. Replace them with your own images as needed.
- **No Authentication:**  
  All forms are static and do not submit data to a server.

---

## 📄 License

This project is open source and free to use for educational and non-profit purposes.

---

## 💡 Contributing

Feel free to fork, improve, and submit pull requests!

---

## 📬 Contact

For questions or feedback, use the [Contact Us](./src/pages/Contact.jsx) page or connect via social media links in
