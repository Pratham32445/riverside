-- CreateEnum
CREATE TYPE "Languages" AS ENUM ('ENGLISH');

-- CreateEnum
CREATE TYPE "PLAN" AS ENUM ('FREE', 'MONTLY', 'PREMIUM');

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "transcriptionCaptionLanguage" "Languages" NOT NULL DEFAULT 'ENGLISH',
    "subscription" "PLAN" NOT NULL DEFAULT 'FREE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Podcast" (
    "Id" TEXT NOT NULL,
    "usersCnt" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Podcast_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "Id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Message" (
    "Id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Podcast"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
