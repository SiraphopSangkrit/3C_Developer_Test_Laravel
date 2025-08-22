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
        return inertia('welcome', compact('departments', 'employees'));
    }


}
