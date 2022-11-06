import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './userList/UserList';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        {/* Component Here */}

                        <UserList>
                            
                        </UserList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

