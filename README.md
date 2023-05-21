## E-commerce Project

This is the e-commerce pet project created with React and Typescript.

### Technologies used

- **Axios**
- **Zustand**
- **React-hook-form**
- **Zod**
- **React-router-dom**

### Features

- User authentication
- Add products to the shopping cart
- Proceed to checkout and complete the purchase

### Folder Structure

- **public/**: Contains the public assets of the application such as HTML files,
  images, and icons.
- **src/**: Contains the source code of the application.
    - **assets/**: Stores static assets like images, logos, etc.
    - **components/**: Contains reusable React components used in features or
      pages folder.
    - **core/**: Contains required elements for application working such as a
      store, repositories.
    - **hooks/**: Contains hooks used throughout the application except the
      shared folder.
    - **features/**: Contains React components used only in the page folder.
    - **shared/**: Contains the shared assets of the application.
        - **services/**: Includes services used throughout the application.
        - **types/**: Contains reusable types.
        - **UI/**: Contains reusable UI components used throughout the
          application.
        - **utils/**: Contains reusable utilities used throughout the
          application.
    - **pages/**: Contains the main pages of the application.
    - **styles/**: Contains CSS or SCSS files for styling the application.
- **App.tsx**: The main entry point of the application.
- **index.tsx**: The entry point of the React application