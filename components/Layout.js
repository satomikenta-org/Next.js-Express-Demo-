import Link from 'next/link';

const Layout = ({ children }) => (
  <div>
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-title">Next-Express </div>
      </div>
      <div className="navbar-right">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </div>
    </div>
    { children }
    <style jsx>{`
      .navbar {
        background-color: #5656da;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .navbar-left {
        width: 50vw;
      }
      .navbar-title {
        margin: 10px;
        color: white;
        font-size: 45px;
      }
      .navbar-right {
        width: 50vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .navbar a {
        font-size: 1.3rem;
        text-decoration: none;
        color: grey;
      }
      .navbar a:hover {
        cursor: pointer;
        text-decoration: underline;
        color: white;
      }
    `}</style>
  </div>
);

export default Layout;