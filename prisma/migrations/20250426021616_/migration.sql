-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('PRESENT', 'LATE', 'ABSENT', 'LEAVE', 'PENDING');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'MODERATOR');

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'SUPER_ADMIN',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nim" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "department" TEXT,
    "position" TEXT,
    "email" TEXT,
    "phoneNumber" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rfid_cards" (
    "id" SERIAL NOT NULL,
    "cardUid" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "rfid_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" SERIAL NOT NULL,
    "deviceName" TEXT NOT NULL,
    "macAddress" TEXT NOT NULL,
    "ipAddress" TEXT,
    "location" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastOnline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "checkInStart" TIMESTAMP(3) NOT NULL,
    "checkInEnd" TIMESTAMP(3) NOT NULL,
    "checkOutStart" TIMESTAMP(3) NOT NULL,
    "checkOutEnd" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendances" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "checkInTime" TIMESTAMP(3),
    "checkOutTime" TIMESTAMP(3),
    "status" "AttendanceStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "rfidCardId" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,
    "scheduleId" INTEGER NOT NULL,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_activities" (
    "id" SERIAL NOT NULL,
    "action" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ipAddress" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "admin_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_telemetry" (
    "id" SERIAL NOT NULL,
    "temperature" DOUBLE PRECISION,
    "humidity" DOUBLE PRECISION,
    "batteryLevel" DOUBLE PRECISION,
    "signalStrength" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "device_telemetry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_tokens" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "api_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_settings" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_nim_key" ON "users"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "rfid_cards_cardUid_key" ON "rfid_cards"("cardUid");

-- CreateIndex
CREATE UNIQUE INDEX "rfid_cards_userId_key" ON "rfid_cards"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "devices_macAddress_key" ON "devices"("macAddress");

-- CreateIndex
CREATE INDEX "attendances_date_idx" ON "attendances"("date");

-- CreateIndex
CREATE INDEX "attendances_userId_idx" ON "attendances"("userId");

-- CreateIndex
CREATE INDEX "attendances_rfidCardId_idx" ON "attendances"("rfidCardId");

-- CreateIndex
CREATE UNIQUE INDEX "attendances_userId_date_key" ON "attendances"("userId", "date");

-- CreateIndex
CREATE INDEX "admin_activities_timestamp_idx" ON "admin_activities"("timestamp");

-- CreateIndex
CREATE INDEX "admin_activities_adminId_idx" ON "admin_activities"("adminId");

-- CreateIndex
CREATE INDEX "device_telemetry_timestamp_idx" ON "device_telemetry"("timestamp");

-- CreateIndex
CREATE INDEX "device_telemetry_deviceId_idx" ON "device_telemetry"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "api_tokens_token_key" ON "api_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "api_tokens_deviceId_key" ON "api_tokens"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "system_settings_key_key" ON "system_settings"("key");

-- AddForeignKey
ALTER TABLE "rfid_cards" ADD CONSTRAINT "rfid_cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_rfidCardId_fkey" FOREIGN KEY ("rfidCardId") REFERENCES "rfid_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_activities" ADD CONSTRAINT "admin_activities_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_telemetry" ADD CONSTRAINT "device_telemetry_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_tokens" ADD CONSTRAINT "api_tokens_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
