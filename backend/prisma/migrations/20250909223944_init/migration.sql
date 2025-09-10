/*
  Warnings:

  - Added the required column `reason` to the `Adoptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Adoptions" ADD COLUMN     "reason" TEXT NOT NULL;
