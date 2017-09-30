<?php

require_once 'PNRMembers.php';

use Illuminate\Database\Eloquent\Model as EloquentModel;

class PNR extends EloquentModel
{

    protected $table = 'pnrs';
    public function getPNRElements()
    {
        return $this->hasMany('PNRMembers','pnr_id');
    }
}

?>