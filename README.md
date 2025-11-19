# Proof - Inscribed Semicircles

A React-based interactive educational tool that visualizes a complex geometric proof involving inscribed semicircles within a unit square.

## Project Overview

This application walks users through a step-by-step derivation to find the diameter of a small circle tangent to four congruent semicircles inscribed in a square. It uses SVG for precise geometric rendering and React for state management of the proof steps.

## Features

- **Interactive Visualization**: Dynamic SVG graphics that highlight relevant geometric elements (centers, radii, triangles) as the user progresses through the proof.
- **Step-by-Step Derivation**: Clear, guided textual explanation alongside the visual aid.
- **Responsive Design**: Built with Tailwind CSS to work on various screen sizes.
- **Mathematical Precision**: Calculations based on exact algebraic values (√3, √2).

## Technologies Used

- **React**: Frontend framework (Functional Components and Hooks).
- **TypeScript**: For type safety and code clarity.
- **Tailwind CSS**: Utility-first CSS framework for styling (loaded via CDN).
- **SVG**: Scalable Vector Graphics for high-fidelity geometric drawing.

## How It Works

The application renders a unit square with four semicircles arranged in a "pinwheel" configuration. The user navigates through a series of steps:
1.  **Problem Statement**: Defining the geometry.
2.  **Finding Semicircle Radius**: Using the Pythagorean theorem on the centers of tangent semicircles.
3.  **Connecting to Center**: Establishing the relationship between the square's center and the semicircle centers.
4.  **Solving for Unknowns**: Calculating the radius of the small central circle using nested radical simplification.

## Local Development

To run this project locally, follow these steps:

1.  **Prerequisites**: Ensure you have Node.js and npm installed on your machine.
2.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```
5.  **Open in Browser**: Navigate to the local URL provided in the terminal (usually `http://localhost:3000`).

## Available Scripts

- **`npm run dev`**: Start the development server with hot module replacement (HMR).
- **`npm run build`**: Build the project for production. Output is generated in the `dist/` directory.
- **`npm run preview`**: Preview the production build locally before deployment.
- **`npm run deploy`**: Deploy the application to GitHub Pages.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package. Follow these steps:

1.  **Update `package.json`** (if not already done):
    Ensure your `package.json` includes the `homepage` field pointing to your GitHub Pages URL:
    ```json
    "homepage": "https://<your-username>.github.io/<repository-name>/"
    ```

2.  **Configure Vite for GitHub Pages**:
    Update `vite.config.ts` to include the base path:
    ```typescript
    export default defineConfig({
      base: '/<repository-name>/',
      // ... rest of config
    });
    ```

3.  **Build and Deploy**:
    ```bash
    npm run build
    npm run deploy
    ```

4.  **Enable GitHub Pages**:
    - Go to your repository settings
    - Navigate to **Pages** section
    - Select the `gh-pages` branch as the source
    - Save the changes

5.  **Access Your Deployment**:
    Your application will be available at `https://<your-username>.github.io/<repository-name>/`

**Note**: Replace `<your-username>` with your GitHub username and `<repository-name>` with your repository name.

## Key Files

- `index.html`: Entry point, loads Tailwind and defines import maps.
- `App.tsx`: Main layout component.
- `components/VisualProof.tsx`: Core component containing the geometric logic, SVG rendering, and proof steps.
- `constants.ts`: Application-wide constants.