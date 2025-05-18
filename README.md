# Windmill Proxy Server

This is a NestJS-based proxy server that forwards requests to the Windmill service. It acts as a middleware between your frontend application and the Windmill API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run start:dev
```

The server will start on port 3000.

## API Endpoints

### POST /api/windmill/chat

Forwards chat requests to the Windmill service.

Request body:
```json
{
  "query": "Your question here",
  "project_id": "Your project ID"
}
```

## Environment

The server runs on port 3000 by default. Make sure this port is available on your system.

## Development

- `npm run start:dev` - Start the development server with hot-reload
- `npm run build` - Build the application
- `npm run start:prod` - Start the production server 