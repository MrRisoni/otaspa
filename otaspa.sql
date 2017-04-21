-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2017 at 06:30 AM
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
-- Table structure for table `bookcontact`
--

CREATE TABLE `bookcontact` (
  `id` int(10) UNSIGNED NOT NULL,
  `gender` varchar(2) NOT NULL,
  `surname` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL,
  `mail` varchar(55) NOT NULL,
  `mobile_prefix` varchar(3) NOT NULL,
  `mobile` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookfinal`
--

CREATE TABLE `bookfinal` (
  `id` int(10) UNSIGNED NOT NULL,
  `status_id` int(10) UNSIGNED NOT NULL,
  `flightdata_id` int(10) UNSIGNED NOT NULL,
  `contact_id` int(10) UNSIGNED NOT NULL,
  `prices_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookflightdata`
--

CREATE TABLE `bookflightdata` (
  `id` int(11) UNSIGNED NOT NULL,
  `flyFrom` varchar(3) NOT NULL,
  `flyTo` varchar(3) NOT NULL,
  `depDate` datetime NOT NULL,
  `retDate` datetime NOT NULL,
  `airlineDep` varchar(2) NOT NULL,
  `airlineRet` varchar(2) NOT NULL DEFAULT '',
  `segmentsDep` varchar(80) NOT NULL,
  `segmentsRet` varchar(80) NOT NULL DEFAULT '',
  `gds` tinyint(3) UNSIGNED NOT NULL,
  `roundTrip` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookgeneral`
--

CREATE TABLE `bookgeneral` (
  `id` int(10) UNSIGNED NOT NULL,
  `book_id` int(10) UNSIGNED NOT NULL,
  `type_id` tinyint(3) UNSIGNED NOT NULL,
  `pnr` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookpassengers`
--

CREATE TABLE `bookpassengers` (
  `id` int(11) UNSIGNED NOT NULL,
  `book_id` int(11) UNSIGNED NOT NULL,
  `pax_type` varchar(3) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `surname` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL,
  `dob` date NOT NULL,
  `pass_issue_date` date NOT NULL,
  `pass_exp_date` date NOT NULL,
  `pass_no` varchar(600) NOT NULL,
  `pass_issue_country` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookprices`
--

CREATE TABLE `bookprices` (
  `id` int(10) UNSIGNED NOT NULL,
  `fare` decimal(8,2) NOT NULL,
  `tax` decimal(8,2) NOT NULL,
  `net` decimal(8,2) NOT NULL,
  `discount` decimal(8,2) NOT NULL,
  `extra_fees` decimal(8,2) NOT NULL,
  `upsales` decimal(8,2) NOT NULL,
  `totals` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookstatus`
--

CREATE TABLE `bookstatus` (
  `id` int(10) UNSIGNED NOT NULL,
  `succesful` tinyint(3) UNSIGNED NOT NULL DEFAULT '1',
  `void` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `booktickets`
--

CREATE TABLE `booktickets` (
  `id` int(10) UNSIGNED NOT NULL,
  `passenger_id` int(10) UNSIGNED NOT NULL,
  `fare` decimal(8,2) NOT NULL,
  `tax` decimal(8,2) NOT NULL,
  `type_id` tinyint(3) UNSIGNED NOT NULL,
  `ticketno` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bookupsales`
--

CREATE TABLE `bookupsales` (
  `id` int(10) UNSIGNED NOT NULL,
  `book_id` int(10) UNSIGNED NOT NULL,
  `upsale_id` smallint(5) UNSIGNED NOT NULL,
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Indexes for table `bookcontact`
--
ALTER TABLE `bookcontact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookfinal`
--
ALTER TABLE `bookfinal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `flightdata_id` (`flightdata_id`),
  ADD KEY `contact_id` (`contact_id`),
  ADD KEY `prices_id` (`prices_id`);

--
-- Indexes for table `bookflightdata`
--
ALTER TABLE `bookflightdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookgeneral`
--
ALTER TABLE `bookgeneral`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `bookpassengers`
--
ALTER TABLE `bookpassengers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `book_id` (`book_id`);

--
-- Indexes for table `bookprices`
--
ALTER TABLE `bookprices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookstatus`
--
ALTER TABLE `bookstatus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booktickets`
--
ALTER TABLE `booktickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `passenger_id` (`passenger_id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `bookupsales`
--
ALTER TABLE `bookupsales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `upsale_id` (`upsale_id`);

--
-- Indexes for table `legtypes`
--
ALTER TABLE `legtypes`
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
-- AUTO_INCREMENT for table `bookcontact`
--
ALTER TABLE `bookcontact`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bookfinal`
--
ALTER TABLE `bookfinal`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bookflightdata`
--
ALTER TABLE `bookflightdata`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bookpassengers`
--
ALTER TABLE `bookpassengers`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bookprices`
--
ALTER TABLE `bookprices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bookstatus`
--
ALTER TABLE `bookstatus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `booktickets`
--
ALTER TABLE `booktickets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bookupsales`
--
ALTER TABLE `bookupsales`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `legtypes`
--
ALTER TABLE `legtypes`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `upsales`
--
ALTER TABLE `upsales`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `upsale_types`
--
ALTER TABLE `upsale_types`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookfinal`
--
ALTER TABLE `bookfinal`
  ADD CONSTRAINT `bookfinal_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `bookstatus` (`id`),
  ADD CONSTRAINT `bookfinal_ibfk_2` FOREIGN KEY (`contact_id`) REFERENCES `bookcontact` (`id`),
  ADD CONSTRAINT `bookfinal_ibfk_3` FOREIGN KEY (`prices_id`) REFERENCES `bookprices` (`id`);

--
-- Constraints for table `bookpassengers`
--
ALTER TABLE `bookpassengers`
  ADD CONSTRAINT `bookpassengers_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `bookfinal` (`id`);

--
-- Constraints for table `booktickets`
--
ALTER TABLE `booktickets`
  ADD CONSTRAINT `booktickets_ibfk_1` FOREIGN KEY (`passenger_id`) REFERENCES `bookpassengers` (`id`),
  ADD CONSTRAINT `booktickets_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `legtypes` (`id`);

--
-- Constraints for table `bookupsales`
--
ALTER TABLE `bookupsales`
  ADD CONSTRAINT `bookupsales_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `bookfinal` (`id`),
  ADD CONSTRAINT `bookupsales_ibfk_2` FOREIGN KEY (`upsale_id`) REFERENCES `upsales` (`id`);

--
-- Constraints for table `upsales`
--
ALTER TABLE `upsales`
  ADD CONSTRAINT `upsales_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `upsale_types` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
