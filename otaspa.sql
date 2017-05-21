-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2017 at 09:49 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `otaspa`
--

-- --------------------------------------------------------

--
-- Table structure for table `baggages`
--

CREATE TABLE `baggages` (
  `id` int(11) NOT NULL,
  `carrier` varchar(2) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` decimal(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `baggages`
--

INSERT INTO `baggages` (`id`, `carrier`, `title`, `price`) VALUES
(1, 'BA', '8KG 12x45x6', '5.45'),
(2, 'A3', '12KG', '8.90'),
(3, 'BA', '23KG', '22.00');

-- --------------------------------------------------------

--
-- Table structure for table `legtypes`
--

CREATE TABLE `legtypes` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `legtypes`
--

INSERT INTO `legtypes` (`id`, `title`) VALUES
(1, 'aller'),
(2, 'retour');

-- --------------------------------------------------------

--
-- Table structure for table `meals`
--

CREATE TABLE `meals` (
  `id` int(10) UNSIGNED NOT NULL,
  `carrier` varchar(2) NOT NULL,
  `meal_type_id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meals`
--

INSERT INTO `meals` (`id`, `carrier`, `meal_type_id`, `title`, `price`) VALUES
(1, '', 4, 'A glass of red wine', '6.50'),
(2, '', 4, 'A glass of white wine', '6.50'),
(3, '', 4, 'A glass of champagne', '8.90'),
(4, '', 1, 'Rocket Salad with balsamic vinaigrette', '2.30'),
(5, '', 2, 'Risotto al frutti di mare', '12.35'),
(6, '', 3, 'Black Forest', '2.45'),
(7, '', 3, 'Chocolate Mousse', '4.56'),
(8, '', 3, 'Baklava', '4.56');

-- --------------------------------------------------------

--
-- Table structure for table `meal_types`
--

CREATE TABLE `meal_types` (
  `id` tinyint(4) UNSIGNED NOT NULL,
  `title` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meal_types`
--

INSERT INTO `meal_types` (`id`, `title`) VALUES
(1, 'Appetizer'),
(2, 'Main course'),
(3, 'Dessert'),
(4, 'Drink');

-- --------------------------------------------------------

--
-- Table structure for table `upsales`
--

CREATE TABLE `upsales` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `title` varchar(25) NOT NULL,
  `type_id` tinyint(3) UNSIGNED NOT NULL,
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `upsales`
--

INSERT INTO `upsales` (`id`, `title`, `type_id`, `price`) VALUES
(1, 'SMS', 1, '1.20'),
(2, 'Web Check-in', 1, '6.00');

-- --------------------------------------------------------

--
-- Table structure for table `upsale_types`
--

CREATE TABLE `upsale_types` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `upsale_types`
--

INSERT INTO `upsale_types` (`id`, `title`) VALUES
(1, 'per booking'),
(2, 'per passenger');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baggages`
--
ALTER TABLE `baggages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `legtypes`
--
ALTER TABLE `legtypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `meal_type_id` (`meal_type_id`);

--
-- Indexes for table `meal_types`
--
ALTER TABLE `meal_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upsales`
--
ALTER TABLE `upsales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `upsale_types`
--
ALTER TABLE `upsale_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baggages`
--
ALTER TABLE `baggages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `legtypes`
--
ALTER TABLE `legtypes`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `meal_types`
--
ALTER TABLE `meal_types`
  MODIFY `id` tinyint(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `upsales`
--
ALTER TABLE `upsales`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `upsale_types`
--
ALTER TABLE `upsale_types`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `meals`
--
ALTER TABLE `meals`
  ADD CONSTRAINT `meals_ibfk_1` FOREIGN KEY (`meal_type_id`) REFERENCES `meal_types` (`id`);

--
-- Constraints for table `upsales`
--
ALTER TABLE `upsales`
  ADD CONSTRAINT `upsales_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `upsale_types` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
