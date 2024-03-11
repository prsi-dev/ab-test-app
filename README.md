# A/B Testing Framework

This project demonstrates an A/B testing solution implemented with Nuxt.js, showcasing a tech assessment challenge with specific acceptance criteria focused on visitor variation assignment, pageview and event tracking, and click-through rate (CTR) analysis for a "Sign up" button.

## Acceptance Criteria

The implemented logic meets the following requirements:

1. **Visitor Variation Assignment**: Each visitor is randomly assigned a variation when they first land on the page, and this variation does not change on page reloads.

2. **Pageview and Event Tracking**: Utilizes the `analytics-api.js` method to track pageviews when a visitor lands and events when a visitor clicks the “Sign up” button.

3. **Unique Tracking**: Ensures that every page view and click is tracked uniquely and stored per user basis to accurately compute CTR.

Function to calculate CTR for clicks on signup over the home page
On a production enviroment we can check how many users have clicked and how many
total amount of visits the home page had.
In this case clickCount it will be always ine since there is only one user

```
const calculateCTR = () => {
  const value =
    analyticsStore.clickCount /
    analyticsStore.pageViews.filter((page) => page.url === "/").length;
};
```

## Implementation Details

- **Framework**: Nuxt.js is used, in alignment with job requirements, leveraging its standard folder structure and functionalities.

- **Styling**: Tailwind CSS for styling and @nuxt/ui for basic form components.

- **Components**:

  - Home page with a randomly selected blog variation and a text editor page.
  - Dark mode toggle button.
  - Main editor component for content editing to help non-developers modify content.
  - Next-ui components for form fields, buttons, and icons.

- **State Management**: Pinia store for editor data and an analytics store for tracking state and events. localStorage is utilized for data persistence across page reloads and navigation.

- **Analytics API**: Setup according to Nuxt standards, handling sign-up, page-view, and click events through POST requests.

## Running the Application

To get the application up and running on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Launch the development server with `npm run dev`.

The application should now be accessible via `http://localhost:3000`.

## Project Goals

This project serves as a prototype for implementing an A/B testing framework within a Nuxt app, exploring the integration of client and server-side logic, data persistence using localStorage, and lifecycle management in a Vue application.

Enjoy testing and exploring the A/B testing capabilities of this Nuxt app 🚀
