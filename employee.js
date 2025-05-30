const employee = {
    data() {
        return {
            employees: [
                { id: 1, name: 'John Doe', position: 'Software Developer', department: 'IT' },
                { id: 2, name: 'Jane Smith', position: 'Project Manager', department: 'IT' },
                { id: 3, name: 'Mike Johnson', position: 'Designer', department: 'Design' }
            ],
            showAddForm: false,
            newEmployee: {
                name: '',
                position: '',
                department: ''
            }
        }
    },
    methods: {
        addEmployee() {
            if (this.newEmployee.name && this.newEmployee.position && this.newEmployee.department) {
                this.employees.push({
                    id: this.employees.length + 1,
                    ...this.newEmployee
                });
                this.newEmployee = { name: '', position: '', department: '' };
                this.showAddForm = false;
            }
        },
        deleteEmployee(id) {
            this.employees = this.employees.filter(emp => emp.id !== id);
        }
    },
    template: `
        <div>
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-primary">👥 Employee Management</h2>
                <button class="btn btn-success" @click="showAddForm = !showAddForm">
                    <i class="fas fa-plus"></i> Add Employee
                </button>
            </div>

            <div v-if="showAddForm" class="card mb-4">
                <div class="card-header bg-light">
                    <h5 class="mb-0">Add New Employee</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" v-model="newEmployee.name" placeholder="Enter name">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Position</label>
                            <input type="text" class="form-control" v-model="newEmployee.position" placeholder="Enter position">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Department</label>
                            <input type="text" class="form-control" v-model="newEmployee.department" placeholder="Enter department">
                        </div>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary" @click="addEmployee">Save Employee</button>
                        <button class="btn btn-secondary" @click="showAddForm = false">Cancel</button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Employee List</h5>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="employee in employees" :key="employee.id">
                                    <td>{{ employee.id }}</td>
                                    <td>{{ employee.name }}</td>
                                    <td>{{ employee.position }}</td>
                                    <td>{{ employee.department }}</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary me-2">Edit</button>
                                        <button class="btn btn-sm btn-outline-danger" @click="deleteEmployee(employee.id)">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `
}