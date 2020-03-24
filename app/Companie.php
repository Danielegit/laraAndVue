<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Companie extends Model
{
    public function products()
    {
        return $this->hasMany('App\Product', 'company_id');
    }
}
