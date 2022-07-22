import Link from "next/link";

interface Props {
  className: string;
}

const Nav = ({className}: Props) => (
  <ul className={className}>
    <li>
      <Link href="/word-list" passHref>
        <a href="dummy">Manage word lists</a>
      </Link>
    </li>
  </ul>
);

export default Nav;
