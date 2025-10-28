# Login Page

![Project logo](https://github.com/jlinville01/login-page/blob/main/assets/login-page-logo.png?raw=true)

# Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/jlinville01/login-page.git
   cd login-page
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```
   - The app will be available at `http://localhost:8080`
   
4. **Change directories**
   ```bash
   cd qa
   ```

5. **Install dependencies**
   ```bash
   npm install
   ```

6. **Run automation**
   ```bash
   npx cypress open
   ```

## Test Credentials

- **Email**: `test@test.com`
- **Password**: `password`

## Scenarios

- ✅ Empty email
- ✅ Empty password
- ✅ Invalid email
- ✅ Invalid password
- ✅ Successful login

## This project is built with

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
