import React from "react";

/**Generic Bootstrap Style Alert. Informs user of error. */

function Alert({ type = "danger", message}) {
  return (
      <div className={`alert alert-${type}`} role="alert">
            <p className="mb-0 small">
              {message}
            </p>
      </div>
  );
}

export default Alert;
