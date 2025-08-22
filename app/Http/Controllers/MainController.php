<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\Employee;


class MainController extends Controller
{
public function index()
    {
        $departments = Department::all();
        $employees = Employee::with('department')->get();
        $data = [
            'employees' => $employees,
            'departments' => $departments
        ];
        $json_string = json_encode($data, JSON_PRETTY_PRINT);
        echo $json_string;
        return inertia('welcome', compact('departments', 'employees'));
    }


}
