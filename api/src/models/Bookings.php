<?php

require_once 'Passengers.php';
require_once 'PNR.php';

use Illuminate\Database\Eloquent\Model as EloquentModel;

class Bookings extends EloquentModel
{

    public function getPassengers()
    {
        return $this->hasMany('Passengers','booking_id');
    }


    public function getPNRs()
    {
        return $this->hasMany('PNR','booking_id');
    }
}

?>