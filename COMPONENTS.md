# MovieMosaic Components Documentation

## 1. Header Component

The Header component serves as the main navigation bar for the MovieMosaic website. It includes the following features:

- Animated entrance using Framer Motion
- Logo and site title linking to the home page
- Navigation links to Home, Popular, and Top Rated pages
- Responsive design with a backdrop blur effect

## 2. MovieGrid Component

The MovieGrid component displays a grid of movie cards. It has the following characteristics:

- Accepts an array of movie objects as props
- Renders a responsive grid of MovieCard components
- Animated entrance for the entire grid using Framer Motion
- Adjusts the number of columns based on screen size

## 3. MovieCard Component

The MovieCard component represents an individual movie in the grid. Its features include:

- Displays movie poster, title, and rating
- Animated hover and tap effects using Framer Motion
- Links to the individual movie details page
- Truncates long titles with ellipsis
- Uses Next.js Image component for optimized image loading

## 4. MovieDetails Component

The MovieDetails component shows comprehensive information about a single movie. It includes:

- Animated entrance effect
- Displays movie title, poster, overview, release date, rating, and genres
- Responsive layout with a two-column design on larger screens
- Uses shadcn/ui Card components for consistent styling

## 5. SearchBar Component

The SearchBar component allows users to search for movies. Its features are:

- Controlled input field for search queries
- Animated entrance effect
- Submits search query to a parent component via callback
- Uses shadcn/ui Input and Button components for consistent styling

## 6. Footer Component

The Footer component appears at the bottom of the page. It includes:

- Animated entrance effect
- Displays copyright information
- Consistent styling with the Header component

These components work together to create a cohesive and interactive movie browsing experience. The use of Framer Motion adds smooth animations, while shadcn/ui and Tailwind CSS ensure a consistent and attractive design throughout the application.