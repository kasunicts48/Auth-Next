import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="container">
      <nav>
        <Image src="/logo.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner2.jpg" width={966} height={300} />
      </div>
    </div>
  );
}
