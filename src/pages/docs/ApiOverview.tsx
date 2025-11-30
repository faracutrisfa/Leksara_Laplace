export default function ApiOverview() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Api Overview
      </h1>
    </article>
  );
}

{
  /* <div className="mt-6 space-y-6 sm:ml-14">
  <section>
    <h3 className="text-lg font-semibold text-primary-600">Parameters</h3>
    <DocList
      variant="params"
      items={[
        {
          name: "data",
          type: "Any",
          description:
            "Input text, list of texts, or DataFrame to analyze",
        },
        {
          name: "non_alpha_threshold",
          type: "float",
          defaultValue: "DEFAULT_NON_ALPHA_THRESHOLD",
          description:
            "Maximum allowed ratio of non-alphabetic characters before flagging",
        },
        {
          name: "merge_input",
          type: "bool",
          defaultValue: "True",
          description:
            "Whether to return flags merged with the original data",
        },
        {
          name: "text_column",
          type: "str",
          defaultValue: '"text"',
          description:
            "Column name containing text if data is a DataFrame",
        },
      ]}
    />
  </section>

  <section>
    <h3 className="text-lg font-semibold text-primary-600">Return</h3>
    <DocList
      variant="params"
      items={[
        {
          name: "pd.DataFrame",
          description: "Always returns a DataFrame (pd.DataFrame).",
        },
      ]}
    />
  </section>

 

  
</div> */
}
