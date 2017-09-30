-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2017 at 07:56 AM
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
-- Table structure for table `bags`
--

CREATE TABLE `bags` (
  `id` int(10) UNSIGNED NOT NULL,
  `pnr_id` int(10) UNSIGNED NOT NULL,
  `passenger_id` int(10) UNSIGNED NOT NULL,
  `bag_no` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bags`
--

INSERT INTO `bags` (`id`, `pnr_id`, `passenger_id`, `bag_no`) VALUES
(1, 1, 1, '7456434348794242'),
(2, 2, 1, '53547353535353');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(10) UNSIGNED NOT NULL,
  `flightdata_id` int(10) UNSIGNED NOT NULL,
  `pricing_id` int(10) UNSIGNED NOT NULL,
  `status_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `flightdata_id`, `pricing_id`, `status_id`) VALUES
(1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bundle_booking`
--

CREATE TABLE `bundle_booking` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `flightdata`
--

CREATE TABLE `flightdata` (
  `id` int(11) UNSIGNED NOT NULL,
  `dep_date` datetime NOT NULL,
  `ret_date` datetime NOT NULL,
  `round_trip` tinyint(4) NOT NULL,
  `from_air` varchar(3) NOT NULL,
  `to_air` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `flightdata`
--

INSERT INTO `flightdata` (`id`, `dep_date`, `ret_date`, `round_trip`, `from_air`, `to_air`) VALUES
(1, '2017-10-11 08:25:00', '0000-00-00 00:00:00', 0, 'ATH', 'LHR');

-- --------------------------------------------------------

--
-- Table structure for table `passengers`
--

CREATE TABLE `passengers` (
  `id` int(10) UNSIGNED NOT NULL,
  `gender` varchar(1) NOT NULL,
  `age_type` varchar(3) NOT NULL,
  `surname` varchar(25) NOT NULL,
  `name` varchar(20) NOT NULL,
  `passport_no` varchar(600) NOT NULL,
  `dob` date NOT NULL,
  `expire_date` date NOT NULL,
  `issue_country` varchar(2) NOT NULL,
  `nationality` varchar(2) NOT NULL,
  `booking_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `passengers`
--

INSERT INTO `passengers` (`id`, `gender`, `age_type`, `surname`, `name`, `passport_no`, `dob`, `expire_date`, `issue_country`, `nationality`, `booking_id`) VALUES
(1, 'M', 'ADR', 'RASKOLNIKOV', 'ALEXEI', 'fgdffd455452323232ffdfd', '1982-02-05', '2021-02-05', 'CH', 'RU', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pnrs`
--

CREATE TABLE `pnrs` (
  `id` int(11) UNSIGNED NOT NULL,
  `leg_no` tinyint(3) UNSIGNED NOT NULL,
  `gds_pnr` varchar(8) NOT NULL,
  `airline_pnr` varchar(8) NOT NULL,
  `airline` varchar(2) NOT NULL,
  `fly_date` datetime NOT NULL,
  `booking_id` int(11) UNSIGNED NOT NULL,
  `pnr_order` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pnrs`
--

INSERT INTO `pnrs` (`id`, `leg_no`, `gds_pnr`, `airline_pnr`, `airline`, `fly_date`, `booking_id`, `pnr_order`) VALUES
(1, 0, '4RTXY1WX', 'XC56OPAB', 'FR', '2017-10-11 08:25:00', 1, 0),
(2, 0, 'XVBOLD', 'XVBOLD', 'A3', '2017-10-11 13:15:00', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pnr_members`
--

CREATE TABLE `pnr_members` (
  `id` int(10) UNSIGNED NOT NULL,
  `pnr_id` int(10) UNSIGNED NOT NULL,
  `passenger_id` int(10) UNSIGNED NOT NULL,
  `ticketNo` varchar(17) NOT NULL,
  `ticketPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pnr_members`
--

INSERT INTO `pnr_members` (`id`, `pnr_id`, `passenger_id`, `ticketNo`, `ticketPrice`) VALUES
(1, 1, 1, '524522323624242', '28.00'),
(2, 2, 1, '07534773000', '256.00');

-- --------------------------------------------------------

--
-- Table structure for table `pricing`
--

CREATE TABLE `pricing` (
  `id` int(11) UNSIGNED NOT NULL,
  `total_net_price` decimal(10,2) NOT NULL,
  `fees` decimal(10,2) NOT NULL,
  `added` decimal(10,2) NOT NULL,
  `upsales` decimal(10,2) NOT NULL,
  `total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pricing`
--

INSERT INTO `pricing` (`id`, `total_net_price`, `fees`, `added`, `upsales`, `total`) VALUES
(1, '450.00', '2.50', '0.00', '0.00', '452.50');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(10) UNSIGNED NOT NULL,
  `successful` tinyint(3) UNSIGNED NOT NULL,
  `void` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `successful`, `void`) VALUES
(1, 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bags`
--
ALTER TABLE `bags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pnr_id` (`pnr_id`),
  ADD KEY `passenger_id` (`passenger_id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pricing_id` (`pricing_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `flightdata_id` (`flightdata_id`);

--
-- Indexes for table `flightdata`
--
ALTER TABLE `flightdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `passengers`
--
ALTER TABLE `passengers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_id` (`booking_id`);

--
-- Indexes for table `pnrs`
--
ALTER TABLE `pnrs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_id` (`booking_id`);

--
-- Indexes for table `pnr_members`
--
ALTER TABLE `pnr_members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pnr_id` (`pnr_id`),
  ADD KEY `passenger_id` (`passenger_id`);

--
-- Indexes for table `pricing`
--
ALTER TABLE `pricing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bags`
--
ALTER TABLE `bags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `flightdata`
--
ALTER TABLE `flightdata`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `passengers`
--
ALTER TABLE `passengers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `pnrs`
--
ALTER TABLE `pnrs`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `pnr_members`
--
ALTER TABLE `pnr_members`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `pricing`
--
ALTER TABLE `pricing`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bags`
--
ALTER TABLE `bags`
  ADD CONSTRAINT `bags_ibfk_1` FOREIGN KEY (`pnr_id`) REFERENCES `pnrs` (`id`),
  ADD CONSTRAINT `bags_ibfk_2` FOREIGN KEY (`passenger_id`) REFERENCES `passengers` (`id`);

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`pricing_id`) REFERENCES `pricing` (`id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  ADD CONSTRAINT `bookings_ibfk_3` FOREIGN KEY (`flightdata_id`) REFERENCES `flightdata` (`id`);

--
-- Constraints for table `passengers`
--
ALTER TABLE `passengers`
  ADD CONSTRAINT `passengers_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);

--
-- Constraints for table `pnrs`
--
ALTER TABLE `pnrs`
  ADD CONSTRAINT `pnrs_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);

--
-- Constraints for table `pnr_members`
--
ALTER TABLE `pnr_members`
  ADD CONSTRAINT `pnr_members_ibfk_1` FOREIGN KEY (`pnr_id`) REFERENCES `pnrs` (`id`),
  ADD CONSTRAINT `pnr_members_ibfk_2` FOREIGN KEY (`passenger_id`) REFERENCES `passengers` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
