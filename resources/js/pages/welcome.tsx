import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Head, usePage } from '@inertiajs/react';

export interface Department {
    department_id: number;
    department_name: string;
}

export interface Employee {
    employee_id: number;
    first_name: string;
    last_name: string;
    department: Department ; 
}

export interface SharedData {
    departments: Department[];
    employees: Employee[];
    [key: string]: unknown;
}

export default function Welcome() {
    const { departments, employees } = usePage<SharedData>().props;
    console.log('Departments:', departments);
    console.log('Employees:', employees);
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl"></header>

                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[600px]  flex-col gap-4">
                        <div className=" w-full border-1 border-white p-4 rounded-lg">
                            <p className="text-white"> Department</p>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Department ID</TableHead>
                                        <TableHead>Department Name</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {departments.map((department) => (
                                        <TableRow key={department.department_id}>
                                            <TableCell>{department.department_id}</TableCell>
                                            <TableCell>{department.department_name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                         <div className=" w-full border-1 border-white p-4 rounded-lg">
                            <p className="text-white"> Employee</p>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Employee ID</TableHead>
                                        <TableHead>First Name</TableHead>
                                        <TableHead>Last Name</TableHead>
                                            <TableHead>Department Name</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {employees.map((employee) => (
                                        <TableRow key={employee.employee_id}>
                                            <TableCell>{employee.employee_id}</TableCell>
                                            <TableCell>{employee.first_name}</TableCell>
                                            <TableCell>{employee.last_name}</TableCell>
                                             <TableCell>{employee.department?.department_name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
