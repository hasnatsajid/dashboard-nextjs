import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Footer = () => {
  return (
    <footer className="bg-white rounded shadow p-5 mb-4 mt-4">
      <div className="row">
        <div className="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
          <p className="mb-0 text-center text-lg-start">
            © 2019-<span className="current-year">{new Date().getFullYear()} </span>
            <a className="text-primary fw-normal" href="https://themesberg.com" target="_blank" rel="noreferrer">
              Hassuu
            </a>
          </p>
        </div>
        <div className="col-12 col-md-8 col-xl-6 text-center text-lg-start">
          {/* <!-- List --> */}
          <ul className="list-inline list-group-flush list-group-borderless text-md-end mb-0">
            <li className="list-inline-item px-0 px-sm-2">
              <a href="https://themesberg.com/about">About</a>
            </li>
            <li className="list-inline-item px-0 px-sm-2">
              <a href="https://themesberg.com/themes">Themes</a>
            </li>
            <li className="list-inline-item px-0 px-sm-2">
              <a href="https://themesberg.com/blog">Blog</a>
            </li>
            <li className="list-inline-item px-0 px-sm-2">
              <a href="https://themesberg.com/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
