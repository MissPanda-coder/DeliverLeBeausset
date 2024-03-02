-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 02 mars 2024 à 10:45
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `apideliver`
--

-- --------------------------------------------------------

--
-- Structure de la table `department`
--

DROP TABLE IF EXISTS `department`;
CREATE TABLE IF NOT EXISTS `department` (
  `iddepartment` int NOT NULL AUTO_INCREMENT,
  `departmentname` varchar(245) NOT NULL,
  PRIMARY KEY (`iddepartment`),
  UNIQUE KEY `iddepartment_UNIQUE` (`iddepartment`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `department`
--

INSERT INTO `department` (`iddepartment`, `departmentname`) VALUES
(1, 'bracelet'),
(2, 'fruits_et_legumes'),
(3, 'epicerie_salee'),
(4, 'douleurs et fievre'),
(5, 'viennoiserie');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `idproducts` int NOT NULL AUTO_INCREMENT,
  `productsname` varchar(145) NOT NULL,
  `productsdescription` mediumtext NOT NULL,
  `productsprice` decimal(10,2) NOT NULL,
  `euros` varchar(1) NOT NULL DEFAULT '€',
  `productsimg` varchar(45) NOT NULL,
  `productsweight` decimal(10,2) NOT NULL,
  `units_idunits` int NOT NULL,
  `department_iddepartment` int NOT NULL,
  PRIMARY KEY (`idproducts`),
  UNIQUE KEY `idproducts_UNIQUE` (`idproducts`),
  KEY `fk_products_units1_idx` (`units_idunits`),
  KEY `fk_products_department1_idx` (`department_iddepartment`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`idproducts`, `productsname`, `productsdescription`, `productsprice`, `euros`, `productsimg`, `productsweight`, `units_idunits`, `department_iddepartment`) VALUES
(1, 'Bracelet en or', 'Bracelet en or 18 carats avec un design élégant.', '499.99', '€', 'braceletOr.jpg', '0.03', 1, 1),
(2, 'Bracelet en argent', 'Bracelet en argent blanc', '99.90', '€', 'braceletArgent.jpg', '0.02', 1, 1),
(3, 'Chips Lays', 'Délicieuses chips de pomme de terre Lays', '3.21', '€', 'chipsLays.jpg', '150.00', 1, 3),
(4, 'Poireau', 'Frais et croquant, idéal pour vos recettes de soupes et de plats maison', '1.09', '€', 'poireau.jpg', '183.00', 1, 2),
(5, 'Salade', 'Salade fraîche et croquante, parfaite pour accompagner vos plats', '0.99', '€', 'salade.jpg', '150.00', 1, 2),
(6, 'Dopliprane 1000mg', 'Boîte de Doliprane pour soulager la douleur et la fièvre', '1.99', '€', '', '8.00', 6, 4),
(7, 'Salade', 'Salade fraîche', '2.00', '€', 'salade.jpg', '150.00', 1, 2),
(8, 'Bananes', 'Bananes origine Amérique Latine', '3.00', '€', 'bananes.jpg', '350.00', 3, 2),
(9, 'Bananes', 'Origine Afrique', '1.99', '€', 'bananes.jpg', '750.00', 3, 2),
(10, 'Carottes', 'Origine France', '3.29', '€', 'carottes.jpg', '1.50', 3, 2),
(11, 'Oranges sanguines', 'Oranges sanguines Tarocco ITALIE', '3.49', '€', 'orangessanguines.jpg', '1.50', 3, 2),
(12, 'Poivron rouge', 'Origine Espagne', '0.75', '€', 'poivronRouge.jpg', '1.00', 5, 2);

-- --------------------------------------------------------

--
-- Structure de la table `shops`
--

DROP TABLE IF EXISTS `shops`;
CREATE TABLE IF NOT EXISTS `shops` (
  `idshops` int NOT NULL AUTO_INCREMENT,
  `shopsName` varchar(100) NOT NULL,
  `shopsstreetnb` int NOT NULL,
  `shopsstreetname` varchar(245) NOT NULL,
  `shopspostal` varchar(45) NOT NULL DEFAULT '83330',
  `shopscountry` varchar(45) NOT NULL DEFAULT 'LE BEAUSSET',
  `shopsimg` varchar(245) NOT NULL,
  `shopslogo` varchar(45) NOT NULL,
  `shopstype_idshopstype` int NOT NULL,
  PRIMARY KEY (`idshops`),
  UNIQUE KEY `idshops_UNIQUE` (`idshops`),
  KEY `fk_shops_shopstype_idx` (`shopstype_idshopstype`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `shops`
--

INSERT INTO `shops` (`idshops`, `shopsName`, `shopsstreetnb`, `shopsstreetname`, `shopspostal`, `shopscountry`, `shopsimg`, `shopslogo`, `shopstype_idshopstype`) VALUES
(1, 'Vival', 33, 'Rue Portalis', '83330', 'Le Beausset', 'vival.jpg', 'vivalLogo.png', 1),
(2, 'Saoya', 42, 'Avenue des Fleurs', '83330', 'Le Beausset', 'saoya.jpg', 'saoyaLogo.png', 2),
(3, 'Pharmacie des Arcades', 10, 'Avenue Victor Hugo', '83330', 'Le Beausset', 'pharmacieDesArcades.jpg', 'pharmacieArcadesLogo.png', 4),
(4, 'Carrefour Market', 1, 'rond point Georges Pompidou', '83330', 'Le Beausset', 'carrefour.jpg', 'carrfourLogo.png', 6),
(5, 'Casino', 12, 'Avenue du Pre', '83330', 'Le Beausset', 'casino.jpg', 'casinoLogo.png', 6),
(7, 'Bergamote et Chocolat', 4, 'Pl. Charles de Gaulle', '83330', 'Le Beausset', 'bergamote.jpg', 'bergamoteLogo.png', 5);

-- --------------------------------------------------------

--
-- Structure de la table `shopstype`
--

DROP TABLE IF EXISTS `shopstype`;
CREATE TABLE IF NOT EXISTS `shopstype` (
  `idshopstype` int NOT NULL AUTO_INCREMENT,
  `shopstype` varchar(145) NOT NULL,
  PRIMARY KEY (`idshopstype`),
  UNIQUE KEY `idshopstype_UNIQUE` (`idshopstype`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `shopstype`
--

INSERT INTO `shopstype` (`idshopstype`, `shopstype`) VALUES
(1, 'epicerie'),
(2, 'bijouterie'),
(3, 'boulangerie'),
(4, 'pharmacie'),
(5, 'chocolaterie'),
(6, 'supermarche');

-- --------------------------------------------------------

--
-- Structure de la table `shops_has_department`
--

DROP TABLE IF EXISTS `shops_has_department`;
CREATE TABLE IF NOT EXISTS `shops_has_department` (
  `shops_idshops` int NOT NULL,
  `department_iddepartment` int NOT NULL,
  `products_idproducts` int NOT NULL,
  KEY `fk_shops_has_department_department1_idx` (`department_iddepartment`),
  KEY `fk_shops_has_department_shops1_idx` (`shops_idshops`),
  KEY `fk_shops_has_department_products1_idx` (`products_idproducts`),
  KEY `shops_idshops` (`shops_idshops`,`department_iddepartment`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `shops_has_department`
--

INSERT INTO `shops_has_department` (`shops_idshops`, `department_iddepartment`, `products_idproducts`) VALUES
(2, 1, 1),
(2, 1, 2),
(1, 3, 3),
(1, 2, 4),
(1, 2, 5),
(3, 4, 6),
(1, 2, 7),
(4, 2, 8),
(4, 2, 9),
(5, 2, 10),
(1, 2, 11),
(1, 2, 12);

-- --------------------------------------------------------

--
-- Structure de la table `units`
--

DROP TABLE IF EXISTS `units`;
CREATE TABLE IF NOT EXISTS `units` (
  `idunits` int NOT NULL,
  `unitsname` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`idunits`),
  UNIQUE KEY `idunits_UNIQUE` (`idunits`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `units`
--

INSERT INTO `units` (`idunits`, `unitsname`) VALUES
(1, 'gr'),
(2, 'mg'),
(3, 'kg'),
(4, 'litre'),
(5, 'piece'),
(6, 'comprimes');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_department1` FOREIGN KEY (`department_iddepartment`) REFERENCES `department` (`iddepartment`),
  ADD CONSTRAINT `fk_products_units1` FOREIGN KEY (`units_idunits`) REFERENCES `units` (`idunits`);

--
-- Contraintes pour la table `shops`
--
ALTER TABLE `shops`
  ADD CONSTRAINT `fk_shops_shopstype` FOREIGN KEY (`shopstype_idshopstype`) REFERENCES `shopstype` (`idshopstype`);

--
-- Contraintes pour la table `shops_has_department`
--
ALTER TABLE `shops_has_department`
  ADD CONSTRAINT `fk_shops_has_department_department1` FOREIGN KEY (`department_iddepartment`) REFERENCES `department` (`iddepartment`),
  ADD CONSTRAINT `fk_shops_has_department_products1` FOREIGN KEY (`products_idproducts`) REFERENCES `products` (`idproducts`),
  ADD CONSTRAINT `fk_shops_has_department_shops1` FOREIGN KEY (`shops_idshops`) REFERENCES `shops` (`idshops`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
