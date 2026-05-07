export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              Honglei Li / 李红蕾
            </h1>

            <p className="mt-4 text-xl text-gray-700">
              Assistant Professor in Data & Information Sciences
            </p>

            <p className="text-gray-600">
              Northumbria University, United Kingdom
            </p>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-gray-700">
            I study how data, platforms, and algorithms shape trust,
            engagement, and decision-making across social media,
            online communities, recommender systems, and digital business
            environments.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#publications"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Publications
            </a>

            <a
              href="#projects"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Projects
            </a>

            <a
              href="mailto:Honglei.Li@northumbria.ac.uk"
              className="rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Research Themes</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Recommender Systems & Platform Governance
            </h3>
            <p className="mt-3 text-gray-700">
              Research on algorithmic governance, recommendation systems,
              and digital platform responsibility.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Social Media & Counterfeit Product Prevention
            </h3>
            <p className="mt-3 text-gray-700">
              Exploring influencer ecosystems, misinformation, and
              counterfeit product promotion on social platforms.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Blockchain-enabled E-Commerce
            </h3>
            <p className="mt-3 text-gray-700">
              Investigating blockchain technologies for trust,
              traceability, and digital commerce governance.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">
              Online Communities & User Engagement
            </h3>
            <p className="mt-3 text-gray-700">
              Understanding participation, trust, and continuance
              intention in virtual communities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}