const home = {
    template: `
        <div class="text-center">
            <div class="mb-4">
                <h1 class="display-4 text-primary mb-3">🏠 Welcome Home</h1>
                <p class="lead text-muted">This is the main dashboard of the Employee Management System</p>
            </div>
            
            <div class="row mt-5">
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-primary">📊 Dashboard</h5>
                            <p class="card-text">View system overview and statistics</p>
                            <button class="btn btn-outline-primary">View Stats</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-success">🏢 Quick Actions</h5>
                            <p class="card-text">Perform common management tasks</p>
                            <button class="btn btn-outline-success">Quick Start</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-info">⚙️ Settings</h5>
                            <p class="card-text">Configure system preferences</p>
                            <button class="btn btn-outline-info">Configure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}