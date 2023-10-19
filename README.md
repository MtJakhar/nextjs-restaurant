# OpenTable Clone

This repository contains the code for an Openable clone, a website for restaurants built using Next.js framework. The purpose of this project is to provide a template for creating restaurant websites with features similar to Openable.



## Features

- **Restaurant Listings**: Display a list of restaurants with their details such as name, address, cuisine type, ratings, and reviews.
- **Search Functionality**: Allow users to search for restaurants based on various criteria such as location, cuisine type, or name.
- **Restaurant Details**: Provide detailed information about each restaurant, including photos, menu, opening hours, and contact information.
- **User Reviews**: Enable users to leave reviews and ratings for restaurants.
- **User Authentication**: Support user registration and login functionality.

Please note that this project is a clone of Openable and does not include the exact features or design of the original website. It serves as a starting point for building a similar restaurant website with customizable features and styles.

## Getting Started

To get started with the Openable clone, follow the instructions below.

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository using the following command:

   ```
   git clone https://github.com/MtJakhar/nextjs-restaurant.git
   ```

2. Navigate to the project directory:

   ```
   cd nextjs-restaurant
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the project.

2. Provide the required configuration values in the `.env` file.

  This Project is using the ORM Prisma and it has been configured for Postgresql.
  The `.env` file should have the following code added to it.
  
  The first line is a database url that connects to your local Postgresql database.
  The second line is for jwt token which must be created at https://jwt.io/.
   ```
   DATABASE_URL="postgresql://YourUserNameHere:YourPasswordHere@localhost:5432/YourDataBaseNameHere"
   JWT_SECRET ="YourJWTSignatureHere"
   ```


## Usage

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:3000` to access the Openable clone.

You can customize and extend the functionality of the website according to your specific requirements by modifying the codebase.

How to Navigate through the websitesite.

User Authentication:

Open the website in your web browser.
If you don't have an account, click on the "Sign Up" or "Sign In" button to create a new account. Fill out the required information such as username, email, and password. Submit the form to create your account.
If you already have an account, click on the "Sign In" button and enter your credentials (username/email and password) to log in.

<img width="1440" alt="Screen Shot 2023-05-31 at 10 05 27 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/a0738efc-f9d9-49ef-85df-80a5cfea2ce9">
<img width="1440" alt="Screen Shot 2023-05-31 at 10 05 42 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/977fe115-4695-4c37-bf48-1c9bf1002552">


Searching for a Restaurant:

After logging in, you will be redirected to the homepage.
Use the search bar on the homepage to search for a restaurant based on location, cuisine type, or name. Enter your search criteria and click the "Search" button or press Enter.
The search results will be displayed, showing a list of restaurants that match your search criteria. Each restaurant will have its name, address, cuisine type, ratings, and reviews.

<img width="1440" alt="Screen Shot 2023-05-31 at 10 05 03 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/70ed74ff-8b9b-4e70-9c30-856bfdf9e1af">

<img width="1440" alt="Screen Shot 2023-05-31 at 10 06 58 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/ba79f882-20bf-4962-969b-a2d058de1048">


Making a Reservation:

Click on the name or image of the restaurant you want to make a reservation at to view its details.
On the restaurant details page, you will see information such as photos, menu, opening hours, and contact information.

<img width="1030" alt="Screen Shot 2023-05-31 at 10 07 23 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/3601420b-bbf6-4952-a59a-18d5c2aeff19">

To make a reservation, go to the "Make a Reservation" section where you should choose your party size from the available options.

<img width="236" alt="Screen Shot 2023-05-31 at 10 07 59 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/18772fe7-2448-41c3-82e4-7bf50971e1ff">


Select the desired date for your reservation.
Choose an available time slot for that day by selecting from the provided options.
Once you have selected your party size, date, and time, click the "Find a Time" button.

<img width="1438" alt="Screen Shot 2023-05-31 at 10 07 46 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/7c574c67-6e90-4b31-986d-3c2a3a17ef0e">

You will be redirected to a reservation form where you need to fill out your name, phone number, and email to complete the reservation.

<img width="1435" alt="Screen Shot 2023-05-31 at 10 08 55 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/612ab22b-4575-4ef9-89c4-d639fe34a666">

Enter the required information in the reservation form fields.
After filling out the form, click the "Submit" or "Confirm Reservation" button to finalize your reservation.

<img width="1440" alt="Screen Shot 2023-05-31 at 10 09 23 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/44467351-bdba-49c9-95a7-a5b263a72685">


If the reservation is successful, you will receive a confirmation message and details of your reservation.

This Reservation will be stored in a table in Postqresql.

<img width="329" alt="Screen Shot 2023-05-31 at 10 11 46 AM" src="https://github.com/MtJakhar/nextjs-restaurant/assets/89097931/efd3edf9-82c8-4fb1-9327-39e6be891cd6">

