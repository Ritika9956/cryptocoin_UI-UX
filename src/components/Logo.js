import React from 'react';
const Logo = () => {
    return (
        <div>

            <button
                type="button"
                className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <i className="bi bi-arrow-up"></i>
            </button>
        </div>
    );
};

export default Logo;
