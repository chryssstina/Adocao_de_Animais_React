-- CreateEnum
CREATE TYPE "public"."AnimalStatus" AS ENUM ('AVAILABLE', 'IN_PROCESS_ADOPTION', 'ADOPTED');

-- AlterTable
ALTER TABLE "public"."Animals" ADD COLUMN     "animal_status" "public"."AnimalStatus" NOT NULL DEFAULT 'AVAILABLE';
