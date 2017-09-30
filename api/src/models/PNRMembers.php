<?php

require_once 'Passengers.php';


use Illuminate\Database\Eloquent\Model as EloquentModel;

class PNRMembers extends EloquentModel
{

    protected $table = 'pnr_members';


    public function getPassengers()
    {
        return $this->hasMany('Passengers','id','passenger_id');
    }

}

?>