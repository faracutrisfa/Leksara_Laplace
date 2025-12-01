import SectionHeading from "../../components/docs/SectionHeading";
import BlockHeading from "../../components/docs/BlockHeading";
import DocList from "../../components/docs/DocList";
import UseCase from "../../components/docs/UseCase";

const INTRO_TEXT_CLASS =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

const CLASS_PARAMS = [
  <span key="data">
    <strong>data</strong> (iterable[str] or pandas.Series): Input text data.
  </span>,
];

const CLASS_METHODS = [
  <span key="from_steps">
    <strong>from_steps(functions)</strong> → Build a chain manually.
  </span>,
  <span key="from_preset">
    <strong>from_preset(name)</strong> → Load a built-in preset pipeline.
  </span>,
  <span key="run">
    <strong>run(text)</strong> → Process a single text input.
  </span>,
  <span key="run_on_series">
    <strong>run_on_series(series)</strong> → Run chain on pandas Series.
  </span>,
  <span key="transform">
    <strong>transform(text)</strong> → Internal method to run transforms in one
    step.
  </span>,
  <span key="named_steps">
    <strong>named_steps</strong> → Returns the names of each transform step.
  </span>,
];

const LEKSARA_PARAMS = [
  "data (iterable[str] or pandas.Series): Input text data.",
  `pipeline (dict, optional): Custom pipeline defined as {"patterns": [...], "functions": [...]}.`,
  `preset (str, optional): Built-in preset name (e.g., "ecommerce_review").`,
  "benchmark (bool): If True, returns execution time per step.",
];

const GET_PRESET_PARAMS = [
  `name (str): Preset name (e.g., "ecommerce_review").`,
];

const GET_PRESET_RETURN = [
  `dict: Pipeline definition with "patterns" and "functions" lists.`,
];

function SourceSection() {
  return (
    <section>
      <h3 className="text-lg font-semibold text-primary-600">Source</h3>
      <a href="#" className="text-primary-600 underline">
        Source Code
      </a>
    </section>
  );
}

export default function ReviewChain() {
  return (
    <article className="text-sm sm:text-base leading-relaxed text-slate-700">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      <section className="mt-10">
        {/* ================= 05. ReviewChain – Overview ================= */}
        <SectionHeading index="05" title="ReviewChain" />

        <div className={INTRO_TEXT_CLASS}>
          <p>
            End-to-end Indonesian text preprocessing pipeline with support for
            customizable steps, benchmarking, and logging. Functions &amp;
            Class: run_pipeline (includes benchmark and preset), ReviewChain
            (class), get_preset, logging (includes setup_logging and
            log_pipeline_step).
          </p>
        </div>

        {/* ================= 01 — leksara ================= */}
        <div className="mt-6">
          <BlockHeading
            index="01"
            title="leksara"
            signature="leksara(data, pipeline=None, *, benchmark=False, preset=None) → list"
            description="Executes a full preprocessing pipeline consisting of patterns and functions in sequential order."
          />

          <div className="mt-6 space-y-6 sm:ml-14">
            {/* Parameters */}
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
              <DocList items={LEKSARA_PARAMS} />
            </section>

            {/* Return */}
            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <p className="mt-2 text-slate-600">
                <strong>list</strong>: Cleaned text list or Series; if{" "}
                <code>benchmark=True</code>, returns{" "}
                <code>(results, metrics)</code> tuple.
              </p>
            </section>

            {/* Use cases */}
            <UseCase title="Use Case">
              {`from leksara import leksara

def append_suffix(text: str, suffix: str) -> str:
    return f"{text}{suffix}"

def uppercase(text: str) -> str:
    return text.upper()

# Custom pipeline combining replacement, suffix, and case normalization
pipeline = {
    "patterns": [lambda s: s.replace("buruk", "baik")],
    "functions": [
        (append_suffix, {"suffix": "!"}),
        uppercase,
    ],
}

result = leksara(["produk buruk"], pipeline=pipeline)
print(result)`}
            </UseCase>

            <UseCase title="Use Case - Custom pipeline using multiple Leksara modules">
              {`from leksara import leksara
from leksara.function import case_normal, remove_whitespace, remove_punctuation
from leksara.pattern import replace_phone, replace_email

# Define a custom pipeline combining PII masking and text cleaning
custom_pipeline = {
    "patterns": [
        (replace_phone, {"mode": "replace"}),
        (replace_email, {"mode": "replace"}),
    ],
    "functions": [
        case_normal,
        remove_punctuation,
        remove_whitespace
    ],
}

texts = [
    "Hubungi 0812-3456-7890 atau email ke Test@Example.com !!!",
    "WA: +628987654321. Produk BAGUS banget!!"
]

result = leksara(texts, pipeline=custom_pipeline)
print(result)

>>> “hubungi [PHONE_NUMBER] atau email ke [EMAIL]”
>>> “wa [PHONE_NUMBER] produk bagus banget”`}
            </UseCase>

            <UseCase title="Use Case - Using built-in preset (ecommerce_review)">
              {`from leksara import leksara

texts = [
    "Hubungi saya di 0812-3456-7890, Email: test@mail.com!",
    "Produk bagus banget!!!"
]

result = leksara(texts, preset="ecommerce_review")
print(result)

>>> “hubung [PHONE_NUMBER] email [EMAIL]”
>>> “produk bagus banget”
`}
            </UseCase>

            <UseCase title="Use Case - Benchmark mode">
              {`from leksara import leksara
from leksara.function import case_normal, remove_punctuation, remove_whitespace
from leksara.pattern import replace_phone

# Define a custom pipeline combining a UserBrush pattern and core cleaning functions
pipeline = {
    "patterns": [
        (replace_phone, {"mode": "replace"})  # Mask phone numbers before cleaning
    ],
    "functions": [
        case_normal,
        remove_punctuation,
        remove_whitespace
    ],
}

texts = ["Hubungi saya di 0812-3456-7890 sekarang juga!!!   "]

result, metrics = leksara(texts, pipeline=pipeline, benchmark=True)
print("Result:", result)
print("Benchmark:", metrics)

>>> “Result: ["hubungi saya di phone_number sekarang juga"]”
>>> “Benchmark: {
      'n_steps': 4,
      'total_time_sec': 0.0041,
      'per_step': [
          ('replace_phone', 0.0012),
          ('case_normal', 0.0010),
          ('remove_punctuation', 0.0011),
          ('remove_whitespace', 0.0008)
      ]
    }”`}
            </UseCase>

            <UseCase title="Use Case - Handles mixed data types">
              {`from leksara import leksara
from leksara.function import case_normal

# Define a simple pipeline with a built-in Leksara function
pipeline = {"patterns": [], "functions": [case_normal]}

data = ["HALO", None, 42]
result = leksara(data, pipeline=pipeline)
print(result)

>>> “halo, None, 42”
`}
            </UseCase>

            <SourceSection />
          </div>
        </div>

        {/* ================= 02 — ReviewChain (Class) ================= */}
        <div className="mt-10">
          <BlockHeading
            index="02"
            title="ReviewChain (Class)"
            signature="class ReviewChain(steps=None)"
            description="Object-oriented pipeline runner, compatible with scikit-learn style APIs."
          />

          <div className="mt-6 space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Constructor Parameters
              </h3>
              <DocList items={CLASS_PARAMS} />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Class Methods
              </h3>
              <DocList items={CLASS_METHODS} />
            </section>

            <UseCase title="Use Case — Build from steps (from_steps)">
              {`from leksara.core import ReviewChain
from leksara.function import remove_tags, case_normal, remove_whitespace

# Build a chain manually from basic cleaning steps
rc = ReviewChain.from_steps(functions=[remove_tags, case_normal, remove_whitespace])

text = "<p>Produk BAGUS banget!</p>"
print(rc.process_text(text))

>>> "produk bagus banget!"
`}
            </UseCase>

            <UseCase title="Use Case — Use a preset (from_preset)">
              {`from leksara.core import ReviewChain

# Load predefined "ecommerce_review" pipeline
rc = ReviewChain.from_preset("ecommerce_review")

texts = ["Hubungi 081234567890 segera."]
out = rc.fit_transform(texts)
print(out)

>>> "Hubung [PHONE_NUMBER] segera."`}
            </UseCase>

            <UseCase title="Use Case — Run on a pandas Series (run_on_series)">
              {`import pandas as pd
from leksara.core import ReviewChain
from leksara.function import case_normal

series = pd.Series(["HALO", "DUNIA"])
rc = ReviewChain([case_normal])

out = rc.run_on_series(series)
print(list(out))

>>> "halo", "dunia"
`}
            </UseCase>

            <UseCase title="Use Case — Inspect step names (named_steps)">
              {`from leksara.core import ReviewChain
from leksara.function import remove_tags, case_normal

rc = ReviewChain([remove_tags, case_normal])
print(rc.named_steps)

>>> “{'step_0': 'remove_tags', 'step_1': 'case_normal'}”`}
            </UseCase>

            <SourceSection />
          </div>
        </div>

        {/* ================= 03 — get_preset ================= */}
        <div className="mt-10">
          <BlockHeading
            index="03"
            title="get_preset"
            signature="get_preset(name: str) -> dict"
            description="Retrieves a predefined pipeline preset as a dictionary."
          />

          <div className="mt-6 space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
              <DocList items={GET_PRESET_PARAMS} />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">Return</h3>
              <DocList items={GET_PRESET_RETURN} />
            </section>

            <UseCase title="Use Case">
              {`from leksara.core import get_preset

# Retrieve the predefined pipeline
preset = get_preset("ecommerce_review")

# Inspect the pipeline structure
print(preset.keys())
print("Pattern steps:", len(preset["patterns"]))
print("Function steps:", len(preset["functions"]))

>>> dict_keys(['patterns', 'functions'])
>>> Pattern steps: 4
>>> Function steps: 13`}
            </UseCase>

            <SourceSection />
          </div>
        </div>

        {/* ================= 04 — logging ================= */}
        <div className="mt-10">
          <BlockHeading
            index="04"
            title="logging"
            signature="logging utilities (setup_logging, log_pipeline_step)"
            description="Helpers to track, record, and debug pipeline execution."
          />

          <div className="mt-6 space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Overview
              </h3>
              <DocList
                items={[
                  "setup_logging(config): Configure logging format, level, and handlers.",
                  "log_pipeline_step(step_name, metrics): Log step-wise metrics during pipeline execution.",
                ]}
              />
            </section>

            <UseCase title="Use Case — Basic logging setup">
              {`from leksara.logging import setup_logging, log_pipeline_step

# Configure basic logging
setup_logging(level="INFO")

def dummy_step(text: str) -> str:
    out = text.lower()
    log_pipeline_step("dummy_step", {"length": len(out)})
    return out

print(dummy_step("PRODUK BAGUS BANGET"))`}
            </UseCase>

            <SourceSection />
          </div>
        </div>
      </section>
    </article>
  );
}
