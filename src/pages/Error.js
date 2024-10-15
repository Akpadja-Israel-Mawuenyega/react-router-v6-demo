import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <div className="error-page">
        <h2>404</h2>
        <p>Page not found.</p>
        <Link to="/">Go back home.</Link>
      </div>
    </section>
  );
};
export default Error;
