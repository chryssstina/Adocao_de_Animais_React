/*
  Warnings:

  - You are about to drop the column `fk_category_id` on the `Animals` table. All the data in the column will be lost.
  - You are about to drop the `AnimalCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."AnimalsCategories" AS ENUM ('CAT', 'DOG', 'ANIMAL');

-- DropForeignKey
ALTER TABLE "public"."Animals" DROP CONSTRAINT "Animals_fk_category_id_fkey";

-- DropIndex
DROP INDEX "public"."Animals_fk_category_id_idx";

-- AlterTable
ALTER TABLE "public"."Animals" DROP COLUMN "fk_category_id",
ADD COLUMN     "animal_category" "public"."AnimalsCategories" NOT NULL DEFAULT 'ANIMAL';

-- DropTable
DROP TABLE "public"."AnimalCategory";
