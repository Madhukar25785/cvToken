import React from 'react';

const LogoutModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content logout-modal-content">
                    <div className="modal-header logout-modal-header">
                        <h5 className="modal-title">Confirmation</h5>
                        <button type="button" className="btn-close" onClick={onCancel} aria-label="Close"></button>
                    </div>
                    <div className="modal-body logout-modal-body">
                        <p>Are you sure you want to Logout?</p>
                    </div>
                    <div className="modal-footer logout-modal-footer">
                        <button type="button" className="btn-1 login-btn1 btn-cancel" onClick={onCancel}>Cancel</button>
                        <button type="button" className="btn-1 login-btn1 " onClick={onConfirm}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
