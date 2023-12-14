-- CreateEnum
CREATE TYPE "Category" AS ENUM ('INTERESTING', 'EXPLORE', 'WILDLIFE', 'VEGATATION');

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "category" "Category"[];
