import Link from "next/link";

const Home = () => (
  <div>
    <h1 className="text-center font-semibold text-4xl">Adaptive Games</h1>
    <span className="divider" />

    <p className="text-center my-20">
      A collection of educational apps/games built to be accessible to children with disabilities.
    </p>

    <div className="card w-96 bg-base-200 shadow-xl">
      <figure>
        <img src="/literacy/demo.gif" alt="Literacy app demo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Literacy</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="/literacy" passHref>
            <a href="dummy" className="btn btn-primary">
              Docs
            </a>
          </Link>
          <a
            href="https://literacy.enak-nalla.dev"
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
