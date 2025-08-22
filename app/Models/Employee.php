<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employee';

    protected $primaryKey = 'employee_id';

    protected $fillable = [
        'first_name',
        'last_name',
        'department_id',
    ];

    public function department()
    {
        return $this->hasOne(Department::class, 'department_id','department_id');
    }
}
