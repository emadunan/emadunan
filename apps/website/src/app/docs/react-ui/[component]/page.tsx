import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Demo from "@/components/docs/react-ui/Demo";
import PropsTable from "@/components/docs/react-ui/PropsTable";
import { componentDocs, getComponentDoc } from "@/components/docs/react-ui/registry";
import styles from "@/components/docs/react-ui/docs.module.css";

type Params = Promise<{ component: string }>;

export const dynamicParams = false;

export function generateStaticParams(): { component: string }[] {
  return componentDocs.map((doc) => ({ component: doc.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { component } = await params;
  const doc = getComponentDoc(component);
  return doc ? { title: doc.name, description: doc.description } : {};
}

export default async function ComponentDocPage({ params }: { params: Params }) {
  const { component } = await params;
  const doc = getComponentDoc(component);
  if (!doc) notFound();

  const importNames = doc.name.split(/,\s*|\s*&\s*/).join(", ");

  return (
    <>
      <h1>{doc.name}</h1>
      <p className={styles.lead}>{doc.description}</p>
      <code className={styles.inlineCode}>
        {`import { ${importNames} } from "@emadunan/react-ui";`}
      </code>

      <h2>Examples</h2>
      {doc.demos.map((demo) => (
        <Demo key={demo.id} {...demo} />
      ))}

      <h2>Props</h2>
      <PropsTable props={doc.props} />
      {doc.extends && (
        <p className={styles.paragraph}>
          All other props are passed to the underlying{" "}
          <code className={styles.inlineCode}>{doc.extends}</code> element.
        </p>
      )}

      {doc.subcomponents?.map((sub) => (
        <section key={sub.name}>
          <h2>{sub.name}</h2>
          <p className={styles.paragraph}>{sub.description}</p>
          {sub.props.length > 0 && <PropsTable props={sub.props} />}
        </section>
      ))}

      {doc.notes && doc.notes.length > 0 && (
        <>
          <h2>Notes</h2>
          <ul className={styles.list}>
            {doc.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
