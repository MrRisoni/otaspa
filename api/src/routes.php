<?php

require_once 'vendor/autoload.php';
require_once  'database.php';
require_once  'models/Bookings.php';


use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {


    $book = Bookings::find(1);

    var_dump($book);

});
