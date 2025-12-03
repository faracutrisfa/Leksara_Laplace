import BlockHeading from "../../components/docs/BlockHeading";
import DocList from "../../components/docs/DocList";
import SectionHeading from "../../components/docs/SectionHeading";
import UseCase from "../../components/docs/UseCase";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function ReviewMiner() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 02 — ReviewMiner --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="02" title="ReviewMiner" />

        <div className={introTextClass}>
          <p>
            Utilities for language-aware preprocessing of Indonesian text.
            Functions:    remove_tags, case_normal, remove_stopwords,
            remove_whitespace, remove_punctuation, remove_digits, replace_url,
            remove_emoji
          </p>
        </div>
        {/* 01 — replace_rating --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="01"
            title="replace_rating"
            signature="replace_string(text: str)-> str"
            description="Converts rating patterns or expressions (e.g., ⭐️⭐️⭐️, 4.5/5) into standardized tokens or numeric values"
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
                    description: "Raw text that may contain rating patterns ",
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
                    name: "str",
                    description:
                      "Text with rating patterns or expressions turned into standardized numeric values.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`rating_text = “Film ini dapet rating 4,5/5 di review pelanggan.”

print(replace_rating(rating_text))
>> Film ini dapet rating 4.5 di review pelanggan
)`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/functions/review/advanced.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 02 — shorten_elongation --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="02"
            title="shorten_elongation"
            signature="shorten_elongation(text: str, max_repeat: int = 2) -> str:"
            description="Reduces excessive repeated characters in a word to a manageable length (e.g., “Woow” -> “Wow”)"
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
                      "Raw text that may contain elongation or excessive repeated characters",
                  },
                  {
                    name: "max_repeat",
                    type: "int = 2",
                    description:
                      "Maximum allowed consecutive repetitions of the same character",
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
                    name: "str",
                    description:
                      "Text with a shortened elongation and manageable length of excessive characters in words",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`elongation_text = “Bagus,,, murah tapi gak murahan,,,, istri jadi seneng,,,, barang reelllllll,,,,, makasih seler..... Jaga terus amanah mu,,,, semoga tokonya laris manis.”
print(shorten_elongation(elongation_text))

>> Bagus,, murah tapi gak murahan,, istri jadi seneng,, barang reell,, makasih seler.. Jaga terus amanah mu,, semoga tokonya laris manis.`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/functions/review/advanced.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 03 — replace_acronyms --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="03"
            title="replace_acronyms"
            signature='replace_acronyms(text: str, mode: str = "remove")-> str:'
            description="Reduces excessive repeated characters in a word to a manageable length (e.g., “Woow” -> “Wow”)"
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
                      "input text that may contain acronyms or abbreviations",
                  },
                  {
                    name: "mode",
                    type: "str = “remove”",
                    description: "Removes acronyms from the text",
                  },
                  {
                    name: "mode",
                    type: "str = replace",
                    description:
                      "Replaces acronyms from the text with their expanded/meaningful form",
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
                    name: "str",
                    description:
                      "The processed text with acronyms removed or replaced based on mode",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`acronym_text = “Harga hp baru itu 5 jt, ukurannya 5 m panjangnya.”
print(replace_acronym(acronym_text))
>> Harga handphone baru itu 5 jt, ukurannya 5 meter panjangnya.`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/functions/review/advanced.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 04 — normalize_slangs --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="04"
            title="normalize_slangs"
            signature='normalize_slangs(text: str, mode: str = "replace") -> str:'
            description="Transforms informal or chat-style words into their formal equivalents (e.g., “huhu” -> “sedih”)"
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
                      "input text that may contain slang, informal words, or chat abbreviations",
                  },
                  {
                    name: "mode",
                    type: "str = “remove”",
                    description: "Removes slangs from the text",
                  },
                  {
                    name: "mode",
                    type: "str = replace",
                    description:
                      "Replaces slangs from the text with their standard/formal equivalents",
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
                    name: "str",
                    description:
                      "Text with slang standardized or removed, depending on the mode",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`slangs_text = “Gw lg kesana ya, tp setelah itu gas ke mall ya”

print(normalize_slang(slangs_text))

>> Gw lg kesana ya, tp setelah itu lanjut ke mall ya`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/functions/review/advanced.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 05 — expand_contraction --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="05"
            title="expand_contraction"
            signature="expand_contraction(text: str) -> str:"
            description="Automatically expands shortened word forms into full words (e.g., “yg” -> “yang”)"
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
                      " input text that may contain contractions (shortened word forms)",
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
                    name: "str",
                    description:
                      "Text with contractions expanded into full forms",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`contraction_text = “PRIMA!! Kualitas sih standard BAGUS! Tapi yg pasti pengiriman cepat, barang asli, segel atas bawah, ga dibuka-buka sama penjual. KEREN LAH! Serasa PRO!”

print(expand_contraction(contraction_text))

>> PRIMA!! Kualitas sih standard BAGUS! Tapi yang pasti pengiriman cepat, barang asli, segel atas bawah, tidak dibuka-buka sama penjual. KEREN LAH! Serasa PRO!`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/functions/review/advanced.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 06 — word_normalization --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="06"
            title="word_normalization"
            signature='word_normalization(text: str, method: str = "stem", word_list=None, mode: str = "keep",) -> str:'
            description="Standardizes words by stemming or lemmatizing"
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
                    description: "Input text to normalize",
                  },
                  {
                    name: "method",
                    type: "str = “stem”",
                    description: "Reduces words to their root form",
                  },
                  {
                    name: "method",
                    type: "str = “lemma”",
                    description: "Converts words to dictionary/base form",
                  },
                  {
                    name: "word_list",
                    type: "list | None",
                    description:
                      "A custom list of words used to guide the normalization process",
                  },
                  {
                    name: "mode",
                    type: "str = “keep”",
                    description:
                      "Retains normalized words in addition to the original text",
                  },
                  {
                    name: "mode",
                    type: "str = “only”",
                    description:
                      "Return only the processed/normalized text found in word_list",
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
                    name: "str",
                    description:
                      "The text with words normalized according to the specified method and mode.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`normalization_text = “Pengiriman barang cepat dan penggunaannya bagus sekali.”

print(word_normalization(normalization_text, method=”stem”, mode=”keep”))

>> kirim barang cepat dan guna bagus sekali

normalization_text = “Pengiriman barang cepat dan penggunaannya bagus sekali.”

print(word_normalization(normalization_text, method=”lemma”, mode=”only”))

>> Pengiriman barang cepat dan penggunaannya bagus sekali.`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/blob/main/leksara/functions/review/advanced.py" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
