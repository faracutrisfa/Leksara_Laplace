import SectionHeading from "../../components/docs/SectionHeading";
import BlockHeading from "../../components/docs/BlockHeading";
import DocList from "../../components/docs/DocList";
import UseCase from "../../components/docs/UseCase";

const introTextClass =
  "sm:ml-14 mt-3 text-[13px] sm:text-[15px] leading-relaxed text-neutral-4 font-medium";

export default function UserBrush() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Leksara Modules
      </h1>

      {/* 04 — UserBrush --------------------------------------------------- */}
      <section className="mt-10">
        <SectionHeading index="04" title="UserBrush" />

        <div className={introTextClass}>
          <p>
            Utilities for PII-aware cleaning: mask or remove phone numbers,
            emails, addresses, and national IDs (NIK). All functions support
            ‘mode="remove" (delete)’ or ‘mode="replace"’ (mask with a token).
            Patterns and dictionaries are loaded from bundled resources.
            Functions: replace_phone, replace_email, replace_address,
            replace_id.
          </p>
        </div>

        {/* 01 — replace_phone --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="01"
            title="replace_phone"
            signature='replace_phone(text: str, mode: str = "remove") -> str'
            description="Finds Indonesian phone numbers, normalizes variants of +62/62/0, validates length (10–13 digits), then removes or replaces with [PHONE_NUMBER]. Extra spaces are collapsed."
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
                    description: "input text",
                  },
                  {
                    name: "",
                    type: "",
                    description:
                      'mode ("remove" | "replace"): Deletion or masking mode.',
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
                      "Text with valid phone numbers removed or replaced.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.pattern import replace_phone

text1 = "Telp: (+62) 812 3456-7890"
result1 = replace_phone(text1, mode="replace")
print("Result (replace):", result1)

text2 = "Nomor: 0812 3456 7890 aktif"
result2 = replace_phone(text2, mode="remove")
print("Result (remove):", result2)

>>> "Result (replace): Telp: [PHONE_NUMBER]"
>>> "Result (remove): Nomor: aktif"
 `}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/tree/main/leksara/functions/patterns" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 02 — replace_email --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="02"
            title="replace_email"
            signature='replace_email(text: str, mode: str = "remove") -> str'
            description="Detects emails using a configured regex and removes or replaces them with [EMAIL]."
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
                    description: "input text",
                  },
                  {
                    name: "",
                    type: "",
                    description:
                      'mode ("remove" | "replace"): Deletion or masking mode.',
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
                    description: "Text with valid emails removed or replaced.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.pattern import replace_email

text = "Email: customer123@gmail.com"
print(replace_email(text, mode="replace"))

>>> "Email: [EMAIL]"`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/tree/main/leksara/functions/patterns" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 03 — replace_address --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="03"
            title="replace_address"
            signature='replace_address(text: str, mode: str = "remove", **kwargs) -> str'
            description="Masks address components when a trigger pattern is present (e.g., “Alamat”, “Jl.” as configured). It merges nearby components, inserts [ADDRESS], and removes a following city token if it matches the bundled city dictionary. You may selectively enable components via keyword flags (e.g., street=True). Output spacing/punctuation is cleaned."
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
                    description: "Input text.",
                  },
                  {
                    name: "mode",
                    type: '("remove" | "replace")',
                    description: "Deletion or masking mode.",
                  },
                  {
                    name: "kwargs",
                    type: "optional",
                    description:
                      "Select which address components to process. Available components:",
                    children: [
                      "a. street: street or alley name (e.g., “Jalan Sudirman”)",
                      "b. house: house or building number (e.g., “No. 12”)",
                      "c. rtrw: neighborhood unit (RT/RW) (e.g., “RT 03 RW 05”)",
                      "d. kel: subdistrict / village (e.g., “Kelurahan Melati”)",
                      "e. kec: district (e.g., “Kecamatan Setiabudi”)",
                      "f. kabkota: regency / city (e.g., “Kabupaten Sragen”, “Kota Bandung”)",
                      "g. prov: province (e.g., “Provinsi Jawa Tengah”)",
                      "h. zip: postal code (e.g., “57262”)",
                    ],
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
                      "Text with valid addresses removed or replaced.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.pattern import replace_address

text = "Alamatku di Jl. Merdeka No. 12 RT 02 RW 03, Jakarta"
result = replace_address(text, mode="replace")
print(result)

>>> "Alamatku di [ADDRESS]"
`}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/tree/main/leksara/functions/patterns" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 04 — replace_id --------------------------------------------------- */}
        <div className="mt-6 space-y-6">
          <BlockHeading
            index="04"
            title="replace_id"
            signature='replace_id(text: str, mode: str = "remove") -> str'
            description="Masks Indonesian NIK using a configured regex pattern; replacement token is [NIK]."
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
                    description: "input text",
                  },
                  {
                    name: "",
                    type: "",
                    description:
                      'mode ("remove" | "replace"): Deletion or masking mode.',
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
                      "Text with valid IDs (NIK) removed or replaced.",
                  },
                ]}
              />
            </section>

            <UseCase title="Use Case">
              {`from leksara.pattern import replace_id

text = "NIK: 3276120705010003"
print(replace_id(text, mode="replace"))

>>> "NIK: [NIK]"
 `}
            </UseCase>

            <div>
              <h3 className="text-lg font-semibold text-primary-600">Source</h3>
              <a href="https://github.com/RedEye1605/Leksara/tree/main/leksara/functions/patterns" target="_blank" className="text-primary-600 underline">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
