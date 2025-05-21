
# API Documentation

## Authentication
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`

## User Management
- `GET /api/users/profile`
- `PUT /api/users/profile`

## AI Services
- `POST /api/ai/generate`
- `POST /api/ai/analyze`
- `GET /api/ai/models`

## Booking System
- `GET /api/bookings`
- `POST /api/bookings`
- `PUT /api/bookings/:id`
- `DELETE /api/bookings/:id`

## CRM
- `GET /api/leads`
- `POST /api/leads`
- `GET /api/deals`
- `POST /api/deals`

## Security
All endpoints require authentication token in the Authorization header.
Rate limiting applies to all endpoints.
