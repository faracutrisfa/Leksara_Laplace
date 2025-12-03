import BlockHeading from "../../components/docs/BlockHeading";
import DocList from "../../components/docs/DocList";
import SectionHeading from "../../components/docs/SectionHeading";
import UseCase from "../../components/docs/UseCase";
import DataFrameCard from "../../components/docs/DataFrameCard";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

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

export default function CartBoard() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      <section className="mt-10">
        <SectionHeading index="01" title="CartBoard" />

        <div className={introTextClass}>
          <p>
            Provides data-aware utilities for managing and analyzing structured
            datasets. Helps user flags PII, non-alphabeticals, ratings, detect
            noises, acquire statistics of the data given. Functions: get_flags,
            noise_detect, noise_detect
          </p>
        </div>

        {/* 01 — get_flags --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="01"
            title="get_flags"
            signature="get_flags(data: Any, non_alpha_threshold: float = DEFAULT_NON_ALPHA_THRESHOLD, merge_input:bool = True, text_column: str= “text”)"
            description="Provide flags to datas containing PII, rating, and non-alphabeticals (e.g., PII’s like NIK, address, rating patterns like ⅘, non-alphabeticals like emojis, url)"
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>
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

            <UseCase title="Use Case">
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

display(cartboard_flags[["review_id", "pii_flag", "rating_flag", "non_alphabetical_flag"]])

single_card = CartBoard(raw_text=raw_reviews.loc[0, "text"], rating=5)
single_card.to_dict()`}
            </UseCase>

            <DataFrameCard
              columns={CART_FLAGS_COLUMNS}
              rows={CART_FLAGS_ROWS}
            />

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/frames/cartboard.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 02. get_stats ------------------------------------------------------ */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="02"
            title="get_stats"
            signature='get_stats(data: Any, merge_input: bool = True, as_dict: bool = True, text_column: str = "text")'
            description="Provides a comprehensive statistical overview of your text data, including metrics like word count, sentence length, and frequency of non-alphabetic symbols."
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>

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
                    name: "merge_input",
                    type: "bool",
                    defaultValue: "True",
                    description:
                      "Whether to return flags merged with the original data",
                  },
                  {
                    name: "as_dict",
                    type: "bool",
                    defaultValue: "True",
                    description:
                      "The function returns the result as a dictionary",
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

            <UseCase title="Use Case">
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

cartboard_stats = noise_detect(raw_reviews, text_column="text")

display(cartboard_stats[["review_id", "stats"]])

single_card = CartBoard(raw_text=raw_reviews.loc[0, "text"], rating=5)
single_card.to_dict()`}
            </UseCase>

            <DataFrameCard
              columns={CART_STATS_COLUMNS}
              rows={CART_STATS_ROWS}
            />

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/frames/cartboard.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 03. noise_detect ------------------------------------------------------ */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="03"
            title="noise_detect"
            signature='noise_detect(data: Any, merge_input: bool = True, as_dict: bool = True, text_column: str = "text")'
            description="Provides a comprehensive statistical overview of your text data, including metrics like word count, sentence length, and frequency of non-alphabetic symbols."
          />

          <div className="space-y-6 sm:ml-14">
            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Parameters
              </h3>

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
                    name: "merge_input",
                    type: "bool",
                    defaultValue: "True",
                    description:
                      "Whether to return flags merged with the original data",
                  },
                  {
                    name: "as_dict",
                    type: "bool",
                    defaultValue: "True",
                    description:
                      "The function returns the result as a dictionary",
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

            <UseCase title="Use Case">
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

cartboard_stats = noise_detect(raw_reviews, text_column="text")

display(cartboard_stats[["review_id", "stats"]])

single_card = CartBoard(raw_text=raw_reviews.loc[0, "text"], rating=5)
single_card.to_dict()`}
            </UseCase>

            <DataFrameCard
              columns={CART_STATS_COLUMNS}
              rows={CART_STATS_ROWS}
            />

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/frames/cartboard.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
