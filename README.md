# API Documentation - Authentication

Dokumentasi ini berisi informasi tentang endpoint API yang berkaitan dengan autentikasi admin pada sistem RFID.

## Table of Contents

1. [Register Admin](#register-admin)
2. [Login Admin](#login-admin)
3. [Logout Admin](#logout-admin)

## Register Admin

Endpoint ini digunakan untuk mendaftarkan admin baru ke dalam sistem.

### Request

```
POST /api/auth/register
```

#### Headers

```
Content-Type: application/json
```

#### Body

```json
{
  "username": "adminbaru",
  "email": "admin@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "role": "ADMIN"
}
```

| Field           | Type   | Description                                  | Required |
|-----------------|--------|----------------------------------------------|----------|
| username        | String | Nama pengguna admin                          | Yes      |
| email           | String | Email admin (harus valid)                    | Yes      |
| password        | String | Password admin                               | Yes      |
| confirmPassword | String | Konfirmasi password (harus sama dengan password) | Yes  |
| role            | String | Peran admin (ADMIN, SUPER_ADMIN)             | Yes      |

### Response

#### Success (201 Created)

```json
{
  "message": "Admin berhasil didaftarkan",
  "admin": {
    "id": 1,
    "username": "adminbaru",
    "email": "admin@example.com",
    "role": "ADMIN"
  }
}
```

#### Error (400 Bad Request) - Data Input Tidak Valid

```json
{
  "message": "Data input tidak valid",
  "details": {
    "email": {
      "_errors": ["format email tidak valid"]
    },
    "password": {
      "_errors": ["password tidak boleh kosong"]
    }
  }
}
```

#### Error (409 Conflict) - Email Sudah Terdaftar

```json
{
  "message": "Email sudah terdaftar"
}
```

#### Error (500 Internal Server Error)

```json
{
  "message": "Terjadi kesalahan saat mendaftarkan admin"
}
```

## Login Admin

Endpoint ini digunakan untuk autentikasi admin dan mendapatkan token JWT.

### Request

```
POST /api/auth/login
```

#### Headers

```
Content-Type: application/json
```

#### Body

```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

| Field    | Type   | Description        | Required |
|----------|--------|--------------------|----------|
| email    | String | Email admin        | Yes      |
| password | String | Password admin     | Yes      |

### Response

#### Success (200 OK)

```json
{
  "message": "Login Successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": 1,
    "email": "admin@example.com",
    "username": "adminbaru",
    "role": "ADMIN"
  }
}
```

Catatan: Token JWT juga dikirimkan sebagai cookie HTTP-only dengan nama `token`.

#### Error (400 Bad Request) - Data Input Tidak Valid

```json
{
  "message": "Data input tidak valid",
  "details": {
    "email": {
      "_errors": ["format email tidak valid"]
    },
    "password": {
      "_errors": ["password tidak boleh kosong"]
    }
  }
}
```

#### Error (401 Unauthorized) - Kredensial Tidak Valid

```json
{
  "message": "Kredensial tidak valid"
}
```

#### Error (500 Internal Server Error)

```json
{
  "message": "terjadi kesalahan saat login"
}
```

## Logout Admin

Endpoint ini digunakan untuk menghapus sesi admin dan mencabut token.

### Request

```
POST /api/auth/logout
```

#### Headers

```
Authorization: Bearer <jwt_token>
```

### Response

#### Success (200 OK)

```json
{
  "message": "Logout berhasil"
}
```

Catatan: Cookie `token` akan dihapus dengan mengatur `maxAge` menjadi 0.

#### Error (500 Internal Server Error)

```json
{
  "message": "Terjadi kesalahan saat logout"
}
```

## Menggunakan Autentikasi untuk Endpoint Lain

Setelah login berhasil, gunakan token JWT yang diterima untuk mengakses endpoint terproteksi dengan menambahkan header `Authorization` pada setiap permintaan.

```
Authorization: Bearer <jwt_token>
```

Token juga disimpan sebagai cookie HTTP-only, sehingga permintaan dari browser akan secara otomatis menyertakan token tersebut jika menggunakan opsi `credentials: 'include'` pada fetch API.