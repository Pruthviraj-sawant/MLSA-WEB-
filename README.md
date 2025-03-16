MLSA Web

Welcome to the MLSA Web project repository! This web application serves as the official platform for the Microsoft Learn Student Ambassadors (MLSA) program, showcasing its features, teams, and events in an interactive and user-friendly way.

Built With

Next.js: A React-based framework for building fast and scalable web applications with server-side rendering and static site generation.

Accernity UI Components: A modern and customizable UI library to ensure a seamless and attractive user interface.

Features

Team Section: Highlighting all MLSA members with a focus on technical and non-technical teams.

Events Page: Displaying information about past, ongoing, and upcoming events.

Tech Team Carousel: A visually appealing Apple Cards Carousel component.

Responsive Design: Optimized for all devices, ensuring a great user experience across different screen sizes.

Prerequisites

Before running this project, ensure you have the following installed:

Node.js (v16 or higher recommended)

npm or yarn

Getting Started

Clone the Repository

git clone https://github.com/Pruthviraj-sawant/MLSA-WEB-.git
cd mlsa-web

Install Dependencies

npm install
# or
yarn install

Run the Development Server

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser to view the application.

Project Structure

mlsa-web/
├── components/          # Reusable UI components
├── pages/               # Next.js pages (routes)
├── public/              # Static assets
├── styles/              # Global and component-specific styles
├── utils/               # Utility functions and helpers
└── README.md            # Project documentation

Deployment

To deploy the project, follow these steps:

Build the application:

npm run build
# or
yarn build

Start the production server:

npm start
# or
yarn start

Alternatively, deploy the app to a cloud platform like Vercel for seamless deployment and hosting.

Customization

Using Accernity UI Components

Accernity UI Components are used to design and enhance the user interface. You can customize these components as needed by referring to the Accernity UI Documentation.

Modifying the Carousel Component

The Apple Cards Carousel for the Tech Team is located in the components/Carousel.js file. Customize it to match your desired content and style.

Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature/your-feature-name

Commit your changes:

git commit -m "Add your message here"

Push to your branch:

git push origin feature/your-feature-name

Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements

Thanks to the MLSA community for their constant support.

Shoutout to the developers behind Accernity UI and Next.js for creating amazing tools.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
