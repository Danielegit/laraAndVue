<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function company()
    {
        return $this->belongsTo('App\Companie', 'company_id');
    }
}
