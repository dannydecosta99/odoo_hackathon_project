-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Inventro
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Inventro
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Inventro` DEFAULT CHARACTER SET utf8 ;
USE `Inventro` ;

-- -----------------------------------------------------
-- Table `Inventro`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventro`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `customer_user` VARCHAR(45) NULL,
  `product_id` INT NULL,
  `quantity` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `date` TIMESTAMP NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Inventro`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventro`.`Products` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) NULL,
  `sku` VARCHAR(45) NULL,
  `category` VARCHAR(100) NULL,
  `Price` DECIMAL(10,2) NULL,
  `Stock` INT NULL,
  `Created_at` TIMESTAMP NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Inventro`.`inventory_movements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventro`.`inventory_movements` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NULL,
  `type` VARCHAR(20) NULL,
  `quantity` INT NULL,
  `date` TIMESTAMP NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_product_inventory_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_inventory`
    FOREIGN KEY (`product_id`)
    REFERENCES `Inventro`.`Products` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Inventro`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Inventro`.`orders` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(100) NULL,
  `product_id` INT NULL,
  `quantity` INT NULL,
  `status` VARCHAR(45) NULL,
  `date` TIMESTAMP NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_order_product_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_order_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `Inventro`.`Products` (`Id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
