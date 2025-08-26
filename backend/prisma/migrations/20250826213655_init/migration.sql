-- CreateEnum
CREATE TYPE "public"."UserType" AS ENUM ('ADMIN_USER', 'DEFAULT_USER');

-- CreateEnum
CREATE TYPE "public"."AnimalSex" AS ENUM ('FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "public"."AdoptionStatus" AS ENUM ('IN_PROGRESS', 'ACCEPTED', 'DECLINED');

-- CreateTable
CREATE TABLE "public"."Users" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_type" "public"."UserType" DEFAULT 'DEFAULT_USER',
    "user_registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."AnimalCategory" (
    "category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "AnimalCategory_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "public"."Animals" (
    "animal_id" SERIAL NOT NULL,
    "animal_name" TEXT NOT NULL,
    "animal_age" TEXT NOT NULL,
    "animal_sex" "public"."AnimalSex" NOT NULL,
    "animal_weight" TEXT NOT NULL,
    "animal_favorite_food" TEXT NOT NULL,
    "animal_description" TEXT NOT NULL,
    "fk_admin_user_id" INTEGER NOT NULL,
    "fk_category_id" INTEGER,

    CONSTRAINT "Animals_pkey" PRIMARY KEY ("animal_id")
);

-- CreateTable
CREATE TABLE "public"."Adoptions" (
    "adoption_id" SERIAL NOT NULL,
    "adoption_status" "public"."AdoptionStatus" DEFAULT 'IN_PROGRESS',
    "order_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processed_date" TIMESTAMP(3),
    "fk_animal_id" INTEGER NOT NULL,
    "fk_adopting_user_id" INTEGER NOT NULL,
    "fk_admin_user_id" INTEGER,

    CONSTRAINT "Adoptions_pkey" PRIMARY KEY ("adoption_id")
);

-- CreateTable
CREATE TABLE "public"."Favorites" (
    "favorite_id" SERIAL NOT NULL,
    "favorite_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_animal_id" INTEGER NOT NULL,
    "fk_user_id" INTEGER NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("favorite_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_email_key" ON "public"."Users"("user_email");

-- CreateIndex
CREATE INDEX "Animals_fk_admin_user_id_idx" ON "public"."Animals"("fk_admin_user_id");

-- CreateIndex
CREATE INDEX "Animals_fk_category_id_idx" ON "public"."Animals"("fk_category_id");

-- CreateIndex
CREATE INDEX "Adoptions_fk_animal_id_idx" ON "public"."Adoptions"("fk_animal_id");

-- CreateIndex
CREATE INDEX "Adoptions_fk_adopting_user_id_idx" ON "public"."Adoptions"("fk_adopting_user_id");

-- CreateIndex
CREATE INDEX "Adoptions_fk_admin_user_id_idx" ON "public"."Adoptions"("fk_admin_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Adoptions_fk_animal_id_fk_adopting_user_id_key" ON "public"."Adoptions"("fk_animal_id", "fk_adopting_user_id");

-- CreateIndex
CREATE INDEX "Favorites_fk_animal_id_idx" ON "public"."Favorites"("fk_animal_id");

-- CreateIndex
CREATE INDEX "Favorites_fk_user_id_idx" ON "public"."Favorites"("fk_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_fk_user_id_fk_animal_id_key" ON "public"."Favorites"("fk_user_id", "fk_animal_id");

-- AddForeignKey
ALTER TABLE "public"."Animals" ADD CONSTRAINT "Animals_fk_admin_user_id_fkey" FOREIGN KEY ("fk_admin_user_id") REFERENCES "public"."Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Animals" ADD CONSTRAINT "Animals_fk_category_id_fkey" FOREIGN KEY ("fk_category_id") REFERENCES "public"."AnimalCategory"("category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Adoptions" ADD CONSTRAINT "Adoptions_fk_animal_id_fkey" FOREIGN KEY ("fk_animal_id") REFERENCES "public"."Animals"("animal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Adoptions" ADD CONSTRAINT "Adoptions_fk_adopting_user_id_fkey" FOREIGN KEY ("fk_adopting_user_id") REFERENCES "public"."Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Adoptions" ADD CONSTRAINT "Adoptions_fk_admin_user_id_fkey" FOREIGN KEY ("fk_admin_user_id") REFERENCES "public"."Users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorites" ADD CONSTRAINT "Favorites_fk_animal_id_fkey" FOREIGN KEY ("fk_animal_id") REFERENCES "public"."Animals"("animal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorites" ADD CONSTRAINT "Favorites_fk_user_id_fkey" FOREIGN KEY ("fk_user_id") REFERENCES "public"."Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
