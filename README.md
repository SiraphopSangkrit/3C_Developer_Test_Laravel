# 3C Developer Test Laravel

A Laravel application with React/Inertia.js frontend for managing departments and employees.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **PHP** >= 8.2
- **Composer** (PHP dependency manager)
- **Node.js** >= 18.x
- **npm** 
- **Mysql**

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SiraphopSangkrit/3C_Developer_Test_Laravel.git
cd 3C_Developer_Test_Laravel
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Install Node.js Dependencies

```bash
npm install
```

### 4. Environment Setup

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

### 5. Database Setup





Run migrations to create the database tables:

```bash
php artisan migrate
```

Execute SQl Using script in `database/sql script.txt`

### 6. Build Frontend Assets

For development:

```bash
npm run dev
```

For production:

```bash
npm run build
```

### 7. Start the Development Server

```bash
php artisan serve
```

The application will be available at `http://localhost:8000`

## Quick Start (All-in-One)

If you want to run everything in one go:

```bash
# Install dependencies
composer install && npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Setup database
php artisan migrate --seed

# Start development servers
npm run dev &
php artisan serve
```


## Project Structure

- `app/Models/` - Eloquent models (Department, Employee, User)
- `app/Http/Controllers/` - Laravel controllers
- `resources/js/` - React components and pages
- `database/migrations/` - Database migrations
- `routes/` - Application routes



