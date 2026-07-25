# Erms-NALA Backend Scaffold

Production-ready backend scaffold using Node.js, Express, TypeScript, Prisma ORM, PostgreSQL, and Docker Compose.

## Prerequisites

- Node.js 20+
- npm 10+
- Docker + Docker Compose

## Install dependencies

```bash
npm install
```

## Environment setup

Copy the example environment file:

```bash
cp .env.example .env
```

## Start PostgreSQL

```bash
docker compose up -d postgres
```

## Run Prisma migrations

```bash
npm run prisma:migrate:dev -- --name init
```

## Run the app (development)

```bash
npm run dev
```

## Build and run (production mode)

```bash
npm run build
npm start
```

## API Endpoints

- `GET /health` - service health status
- `GET /api/v1` - API metadata

## Sample curl

```bash
curl http://localhost:5000/health
```
