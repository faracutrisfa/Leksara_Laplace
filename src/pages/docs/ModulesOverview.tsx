import type { ReactNode } from "react";
import SectionHeading from "../../components/docs/SectionHeading";
import CodeBlock from "../../components/docs/CodeBlock";
import DataFrameCard from "../../components/docs/DataFrameCard";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

const listClass = "ml-5 list-disc";

type OutputLine = {
  label?: string;
  text: ReactNode;
};

function OutputBlock({ lines }: { lines: OutputLine[] }) {
  return (
    <div className="mt-2 space-y-1 text-[13px] sm:text-[14px] text-neutral-3">
      {lines.map((line, idx) => (
        <p key={idx}>
          {line.label && (
            <span className="font-semibold text-neutral-800">
              {line.label}{" "}
            </span>
          )}
          {line.text}
        </p>
      ))}
    </div>
  );
}


const CART_FLAGS_COLUMNS = [
  "index",
  "review_id",
  "pii_flag",
  "rating_flag",
  "non_alphabetical_flag",
];

const CART_FLAGS_ROWS = [
  [0, 101, "True", "True", "True"],
  [1, 102, "True", "True", "True"],
  [2, 103, "True", "True", "True"],
];

const CART_STATS_COLUMNS = ["index", "review_id", "stats"];

const CART_STATS_ROWS = [
  [
    0,
    101,
    "{'length': 46, 'word_count': 6, 'stopwords': 0, 'punctuations': 6, 'symbols': 0, 'emojis': 1, 'noise_count': 2, 'urls': 0, 'html_tags': [], 'emails': ['user@example.com'], 'phones': [], 'phones_normalized': [], 'emoji_list': ['⭐'], 'addresses': [], 'ids': []}",
  ],
  [
    1,
    102,
    "{'length': 50, 'word_count': 4, 'stopwords': 1, 'punctuations': 4, 'symbols': 12, 'emojis': 0, 'noise_count': 1, 'urls': 0, 'html_tags': [], 'emails': [], 'phones': ['0812-3456-7890'], 'phones_normalized': ['081234567890'], 'emoji_list': [], 'addresses': [], 'ids': []}",
  ],
  [
    2,
    103,
    "{'length': 50, 'word_count': 4, 'stopwords': 1, 'punctuations': 4, 'symbols': 12, 'emojis': 0, 'noise_count': 1, 'urls': 0, 'html_tags': [], 'emails': [], 'phones': [], 'phones_normalized': [], 'emoji_list': [], 'addresses': ['Jl. Melati No. 8 RT 02 RW 04'], 'ids': []}",
  ],
];

const CART_NOISE_COLUMNS = ["index", "review_id", "detect_noise"];

const CART_NOISE_ROWS = [
  [
    0,
    101,
    "{'urls': [], 'html_tags': [], 'emails': ['user@example.com'], 'phones': [], 'emojis': ['⭐'], 'addresses': [], 'ids': []}",
  ],
  [
    1,
    102,
    "{'urls': [], 'html_tags': [], 'emails': [], 'phones': ['0812-3456-7890'], 'emojis': [], 'addresses': [], 'ids': []}",
  ],
  [
    2,
    103,
    "{'urls': [], 'html_tags': [], 'emails': [], 'phones': [], 'emojis': [], 'addresses': ['Jl. Melati No. 8 RT 02 RW 04'], 'ids': []}",
  ],
];


export default function ModulesOverview() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 01. CartBoard ------------------------------------------------------ */}
      <section className="mt-10">
        <SectionHeading index="01" title="CartBoard" />

        <div className={introTextClass}>
          <p>
            Provides data-aware utilities for managing and analyzing structured
            datasets. It helps flag PII, non-alphabeticals, emojis, and detect
            noises within the dataset for cleaner preprocessing and analysis.
          </p>

          <ul className={listClass}>
            <li>
              <span className="font-semibold">Functions: </span>
              <a href="#" className="text-primary-600 hover:underline">
                get_flags
              </a>
              <span className="text-neutral-400">, </span>
              <a href="#" className="text-primary-600 hover:underline">
                get_stats
              </a>
              <span className="text-neutral-400">, </span>
              <a href="#" className="text-primary-600 hover:underline">
                noise_detect
              </a>
            </li>
            <li>Code Implementation :</li>
          </ul>
        </div>

        <section className="mt-6 space-y-6 sm:ml-14">
          <CodeBlock lang="BASH">
            {`raw_reviews = pd.DataFrame(
    {
        "review_id": [101, 102, 103],
        "channel": ["Tokopedia", "Shopee", "WhatsApp"],
        "text": [
            "Barang mantul!!! Email: user@example.com ⭐⭐⭐⭐⭐",
            "Pengiriman lambat :( Hubungi 0812-3456-7890 segera",
            "Halo admin, alamat saya Jl. Melati No. 8 RT 02 RW 04, Bandung",
        ],
    }
)

cartboard_flags = get_flags(raw_reviews, text_column="text")
cartboard_stats = get_stats(raw_reviews, text_column="text")
cartboard_noise = noise_detect(raw_reviews, text_column="text", include_normalized=False)

display(cartboard_flags[["review_id", "pii_flag", "rating_flag", "non_alphabetical_flag"]])
display(cartboard_stats[["review_id", "stats"]])
display(cartboard_noise[["review_id", "detect_noise"]])

single_card = CartBoard(raw_text=raw_reviews.loc[0, "text"], rating=5)
single_card.to_dict()`}
          </CodeBlock>

          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-primary-600">Output</h3>

            <DataFrameCard
              columns={CART_FLAGS_COLUMNS}
              rows={CART_FLAGS_ROWS}
            />
            <DataFrameCard
              columns={CART_STATS_COLUMNS}
              rows={CART_STATS_ROWS}
            />
            <DataFrameCard
              columns={CART_NOISE_COLUMNS}
              rows={CART_NOISE_ROWS}
            />
          </div>
        </section>
      </section>

      {/* 02. ReviewMiner ---------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="02" title="ReviewMiner" />

        <div className={introTextClass}>
          <p>
            These functions collectively clean and standardize text by expanding
            contractions, normalizing slang and spelling, handling acronyms and
            ratings, and managing token masking to reduce bias, ensuring
            consistent, unbiased, and model-ready language data for NLP
            processing.
          </p>

          <ul className={listClass}>
            <li>
              <span className="font-semibold">
                Functions: expand_contraction, word_normalization,
                normalize_slangs, replace_acronym, replace_rating,
                shorten_elongation, mask_rating_tokens, unmask_rating_tokens
              </span>
            </li>
            <li>Code Implementation :</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-primary-600">Input</h3>

            <CodeBlock lang="BASH">
              {`text = "Woooooow, film ini dapet rating 4/5 bgt!!! aku tdk nyangka dgn hasilnya 😭"

print("Original:", text)

clean_text = expand_contraction(text)
clean_text = normalize_slangs(clean_text, mode="replace")
clean_text = replace_acronym(clean_text, mode="replace")
clean_text = shorten_elongation(clean_text, max_repeat=2)
clean_text = replace_rating(clean_text)
clean_text = word_normalization(clean_text, method="stem", mode="keep")

print("Output : ", clean_text)`}
            </CodeBlock>

            <h3 className="mt-6 text-lg font-semibold text-primary-600">
              Output
            </h3>
            <OutputBlock
              lines={[
                {
                  label: "Original:",
                  text: "Woooooow, film ini dapet rating 4/5 bgt!!! aku tdk nyangka dgn hasilnya 😭",
                },
                {
                  label: "Output:",
                  text: "woow film ini dapet rating 4 0 bgt aku tidak nyangka dengan hasil",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 03. ReviewCleaner -------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="03" title="ReviewCleaner" />

        <div className={introTextClass}>
          <p>
            Provides basic, language-aware cleaning utilities for preprocessing
            Indonesian text. It removes noise such as HTML tags, emojis, URLs,
            punctuation, digits, and stopwords, while normalizing casing and
            whitespace.
          </p>

          <ul className={listClass}>
            <li>
              <span className="font-semibold">
                Functions: remove_tags, case_normal, remove_stopwords,
                remove_whitespace, remove_punctuation, remove_digits,
                replace_url, remove_emoji
              </span>
            </li>
            <li>Code Implementation :</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-primary-600">Input</h3>

            <CodeBlock lang="BASH">
              {`from leksara import remove_tags, case_normal, remove_stopwords

text = "<p>Barangnya memang MANTAP banget!!!</p>"

clean_1 = remove_tags(text)
clean_2 = case_normal(clean_1)
clean_3 = remove_stopwords(clean_2)
print(clean_3)`}
            </CodeBlock>

            <h3 className="mt-6 text-lg font-semibold text-primary-600">
              Output
            </h3>
            <OutputBlock
              lines={[
                {
                  text: "barangnya  mantap banget!!!😭",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 04. User Brush ----------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="04" title="User Brush" />

        <div className={introTextClass}>
          <p>
            Specifically made for PII flags that runs a more advanced cleaning
            functions, including remove/replace numbers, address, email, and ID
            number.
          </p>

          <ul className={listClass}>
            <li>
              <span className="font-semibold">
                Functions: replace_phone, replace_address, replace_email,
                replace_id
              </span>
            </li>
            <li>Code Implementation :</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-primary-600">Input</h3>

            <CodeBlock lang="BASH">
              {`from leksara import remove_tags, case_normal, remove_stopwords

text = "<p>Barangnya memang MANTAP banget!!!</p>"

clean_1 = remove_tags(text)
clean_2 = case_normal(clean_1)
clean_3 = remove_stopwords(clean_2)
print(clean_3)`}
            </CodeBlock>

            <h3 className="mt-6 text-lg font-semibold text-primary-600">
              Output
            </h3>
            <OutputBlock
              lines={[
                {
                  text: "Telp: [PHONE_NUMBER], Email: [EMAIL], Alamat: [ADDRESS].",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 05. ReviewChain ---------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="05" title="ReviewChain" />

        <div className={introTextClass}>
          <p>
            Provides end-to-end pipeline execution and orchestration utilities
            for Indonesian text preprocessing. It allows users to build,
            customize, and benchmark chained cleaning operations. Includes
            built-in presets, optional benchmarking, and integrated logging.
          </p>

          <ul className={listClass}>
            <li>
              <span className="font-semibold">
                Functions: leksara, ReviewChain (with from_steps, from_preset,
                fit/transform/fit_transform/process_text/run_on_series,
                named_steps), get_preset, setup_logging, log_pipeline_step.
              </span>
            </li>
            <li>Code Implementation :</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-primary-600">Input</h3>

            <CodeBlock lang="BASH">
              {`from leksara import leksara

texts = ["Hubungi 081234567890 sekarang! Produk BAGUS banget."]
result = leksara(texts, preset="ecommerce_review")
print(result)`}
            </CodeBlock>

            <h3 className="mt-6 text-lg font-semibold text-primary-600">
              Output
            </h3>
            <OutputBlock
              lines={[
                {
                  text: "hubungi [PHONE_NUMBER] sekarang produk bagus banget",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
