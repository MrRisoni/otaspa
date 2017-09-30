<?php

require_once 'vendor/autoload.php';
require_once  'database.php';
require_once  'models/Bookings.php';


use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/[{name}]', function (Request $request, Response $response, array $args) {


    $book = Bookings::find(1);
    $passengers = $book->getPassengers;

    foreach ($passengers as $pass){
        echo $pass->surname;
    }

    $pnrs = $book->getPNRs;

    foreach ($pnrs as $pnr)
    {
        echo $pnr->gds_pnr.'<br>';

        $pnrElements = $pnr->getPNRElements;
        foreach ($pnrElements as $elem)
        {
            $psnrgs = $elem->getPassengers;
            foreach ($psnrgs as $pap)
            {
                echo $pap->surname;
            }
        }
    }


});
