import BlockHeading from "../../components/docs/BlockHeading";
import DocList from "../../components/docs/DocList";
import SectionHeading from "../../components/docs/SectionHeading";
import UseCase from "../../components/docs/UseCase";

const INTRO_TEXT_CLASS =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function ApiOverview() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        API Overview
      </h1>

      {/* 01 — CartBoard ===================================================== */}
      <section className="mt-10">
        <SectionHeading index="01" title="CartBoard" />

        <div className={INTRO_TEXT_CLASS}>
          <p>
            <span className="font-semibold">Module:</span>{" "}
            <code className="font-code text-[12px] sm:text-[13px]">
              leksara.cartboard
            </code>
          </p>

          <p className="mt-2">
            Provides data-aware utilities for managing and analyzing structured
            datasets. It helps flag PII, non-alphabeticals, ratings, detect
            noises, and acquire statistics of the data given (length, tokens,
            emojis, etc.).{" "}
            <span className="font-semibold">
              Functions: get_flags, get_stats, noise_detect.
            </span>
          </p>
        </div>

        {/* 01.1 get_flags ---------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="01"
            title="get_flags"
            signature="get_flags(raw_text: str) → dict"
            description="Provide flags to data containing PII, rating, and non-alphabeticals."
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
                    name: "raw_text",
                    type: "str",
                    description:
                      "Raw text that may contain rating patterns, PII, and non-alphabeticals (emoji, URLs, symbols, etc.).",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "dict",
                    description:
                      "Dictionary containing keys such as raw_text, rating, pii_flag, and non_alphabetical_flag.",
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
          </div>
        </div>

        {/* 01.2 get_stats ---------------------------------------------------- */}
        <div className="mt-10 space-y-6">
          <BlockHeading
            index="02"
            title="get_stats"
            signature="get_stats(raw_text: int | float) → dict"
            description="Provide key statistics for the given data."
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
                    name: "raw_text",
                    type: "int | float",
                    description:
                      "Raw value or numeric representation used for deriving statistics.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "dict",
                    description:
                      "Dictionary returning length, word_count, Indonesian stopword hits, emoji count, and whitespace metrics.",
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

cartboard_stats = get_stats(raw_reviews, text_column="text")

display(cartboard_stats[["review_id", "stats"]])

single_card = CartBoard(raw_text=raw_reviews.loc[0, "text"], rating=5)
single_card.to_dict()`}
            </UseCase>
          </div>
        </div>

        {/* 01.3 noise_detect ------------------------------------------------- */}
        <div className="mt-10 space-y-6">
          <BlockHeading
            index="03"
            title="noise_detect"
            signature="noise_detect(raw_text: str, merge_input: bool = True, include_normalized: bool = True) → dict"
            description="Detect raw URLs, HTML tags, emails, phones, emojis, and optionally normalized phone numbers from input data."
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
                    name: "raw_text",
                    type: "str",
                    description: "Input text to analyze for noise.",
                  },
                  {
                    name: "merge_input",
                    type: "bool",
                    defaultValue: "True",
                    description:
                      "If True, merge noise information back with the original data.",
                  },
                  {
                    name: "include_normalized",
                    type: "bool",
                    defaultValue: "True",
                    description:
                      "If True, also include normalized phone numbers in the result.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "dict",
                    description:
                      "Dictionary returning URLs, HTML tags, emails, phones, emojis, and optionally normalized phone numbers.",
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

cartboard_noise = noise_detect(raw_reviews, text_column="text", include_normalized=False)

display(cartboard_noise[["review_id", "detect_noise"]])

single_card = CartBoard(raw_text=raw_reviews.loc[0, "text"], rating=5)
single_card.to_dict()`}
            </UseCase>
          </div>
        </div>
      </section>

      {/* 02 — ReviewMiner =================================================== */}
      <section className="mt-12">
        <SectionHeading index="02" title="ReviewMiner" />

        <div className={INTRO_TEXT_CLASS}>
          <p>
            <span className="font-semibold">Module:</span>{" "}
            <code className="font-code text-[12px] sm:text-[13px]">
              leksara.function
            </code>
          </p>

          <p className="mt-2">
            Specialized for user reviews. Handles rating normalization, slang
            and contraction expansion, acronym processing, and word-level
            normalization while preserving important tokens.{" "}
            <span className="font-semibold">
              Functions: replace_rating, shorten_elongation, replace_acronyms,
              normalize_slangs, expand_contraction, word_normalization.
            </span>
          </p>
        </div>

        {/* replace_rating ---------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="01"
            title="replace_rating"
            signature="replace_rating(text: str) → str"
            description="Normalize rating patterns in text (e.g., `4,5/5` → `4.5`)."
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
                    name: "text",
                    type: "str",
                    description:
                      "Raw text that may contain rating expressions (e.g., 4/5, 4,5/5).",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text where rating patterns have been normalized into a consistent numeric format.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`rating_text = "Film ini dapet rating 4,5/5 di review pelanggan."
print("replace_rating:", replace_rating(rating_text))

>>> replace_rating: Film ini dapet rating 4.5 di review pelanggan.`}
            </UseCase>
          </div>
        </div>

        {/* shorten_elongation ----------------------------------------------- */}
        <div className="mt-10 space-y-6">
          <BlockHeading
            index="02"
            title="shorten_elongation"
            signature="shorten_elongation(text: str, max_repeat: int = 2) → str"
            description="Limit repeated characters to a maximum count (e.g., `reelllllll` → `reell`)."
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
                    name: "text",
                    type: "str",
                    description:
                      "Input text that may contain elongated characters for emphasis.",
                  },
                  {
                    name: "max_repeat",
                    type: "int",
                    defaultValue: "2",
                    description:
                      "Maximum allowed repetitions for the same character sequence.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text with elongated sequences shortened to the specified maximum.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`elongation_text = "Bagus,,, murah tapi gak murahan,,,, istri jadi seneng,,,, barang reelllllll,,,,, makasih seler..... Jaga terus amanah mu,,,, semoga tokonya laris manis."
print("shorten_elongation: ", shorten_elongation(elongation_text, max_repeat=2))

>>> shorten_elongation:  Bagus,, murah tapi gak murahan,, istri jadi seneng,, barang reell,, makasih seler.. Jaga terus amanah mu,, semoga tokonya laris manis.`}
            </UseCase>
          </div>
        </div>

        {/* replace_acronyms ------------------------------------------------- */}
        <div className="mt-10 space-y-6">
          <BlockHeading
            index="03"
            title="replace_acronyms"
            signature='replace_acronyms(text: str, mode: str) → str   # allowed_modes = {"remove", "replace"}'
            description='Expand or remove acronyms using context-aware rules (e.g., "m" → "meter" vs "medium").'
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
                    name: "text",
                    type: "str",
                    description:
                      "Raw text that may contain acronyms or shorthand tokens.",
                  },
                  {
                    name: "mode",
                    type: 'str, one of {"remove", "replace"}',
                    description:
                      '"replace": expand acronyms into their full form; "remove": drop acronyms from the text.',
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text with acronyms either expanded or removed depending on the selected mode.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`acronym_text = "Harga hp baru itu 5 jt, ukurannya 5 m panjangnya."
print("replace_acronym:", replace_acronym(acronym_text, mode="replace"))

>>> replace_acronym: Harga handphone baru itu 5 jt, ukurannya 5 meter panjangnya.`}
            </UseCase>
          </div>
        </div>

        {/* normalize_slangs ------------------------------------------------- */}
        <div className="mt-10 space-y-6">
          <BlockHeading
            index="04"
            title="normalize_slangs"
            signature='normalize_slangs(text: str, mode: str) → str   # allowed_modes = {"remove", "replace"}'
            description="Substitute slang forms with standard words or remove them entirely."
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
                    name: "text",
                    type: "str",
                    description:
                      "Raw text that may contain informal slang expressions.",
                  },
                  {
                    name: "mode",
                    type: 'str, one of {"remove", "replace"}',
                    description:
                      '"replace": substitute slang with standard form; "remove": delete slang tokens.',
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text where slang expressions are either normalized or removed.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`slang_text = "Gw lg kesana ya, tp setelah itu gas ke mall ya"
print("normalize_slangs:", normalize_slangs(slang_text, mode="replace"))

>>> normalize_slangs: Gw lg kesana ya, tp setelah itu lanjut ke mall ya`}
            </UseCase>
          </div>
        </div>

        {/* expand_contraction ----------------------------------------------- */}
        <div className="mt-10 space-y-6">
          <BlockHeading
            index="05"
            title="expand_contraction"
            signature="expand_contraction(text: str) → str"
            description='Expand Indonesian contractions (e.g., "gk" → "tidak").'
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
                    name: "text",
                    type: "str",
                    description:
                      "Raw text that may contain shortened or contracted forms.",
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text where contractions are expanded into their full standard form.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`contraction_text = "PRIMA!! Kualitas sih standard BAGUS! Tapi yg pasti pengiriman cepat, barang asli, segel atas bawah, ga dibuka-buka sama penjual. KEREN LAH! Serasa PRO!"
print("expand_contraction", expand_contraction(contraction_text))

>>> expand_contraction PRIMA!! Kualitas sih standard BAGUS! Tapi yang pasti pengiriman cepat, barang asli, segel atas bawah, tidak dibuka-buka sama penjual. KEREN LAH! Serasa PRO!`}
            </UseCase>
          </div>
        </div>

        {/* word_normalization ----------------------------------------------- */}
        <div className="mt-10 space-y-6">
          <BlockHeading
            index="06"
            title="word_normalization"
            signature='word_normalization(text: str, method: str = "stem", word_list=None, mode: str = "keep") → str'
            description="Normalize words into a more canonical form using stemming or (future) lemmatization."
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
                    name: "text",
                    type: "str",
                    description:
                      "Raw text that may contain words to be normalized.",
                  },
                  {
                    name: "method",
                    type: 'str, default "stem"',
                    description:
                      '"stem": use Sastrawi stemmer (default); "lemma": planned future lemmatization support.',
                  },
                  {
                    name: "word_list",
                    type: "list[str] | None",
                    defaultValue: "None",
                    description:
                      "Custom list of special words used to guide normalization behaviour.",
                  },
                  {
                    name: "mode",
                    type: 'str, default "keep"',
                    description:
                      '"keep": do not stem words in word_list; "only": only stem words listed in word_list.',
                  },
                ]}
              />
            </section>

            <section>
              <h3 className="text-lg font-semibold text-primary-600">
                Returns
              </h3>
              <DocList
                variant="params"
                items={[
                  {
                    name: "str",
                    description:
                      "Text with words normalized according to the selected method and mode.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`normalization_text = "Kinerja: bagus pengisian lumayan cepat\\nDesain: lumayan besar\\nKondisi: sangat bagus\\nBarang sudah sampai dengan selamat 👍 \\nUntuk power bank nya berfungsi semua 💯🙏\\nSesuai gambar produknya 👍"
print("word_normalization:", word_normalization(normalization_text, method="stem", mode="keep"))

>>> word_normalization: kerja bagus isi lumayan cepat desain lumayan besar kondisi sangat bagus barang sudah sampai dengan selamat  untuk power bank nya fungsi semua  sesuai gambar produk`}
            </UseCase>
          </div>
        </div>
      </section>
    </article>
  );
}
