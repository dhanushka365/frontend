const department = {
    data() {
        return {
            departments: [
                { id: 1, name: 'Information Technology', head: 'John Smith', employees: 25 },
                { id: 2, name: 'Human Resources', head: 'Sarah Johnson', employees: 8 },
                { id: 3, name: 'Finance', head: 'Michael Brown', employees: 12 },
                { id: 4, name: 'Marketing', head: 'Emily Davis', employees: 15 }
            ],
            showAddForm: false,
            newDepartment: {
                name: '',
                head: '',
                employees: 0
            }
        }
    },
    methods: {
        addDepartment() {
            if (this.newDepartment.name && this.newDepartment.head) {
                this.departments.push({
                    id: this.departments.length + 1,
                    ...this.newDepartment
                });
                this.newDepartment = { name: '', head: '', employees: 0 };
                this.showAddForm = false;
            }
        },
        deleteDepartment(id) {
            this.departments = this.departments.filter(dept => dept.id !== id);
        }
    },
    template: `
        <div>
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-success">🏢 Department Management</h2>
                <button class="btn btn-success" @click="showAddForm = !showAddForm">
                    <i class="fas fa-plus"></i> Add Department
                </button>
            </div>

            <div v-if="showAddForm" class="card mb-4">
                <div class="card-header bg-light">
                    <h5 class="mb-0">Add New Department</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Department Name</label>
                            <input type="text" class="form-control" v-model="newDepartment.name" placeholder="Enter department name">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Department Head</label>
                            <input type="text" class="form-control" v-model="newDepartment.head" placeholder="Enter department head">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Number of Employees</label>
                            <input type="number" class="form-control" v-model="newDepartment.employees" placeholder="0">
                        </div>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary" @click="addDepartment">Save Department</button>
                        <button class="btn btn-secondary" @click="showAddForm = false">Cancel</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div v-for="department in departments" :key="department.id" class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-header bg-success text-white">
                            <h5 class="mb-0">{{ department.name }}</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                <strong>Department Head:</strong><br>
                                {{ department.head }}
                            </p>
                            <p class="card-text">
                                <strong>Total Employees:</strong><br>
                                <span class="badge bg-primary">{{ department.employees }}</span>
                            </p>
                        </div>
                        <div class="card-footer bg-light">
                            <div class="d-flex gap-2">
                                <button class="btn btn-sm btn-outline-primary flex-fill">Edit</button>
                                <button class="btn btn-sm btn-outline-danger flex-fill" @click="deleteDepartment(department.id)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}