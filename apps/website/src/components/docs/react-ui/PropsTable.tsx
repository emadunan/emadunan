import type { PropDoc } from "./registry";
import styles from "./docs.module.css";

interface Props {
  props: PropDoc[];
}

export default function PropsTable({ props }: Props) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td>
                <code className={styles.inlineCode}>{prop.name}</code>
                {prop.required && <span className={styles.required}> required</span>}
              </td>
              <td>
                <code className={styles.typeCode}>{prop.type}</code>
              </td>
              <td>{prop.default ? <code className={styles.inlineCode}>{prop.default}</code> : "—"}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
