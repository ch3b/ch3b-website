const summary = 'Blah blah hello hello';

export const SummarySection: React.FC = () => {
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Summary</h2>
        <p className="text-lg text-gray-300">
            {summary}
        </p>
      </section>
    );
  };